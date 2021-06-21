import React, { useState, useEffect } from "react";
import { Alert, Card, Image, Row, Button } from "react-bootstrap";
import { useSystemCheckQuery, useGetUsersQuery } from "generated/graphql";
import {
	GoogleLogin,
	GoogleLoginResponse,
	GoogleLoginResponseOffline,
} from "react-google-login";

import { isGoogleLogingResponseOffline } from "utils";
import logo from "assets/logo.png";
import { isString } from "lodash";
import { Link } from "react-router-dom";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

interface Props {
	onFail?: () => void;
	onSuccess?: (data: GoogleLoginResponse) => void;
}

const Login: React.FC<Props> = ({ onSuccess, onFail }) => {
	const [error, setError] = useState<string>();
	const status = useSystemCheckQuery({
		fetchPolicy: "network-only",
	}).data;

	const [showRegisOwner, setShowRegisOwner] = useState(true);
	const [errorRegis, setErrorRegis] = useState<boolean>();

	useEffect(() => {
		if (status?.system.hasOwnerAccount) setShowRegisOwner(false);
	});

	const { data } = useGetUsersQuery({
		fetchPolicy: "network-only",
	});

	const handleOnSuccess = (googleData: GoogleLoginResponse) => {
		const checkUser = (email: string) => {
			return data?.getUsers.map((user) => user.email).includes(email);
		};

		const userRegistered = checkUser(googleData.profileObj.email);
		if (userRegistered) {
			setErrorRegis(false);
			if (onSuccess) {
				onSuccess(googleData);
			}
		}
		if (userRegistered === false) {
			setErrorRegis(true);
			if (onFail) onFail();
		}
	};

	if (!clientId)
		return (
			<div style={{ color: "red" }}>
				Chưa cấu hình để đăng nhập bằng Google
			</div>
		);

	const handleLoginSuccess = (
		response: GoogleLoginResponse | GoogleLoginResponseOffline
	) => {
		if (isGoogleLogingResponseOffline(response)) {
			return;
		}
		handleOnSuccess(response);
	};

	const handleFailure = (failure: unknown) => {
		if (isString(failure)) {
			setError(failure);
		}

		if (failure instanceof Error) {
			setError(failure.message);
		}
	};

	return (
		<Row className="justify-content-center h-100 flex-column p-5">
			{error && <Alert variant="danger">{error}</Alert>}
			<Card className="text-center">
				<Card.Header>
					<Image fluid src={logo} className="w-50" />
				</Card.Header>
				<Card.Body>
					<GoogleLogin
						clientId={clientId}
						buttonText="Đăng nhập bằng Google"
						isSignedIn
						uxMode="redirect"
						onSuccess={handleLoginSuccess}
						onFailure={handleFailure}
						disabled={!status?.system.hasOwnerAccount}
					/>
					{showRegisOwner && (
						<Link
							to={{
								pathname: "/dang-ky",
								state: "admin",
							}}
						>
							<Button variant="light" size="sm">
								Đăng kí tài khoản quản trị
							</Button>
						</Link>
					)}
					{!showRegisOwner && (
						<Link
							to={{
								pathname: "/dang-ky",
								state: "user",
							}}
						>
							<Button variant="light" size="sm">
								Đăng kí tài khoản thành viên
							</Button>
						</Link>
					)}
					{errorRegis && (
						<div style={{ color: "red" }}>
							Chưa đăng kí tài khoản!
						</div>
					)}
				</Card.Body>
			</Card>
		</Row>
	);
};

export default Login;
