import { GoogleLoginProps } from "react-google-login";
import { updateState } from "utils";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "utils/test";
import SignUp from "./SignUp";
import { SystemCheckDocument } from "generated/graphql";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";

const mockRes = {
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
		email: "tester@gmail.com",
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
};

const mockResponse = jest.fn();

jest.mock("react-google-login", () => {
	return {
		GoogleLogin: ({ buttonText, onSuccess, render }: GoogleLoginProps) => {
			const handleClick = () => {
				mockResponse.mockReturnValueOnce(mockRes).mockReturnValueOnce({
					...mockRes,
					profileObj: {
						googleId: "",
						email: "admin@gmail.com",
						familyName: "",
						givenName: "",
						imageUrl: "",
						name: "",
					},
				});
				if (onSuccess) onSuccess(mockResponse());
			};

			if (render) return render({ onClick: handleClick });
			return <div onClick={handleClick}>{buttonText}</div>;
		},
	};
});

beforeEach(() => {
	jest.resetModules();
});

describe("SignUp", () => {
	it("should show button `Đăng kí bằng Google`", () => {
		render(<SignUp googleClientId="fake" />);

		screen.getByText(/đăng kí bằng google/i);
	});

	it("should show error message when google client id is undefined", () => {
		render(<SignUp />);
		screen.getByText(/Google client id trống/i);
	});

	it.todo("should show error message when google account is not confirmed");

	it("should show form to enter information after get google account successfully", async () => {
		render(<SignUp googleClientId="fake" />);

		expect(
			screen.queryAllByLabelText(
				/(họ và tên)|(viện đào tạo)|(chuyên ngành)|(lớp)|(mã số sinh viên)/i
			)
		).toEqual([]);

		fireEvent.click(
			screen.getByRole("button", { name: /đăng kí bằng google/i })
		);

		await updateState();

		screen.getByText("tester@gmail.com");

		const fullNameInput = screen.getByLabelText("Họ và tên");
		const falcutyInput = screen.getByLabelText("Viện đào tạo");
		const specialtyInput = screen.getByLabelText("Chuyên ngành");
		const classInput = screen.getByLabelText("Lớp");
		const studentCodeInput = screen.getByLabelText("Mã số sinh viên");

		screen.getByRole("radio", {
			name: /sinh viên \| cựu sinh viên/i,
			checked: true,
		});
		const otherRoleRadio = screen.getByRole("radio", {
			name: /khác/i,
			checked: false,
		});

		fireEvent.click(otherRoleRadio);
		screen.getByRole("radio", {
			name: /khác/i,
			checked: true,
		});
		screen.getByRole("radio", {
			name: /sinh viên \| cựu sinh viên/i,
			checked: false,
		});

		fireEvent.change(fullNameInput, { target: { value: "Bob John" } });
		screen.getByDisplayValue("Bob John");

		fireEvent.change(falcutyInput, { target: { value: "Viện Điện" } });
		screen.getByDisplayValue("Viện Điện");

		fireEvent.change(specialtyInput, {
			target: { value: "Hệ thống điện" },
		});
		screen.getByDisplayValue("Hệ thống điện");

		fireEvent.change(classInput, {
			target: { value: "TĐH 04" },
		});
		screen.getByDisplayValue("TĐH 04");

		fireEvent.change(studentCodeInput, {
			target: { value: "20160392" },
		});
		screen.getByDisplayValue("20160392");
	});

	it("should able to change to another google account", async () => {
		render(<SignUp googleClientId="fake" />);

		expect(
			screen.queryAllByLabelText(
				/(họ và tên)|(viện đào tạo)|(chuyên ngành)|(lớp)|(mã số sinh viên)/i
			)
		).toEqual([]);

		fireEvent.click(
			screen.getByRole("button", { name: /đăng kí bằng google/i })
		);

		await updateState();

		screen.getByText("tester@gmail.com");

		fireEvent.click(screen.getByRole("button", { name: /đổi tài khoản/i }));

		await updateState();

		screen.getByText("admin@gmail.com");
	});

	it("should display error fields", async () => {
		render(<SignUp googleClientId="fake" />);

		fireEvent.click(
			screen.getByRole("button", { name: /đăng kí bằng google/i })
		);

		await updateState();

		screen.getByText("tester@gmail.com");

		const fullNameInput = screen.getByLabelText("Họ và tên");
		const studentCodeInput = screen.getByLabelText("Mã số sinh viên");

		fireEvent.change(fullNameInput, {
			target: {
				value: "Testing name more than with 45 character aaaaaaaaaa",
			},
		});
		fireEvent.change(studentCodeInput, { target: { value: "202020222" } });
		fireEvent.click(screen.getByRole("button", { name: /đăng kí/i }));
		await updateState();

		screen.getByText("Too long!!!(max 45 char)");
		screen.getByText("Wrong format");

		fireEvent.change(fullNameInput, {
			target: {
				value: "Validated name",
			},
		});

		fireEvent.change(studentCodeInput, { target: { value: "20202020" } });
		fireEvent.click(screen.getByRole("button", { name: /đăng kí/i }));
		await updateState();
		expect(
			screen.queryByText("Too long!!!(max 45 char)")
		).not.toBeInTheDocument();
		expect(screen.queryByText("Wrong format")).not.toBeInTheDocument();
	});
	it.todo("should allow regis owner");
	// it("should allow regis owner", async () => {
	// 	const systemCheckMock: MockedResponse = {
	// 		request: {
	// 			query: SystemCheckDocument,
	// 		},
	// 		result: {
	// 			data: {
	// 				system: {
	// 					hasOwnerAccount: true,
	// 				},
	// 			},
	// 		},
	// 	};

	// 	const CreateOwnersMock: MockedResponse = {
	// 		request: {
	// 			query: CreateOwnerDocument,
	// 			variables: {
	// 				input: {
	// 					name: "Phong",
	// 					studentID: "20202020",
	// 					faculty: "Viện Điện",
	// 					specialty: "Hệ thống điện",
	// 					class: "tdh10",
	// 				},
	// 			},
	// 		},
	// 		result: {
	// 			data: {
	// 				createOwner: [
	// 					{
	// 						_id: "5fe5b79a1365eb50f054f407",
	// 						name: "Phong",
	// 						createdAt: null,
	// 						ownerId: "dsdsdd",
	// 					},
	// 				],
	// 			},
	// 		},
	// 	};

	// 	render(<SignUp googleClientId="fake" />, [
	// 		systemCheckMock,
	// 		CreateOwnersMock,
	// 	]);

	// 	fireEvent.click(
	// 		screen.getByRole("button", { name: /đăng kí bằng google/i })
	// 	);

	// 	await updateState();
	// 	fireEvent.click(screen.getByRole("button", { name: /Đăng kí/i }));
	// 	await updateState();
	// 	expect(screen.getByText("Đăng ký thành công")).toBeInTheDocument();
	// });
});
