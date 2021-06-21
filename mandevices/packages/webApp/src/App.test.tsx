import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { fireEvent, getByText, render, screen } from "@testing-library/react";
import App from "App";
import { GetUsersDocument } from "generated/graphql";
import { getMaxListeners } from "process";
import { GoogleLoginProps } from "react-google-login";
import { render as r } from "utils/test";
import DutyRegistersPage from "../src/components/work-day-list/DutyRegistersPage";
import { SystemCheckDocument } from "generated/graphql";
const mocks: MockedResponse = {
	request: {
		query: GetUsersDocument,
	},
	result: {
		data: {
			getUsers: [
				{
					_id: "mandevices.testing@gmail.com",
				},
				{
					_id: "mandevices.testing2@gmail.com",
				},
			],
		},
	},
};
let mockGoogleLoaded: jest.Mock<boolean, []>;
let mockLoginState: jest.Mock<boolean, []>;

jest.mock("react-google-login", () => {
	return {
		...jest.requireActual<Record<string, undefined>>("react-google-login"),
		GoogleLogin: ({ buttonText, onSuccess }: GoogleLoginProps) => {
			const handleClick = () => {
				if (mockLoginState() && onSuccess)
					onSuccess({
						getAuthResponse: jest.fn(),
						getBasicProfile: jest.fn(),
						accessToken: "",
						disconnect: jest.fn(),
						getGrantedScopes: jest.fn(),
						getHostedDomain: jest.fn(),
						getId: jest.fn(),
						googleId: "",
						grant: jest.fn(),
						grantOfflineAccess: jest.fn(),
						hasGrantedScopes: jest.fn(),
						isSignedIn: jest.fn(),
						profileObj: {
							googleId: "",
							email: "testing@gmail.com",
							familyName: "",
							givenName: "",
							imageUrl: "",
							name: "",
						},
						reloadAuthResponse: jest.fn(),
						signIn: jest.fn(),
						tokenId: "",
						tokenObj: {
							access_token: "",
							expires_at: 1,
							expires_in: 1,
							first_issued_at: 1,
							id_token: "",
							login_hint: "",
							scope: "",
						},
					});
			};
			return <div onClick={handleClick}>{buttonText}</div>;
		},
		useGoogleLogin: () => ({
			loaded: mockGoogleLoaded,
		}),
		useGoogleLogout: () => ({
			loaded: mockGoogleLoaded,
			signOut: jest.fn(),
		}),
	};
});

describe("App", () => {
	it("should show loading ui", () => {
		render(<App />);

		screen.getByTestId("loading");
	});
	it("should show login by google method", async () => {
		mockGoogleLoaded = jest.fn(() => true);

		render(<App />);
		screen.getByText("Đăng nhập bằng Google");
	});

	it("shoud alert not registered acc", () => {
		mockGoogleLoaded = jest.fn(() => true);
		mockLoginState = jest.fn(() => true);
		r(<App />, [mocks]);
		fireEvent.click(screen.getByText("Đăng nhập bằng Google"));
		// screen.getByText("Chưa đăng kí tài khoản!");
	});
	it.todo("should log in successfull");
	it.todo(
		"should return log out if no owner"
		// () => {
		// mockGoogleLoaded = jest.fn(() => true);
		// mockLoginState = jest.fn(() => true);
		// // r(<App />, [mocks]);
		// const systemCheckMock: MockedResponse = {
		// 	request: {
		// 		query: SystemCheckDocument,
		// 	},
		// 	result: {
		// 		data: {
		// 			system: {
		// 				hasOwnerAccount: false,
		// 			},
		// 		},
		// 	},
		// };
		// r(<DutyRegistersPage />, [systemCheckMock]);
		// expect(screen.getByText("Đăng nhập bằng Google"));
		// }
	);
	it.todo("after log in refresh not force logout");
});
