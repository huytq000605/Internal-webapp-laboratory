import React, { useState, useEffect } from "react";

import { Alert, Button, Col, Form, Image } from "react-bootstrap";
import {
	GoogleLogin,
	GoogleLoginResponse,
	GoogleLoginResponseOffline,
} from "react-google-login";
import { isGoogleLogingResponseOffline } from "utils";
import "./SignUp.scss";
import logo from "assets/logo.png";
import { useHistory, useLocation } from "react-router-dom";
import { useGetUsersQuery } from "generated/graphql";
import useForm from "./useForm";

interface Props {
	googleClientId?: string;
	onSuccess?: (data: GoogleLoginResponse) => void;
	setShowRegis?: (data: boolean) => void;
	onBack?: () => void;
}
interface Optional {
	label: string;
	value: string;
	id: string;
}

const SignUp: React.FC<Props> = ({ googleClientId, onSuccess, onBack }) => {
	const [error, setError] = useState<string>();
	const [authUser, setAuthUser] = useState<GoogleLoginResponse>();
	const history = useHistory();

	const location = useLocation();
	const [roleRegis, setRoleRegis] = useState<string | unknown>("user");

	const {
		handleChange,
		inputs,
		handleSubmit,
		errors,
		regisStatus,
		handleBack,
		facultyData,
		specialtyData,
	} = useForm(roleRegis, onBack);

	const { data } = useGetUsersQuery({
		fetchPolicy: "network-only",
	});

	useEffect(() => {
		return setRoleRegis(location.state);
	}, [location]);

	useEffect(() => {
		if (!googleClientId) {
			setError("Google client id trống");
		}
	}, [googleClientId]);

	const handleOnSuccess = (googleData: GoogleLoginResponse) => {
		const checkUser = (email: string) => {
			return data?.getUsers.map((user) => user.email).includes(email);
		};

		const userRegister = checkUser(googleData.profileObj.email);
		if (!userRegister) {
			if (onSuccess) {
				onSuccess(googleData);
			}
		} else {
			const delay = (milliseconds: number) =>
				new Promise((resolve) => setTimeout(resolve, milliseconds));
			(async () => {
				setError(
					"Tài khoản đã đăng ký trước đó, quay trở lại trong 3s"
				);
				await delay(3000);
				history.push("/app");
			})();
		}
	};
	const handleSubmitSucess = (event: React.FormEvent<HTMLFormElement>) => {
		handleSubmit(event);
	};

	const handleSuccess = (
		res: GoogleLoginResponse | GoogleLoginResponseOffline
	) => {
		if (!isGoogleLogingResponseOffline(res)) {
			// RESEARCH: why pass res (not clone) then not rerender
			setAuthUser({ ...res });
			handleOnSuccess(res);
		}
	};

	return (
		<section className="signup-page">
			<div className="signup">
				<Image className="signup__logo" src={logo} />
				{error && <Alert variant="danger">{error}</Alert>}
				{googleClientId && !authUser && (
					<GoogleLogin
						clientId={googleClientId}
						onSuccess={handleSuccess}
						uxMode="redirect"
						render={(props) => (
							// eslint-disable-next-line react/jsx-props-no-spreading
							<Button className="social" {...props}>
								<i className="bi bi-google" />
								<span>Đăng kí bằng Google</span>
							</Button>
						)}
					/>
				)}
				{authUser && googleClientId && (
					<>
						<Alert variant="info">
							<p>
								Đăng kí thông tin cho tài khoản
								<strong> {authUser.profileObj.email}</strong>
							</p>
							<GoogleLogin
								clientId={googleClientId}
								onSuccess={handleSuccess}
								render={(props) => (
									// eslint-disable-next-line react/jsx-props-no-spreading
									<Button {...props}>
										<span>Đổi tài khoản</span>
									</Button>
								)}
							/>
						</Alert>
						<Form onSubmit={handleSubmitSucess}>
							<Form.Group>
								{regisStatus && (
									<div style={{ color: "red" }}>
										{regisStatus}
									</div>
								)}
								<Form.Label htmlFor="full-name">
									Họ và tên
								</Form.Label>
								<Form.Control
									id="full-name"
									name="fullname"
									value={inputs.fullname}
									onChange={handleChange}
									required={roleRegis === "user"}
								/>
								{errors.fullname && (
									<div style={{ color: "red" }}>
										{errors.fullname}
									</div>
								)}
							</Form.Group>
							<Form.Group>
								<Form.Label>Vai trò</Form.Label>
								<Form.Row>
									<Col>
										<Form.Check
											id="student_role"
											type="radio"
											defaultChecked
											name="role"
											label="Sinh viên | Cựu sinh viên"
										/>
									</Col>
									<Col>
										<Form.Check
											id="other_role"
											type="radio"
											label="Khác"
											name="role"
										/>
									</Col>
								</Form.Row>
							</Form.Group>
							<Form.Group>
								<Form.Label htmlFor="faculty">
									Viện đào tạo
								</Form.Label>
								<Form.Control
									as="select"
									id="faculty"
									name="faculty"
									value={inputs.faculty}
									onChange={handleChange}
									required={roleRegis === "user"}
								>
									{facultyData.map((option: Optional) => (
										<option
											value={option.value}
											key={option.id}
										>
											{option.label}
										</option>
									))}
								</Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label htmlFor="specialty">
									Chuyên ngành
								</Form.Label>
								<Form.Control
									as="select"
									id="specialty"
									name="specialty"
									value={inputs.specialty}
									onChange={handleChange}
									required={roleRegis === "user"}
								>
									{specialtyData.map((option: Optional) => (
										<option
											value={option.value}
											key={option.id}
										>
											{option.label}
										</option>
									))}
								</Form.Control>
							</Form.Group>
							<Form.Row>
								<Col>
									<Form.Group>
										<Form.Label htmlFor="class">
											Lớp
										</Form.Label>
										<Form.Control
											id="class"
											name="class"
											value={inputs.class}
											onChange={handleChange}
											required={roleRegis === "user"}
										/>
									</Form.Group>
								</Col>
								<Col>
									<Form.Group>
										<Form.Label htmlFor="student-code">
											Mã số sinh viên
										</Form.Label>
										<Form.Control
											id="student-code"
											name="studentId"
											value={inputs.studentId}
											onChange={handleChange}
											required={roleRegis === "user"}
										/>
										{errors.studentId && (
											<div style={{ color: "red" }}>
												{errors.studentId}
											</div>
										)}
									</Form.Group>
								</Col>
							</Form.Row>
							<Button type="submit">Đăng kí</Button>
							<Button
								variant="outline-danger"
								type="button"
								onClick={handleBack}
							>
								Quay lại
							</Button>
						</Form>
					</>
				)}
			</div>
		</section>
	);
};

export default SignUp;
