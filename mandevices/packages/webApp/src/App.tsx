import Login from "components/login";
import Tasks from "components/tasks";
import SignUp from "components/SignUp/SignUp";
import UserList from "components/user/user-list/users";
import React, { useEffect, useState } from "react";
import {
	GoogleLoginResponse,
	useGoogleLogin,
	useGoogleLogout,
} from "react-google-login";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { isGoogleLogingResponseOffline } from "utils";
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Container, Jumbotron, Row } from "react-bootstrap";
import Header from "components/header";
import DutyRegistersPage from "components/work-day-list/DutyRegistersPage";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { useMediaQuery } from "react-responsive";
import Loading from "shared/loading/Loading";
import DeviceList from "components/device/device-list";
import DeviceCreate from "components/device/device-create";
import DeviceEdit from "components/device/device-edit";
import DeviceCreateExcel from "components/device/device-create/Excel";
import Authorize from "components/authorize/Authorize";
import UserEdit from "components/user/user-edit/index";
import { createUploadLink } from "apollo-upload-client";

const wsLink = new WebSocketLink({
	uri:
		process.env.REACT_APP_GRAPHQL_WEBSOCKET ||
		`wss://${window.location.host}/subscription`,
	options: {
		lazy: true,
		reconnect: true,
	},
});

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

if (!clientId) {
	throw new Error("GOOGLE_CLIENT_ID ENV is missing");
}

const httpLink = createUploadLink({
	uri: process.env.REACT_APP_GRAPHQL_URI || "graphql",
});

const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === "OperationDefinition" &&
			definition.operation === "subscription"
		);
	},
	wsLink,
	// @ts-ignore
	httpLink
);

export const UserContext = React.createContext<GoogleLoginResponse | undefined>(
	undefined
);

export const ResponsiveContext = React.createContext<
	{ isMobileOrTablet?: boolean } | undefined
>(undefined);

export const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				dutiesByDate: {
					merge(_, incomming = []) {
						return [...incomming];
					},
				},
				users: {
					keyArgs: false,
					merge(_, incomming = []) {
						return [...incomming];
					},
				},
			},
		},
	},
});

const App: React.FC = () => {
	const [loading, setLoading] = useState(true);
	const [
		authenticatedUser,
		setAuthenticatedUser,
	] = useState<GoogleLoginResponse>();

	const { signOut } = useGoogleLogout({
		clientId,
		onLogoutSuccess() {
			setAuthenticatedUser(undefined);
		},
	});

	const { loaded } = useGoogleLogin({
		clientId,
		isSignedIn: true,
		onSuccess(res) {
			if (!isGoogleLogingResponseOffline(res)) {
				setAuthenticatedUser({
					...res,
				});
				setLoading(false);
			}
		},
	});

	useEffect(() => {
		if (loaded) {
			setLoading(false);
		}
	}, [loaded]);
	const isMobileOrTablet = useMediaQuery({
		query: "(max-device-width: 991px)",
	});

	const handleSignOut = () => {
		signOut();
	};

	if (loading)
		return (
			<div className="d-flex justify-content-center align-items-center vh-100">
				<Loading />
			</div>
		);

	const authLink = setContext((_, { headers }) => {
		const token = authenticatedUser?.tokenId;

		return {
			headers: {
				...headers,
				authorization: token ? `Bearer ${token}` : "",
			},
		};
	});
	const client = new ApolloClient({
		link: authLink.concat(splitLink),
		cache,
	});

	return (
		<ResponsiveContext.Provider
			value={{
				isMobileOrTablet,
			}}
		>
			<ApolloProvider client={client}>
				<Row className="vh-100 mvw-100 m-0 flex-column flex-nowrap">
					<BrowserRouter>
						<Route path="/app">
							{!authenticatedUser && <Redirect to="/" />}
							{authenticatedUser && (
								<UserContext.Provider value={authenticatedUser}>
									<main className="flex-grow-1">
										<Header
											user={authenticatedUser}
											onSignOut={handleSignOut}
										/>
										<Container>
											<Switch>
												<Route path="/app/create-device">
													<DeviceCreate />
												</Route>
												<Route path="/app/create-device-excel">
													<DeviceCreateExcel />
												</Route>
												<Route path="/app/devices/:id">
													<DeviceEdit />
												</Route>
												<Route path="/app/devices">
													<DeviceList />
												</Route>
												<Route path="/app/task">
													<Tasks />
												</Route>
												<Route path="/app/authorize">
													<Authorize />
												</Route>
												<Route path="/app/users/:id">
													<UserEdit />
												</Route>
												<Route path="/app/users">
													<UserList />
												</Route>
												<Route path="/app/:startWeek">
													<DutyRegistersPage
														onFail={handleSignOut}
													/>
												</Route>
												<Redirect to="/app/0" />
											</Switch>
										</Container>
									</main>
								</UserContext.Provider>
							)}
						</Route>
						<Route path="/" exact>
							{authenticatedUser && <Redirect to="/app" />}
							<Container className="flex-grow-1">
								<Login
									onSuccess={setAuthenticatedUser}
									onFail={handleSignOut}
								/>
							</Container>
						</Route>
						<Route path="/dang-ky" exact>
							{/* {authenticatedUser && <Redirect to="/app" />} */}
							<Container className="flex-grow-1">
								<SignUp
									googleClientId={clientId}
									onSuccess={setAuthenticatedUser}
									onBack={handleSignOut}
								/>
							</Container>
						</Route>
					</BrowserRouter>
					<Jumbotron className="m-0 pb-0 text-center">
						Icons made by
						<a
							href="https://www.flaticon.com/authors/freepik"
							title="Freepik"
						>
							Freepik
						</a>
						from
						<a href="https://www.flaticon.com/" title="Flaticon">
							www.flaticon.com
						</a>
					</Jumbotron>
				</Row>
			</ApolloProvider>
		</ResponsiveContext.Provider>
	);
};

export default App;
