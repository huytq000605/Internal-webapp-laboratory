import { useState } from "react";
import {
	useCreateAdminMutation,
	useSystemCheckQuery,
	useCreateUserMutation,
} from "generated/graphql";
import { useHistory } from "react-router-dom";
import validate from "./ValidateForm";

const useForm: any = (regisRole: string, onBack: () => void) => {
	const [inputs, setInputs] = useState({
		fullname: "",
		studentId: "",
		faculty: "",
		class: "",
		specialty: "",
	});
	const facultyData = [
		{
			id: 0,
			label: "",
			value: "",
		},
		{
			id: 1,
			label: "Viện Điện",
			value: "Viện Điện",
		},
		{
			id: 2,
			label: "Viện Điện tử viễn thông",
			value: "Viện Điện tử viễn thông",
		},
		{
			id: 3,
			label: "Viện Vật lý kĩ thuật",
			value: "Viện Vật lý kĩ thuật",
		},
		{
			id: 4,
			label: "Viện Toán ứng dụng và Tin học",
			value: "Viện Toán ứng dụng và Tin học",
		},
	];
	const specialtyData = [
		{
			id: 0,
			label: "",
			value: "",
		},
		{
			id: 1,
			label: "Hệ thống điện",
			value: "Hệ thống điện",
		},
		{
			id: 2,
			label: "Kĩ thuật đo và tin học công nghiệp",
			value: "Kĩ thuật đo và tin học công nghiệp",
		},
		{
			id: 3,
			label: "Tự động hoá công nghiệp",
			value: "Tự động hoá công nghiệp",
		},
		{
			id: 4,
			label: "Điều khiển tự động",
			value: "Điều khiển tự động",
		},
	];
	const [regisStatus, setRegisStatus] = useState<string | undefined>();
	const [errors, setErrors] = useState({});
	const history = useHistory();
	const adminStatus = useSystemCheckQuery({
		fetchPolicy: "network-only",
	}).data;

	const [createUser] = useCreateUserMutation({
		onCompleted() {
			const delay = (milliseconds: number) =>
				new Promise((resolve) => setTimeout(resolve, milliseconds));
			(async () => {
				setRegisStatus("Đăng ký thành công");
				await delay(2000);
				history.push("/app");
			})();
		},
	});
	const [createAdmin] = useCreateAdminMutation({
		onCompleted() {
			const delay = (milliseconds: number) =>
				new Promise((resolve) => setTimeout(resolve, milliseconds));
			(async () => {
				setRegisStatus("Đăng ký thành công");
				await delay(2000);
				history.push("/app");
			})();
		},
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputs({
			...inputs,
			[event.target.name]: event.target.value,
		});
	};
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const validateErrors = validate(inputs);
		const noErrors = Object.keys(validateErrors).length === 0;
		setErrors(validateErrors);

		if (noErrors && regisRole === "admin") {
			if (!adminStatus?.system.hasOwnerAccount) {
				createAdmin({
					variables: {
						input: {
							name: inputs.fullname,
							studentId: inputs.studentId,
							faculty: inputs.faculty,
							specialty: inputs.specialty,
							class: inputs.class,
						},
					},
				});
			} else {
				setRegisStatus(
					"Đã có tài khoản Quản trị hệ thống, hãy quay trở lại"
				);
			}
		}
		if (noErrors && regisRole === "user") {
			createUser({
				variables: {
					input: {
						name: inputs.fullname,
						studentId: inputs.studentId,
						faculty: inputs.faculty,
						specialty: inputs.specialty,
						class: inputs.class,
					},
				},
			});
		}
	};

	const handleBack = (event: React.MouseEvent) => {
		event.preventDefault();
		onBack();
		history.push("/");
	};

	return {
		handleChange,
		inputs,
		handleSubmit,
		errors,
		regisStatus,
		handleBack,
		facultyData,
		specialtyData,
	};
};

export default useForm;
