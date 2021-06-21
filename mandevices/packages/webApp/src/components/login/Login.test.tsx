import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { fireEvent, render, screen } from "@testing-library/react";
import { GoogleLoginProps } from "react-google-login";
import { updateState } from "utils";
import Login from ".";
import { SystemCheckDocument } from "generated/graphql";
import { render as r } from "utils/test";
describe("Login", () => {
	it.todo(
		"should show error message when they login unsuccessfully"
		// , async () => {
		// 	jest.doMock("react-google-login", () => {
		// 		return {
		// 			// ...jest.requireActual<Record<string, undefined>>(
		// 			// 	"react-google-login"
		// 			// ),
		// 			GoogleLogin: ({ buttonText, onFailure }: GoogleLoginProps) => {
		// 				console.log(
		// 					"🚀 ~ file: Login.test.tsx ~ line 15 ~ jest.doMock ~ onFailure",
		// 					onFailure
		// 				);
		// 				const handleClick = () => {
		// 					if (onFailure) onFailure("Loi roi");
		// 				};
		// 				return <div onClick={handleClick}>{buttonText}</div>;
		// 			},
		// 			useGoogleLogin: () => ({
		// 				loaded: true,
		// 			}),
		// 			useGoogleLogout: () => ({
		// 				loaded: true,
		// 				signOut: jest.fn(),
		// 			}),
		// 		};
		// 	});

		// 	render(
		// 		<MockedProvider>
		// 			<Login />
		// 		</MockedProvider>
		// 	);

		// 	fireEvent.click(screen.getByText("Đăng nhập bằng Google"));

		// 	await updateState();

		// 	screen.getByText("Đăng nhập bằng Google");
		// 	screen.getByText(/Loi roi/i);
		// }
	);
	it("should should hide owner regis button and display user regis button", async () => {
		const systemCheckMock: MockedResponse = {
			request: {
				query: SystemCheckDocument,
			},
			result: {
				data: {
					system: {
						hasOwnerAccount: true,
					},
				},
			},
		};
		r(<Login />, [systemCheckMock]);

		await updateState();

		expect(
			screen.queryByText("Đăng kí tài khoản quản trị")
		).not.toBeInTheDocument();
		expect(
			screen.queryByText("Đăng kí tài khoản thành viên")
		).toBeInTheDocument();
	});

	it("should hide user regis, disable login button and display owner regis button", async () => {
		const systemCheckMock: MockedResponse = {
			request: {
				query: SystemCheckDocument,
			},
			result: {
				data: {
					system: {
						hasOwnerAccount: false,
					},
				},
			},
		};
		r(<Login />, [systemCheckMock]);
		await updateState();
		expect(screen.queryByText("Đăng kí tài khoản thành viên")).not
			.toBeInTheDocument;
		expect(screen.getByText("Đăng kí tài khoản quản trị"))
			.toBeInTheDocument;
		expect(
			screen.getByText(/Đăng nhập bằng Google/i).closest("button")
		).toBeDisabled();
	});
});
