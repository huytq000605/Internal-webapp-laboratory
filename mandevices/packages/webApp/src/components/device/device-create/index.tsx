import { useCreateDeviceMutation } from "generated/graphql";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { validate } from "utils";

interface Inputs {
	name: string;
	category: string;
	model: string;
	image: {
		path: string | ArrayBuffer | null;
		file: File | null;
	};
}

const DeviceCreate = () => {
	const history = useHistory();
	const [inputs, setInputs] = useState<Inputs>({
		name: "",
		category: "",
		model: "",
		image: {
			file: null,
			path: "",
		},
	});

	const [isError, errorMessages] = validate(inputs, {
		name: {
			isError: ({ name }) => name.length > 30,
			message: "Tên quá dài (tối đa 30 kí tự)",
		},
		category: {
			isError: ({ category }) => category.length > 30,
			message: "Tên quá dài (tối đa 30 kí tự)",
		},
		model: {
			isError: ({ model }) => model.length > 30,
			message: "Tên quá dài (tối đa 30 kí tự)",
		},
	});

	const [createDevice] = useCreateDeviceMutation({
		onCompleted: () => {
			history.push("/app/devices");
		},
		onError: () => {
			// TODO: HANDLE ERROR HERE
		},
	});
	const [onSubmit, setOnSubmit] = useState<boolean>(false);

	useEffect(() => {
		const submit = async () => {
			if (onSubmit === true) {
				const variables = {
					image: inputs.image.file,
					name: inputs.name,
					category: inputs.category,
					model: inputs.model,
				};
				await createDevice({
					variables,
				});
			}
		};
		submit();
	}, [onSubmit]);

	const textInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputs((prevInputs) => {
			return { ...prevInputs, [e.target.id]: e.target.value };
		});
	};
	const imageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const file = e.target.files[0];
			const reader = new FileReader();
			reader.onloadend = () => {
				setInputs((prevInputs) => {
					return {
						...prevInputs,
						image: { path: reader.result, file },
					};
				});
			};
			reader.readAsDataURL(file);
		}
	};

	const onCancel = () => {
		history.push("/app/devices");
	};

	const onFormSubmit = async (e: any) => {
		e.preventDefault();

		if (!isError) {
			setOnSubmit(true);
		}
	};

	return (
		<>
			<Form onSubmit={onFormSubmit}>
				<Form.Group controlId="name">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter name"
						value={inputs?.name}
						onChange={textInputChange}
						required
					/>
				</Form.Group>
				{errorMessages.name}
				<Form.Group controlId="category">
					<Form.Label>Category</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter category"
						value={inputs.category}
						onChange={textInputChange}
						required
					/>
				</Form.Group>
				{errorMessages.category}
				<Form.Group>
					<Form.File
						id="image"
						label="Image"
						onChange={imageInputChange}
					/>
				</Form.Group>
				{inputs.image.path && typeof inputs.image.path === "string" && (
					<img src={inputs.image.path} alt="img" />
				)}
				<Form.Group controlId="model">
					<Form.Label>Model</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter model"
						value={inputs.model}
						onChange={textInputChange}
					/>
				</Form.Group>
				{errorMessages.model}
				<Row>
					<Col>
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Col>
					<Col>
						<Button onClick={onCancel} variant="secondary">
							Cancel
						</Button>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col />
					<Col>
						<Button
							variant="info"
							onClick={() => {
								history.push("/app/create-device-excel");
							}}
						>
							Create Devices Excel
						</Button>
					</Col>
					<Col />
				</Row>
			</Form>
		</>
	);
};

export default DeviceCreate;
