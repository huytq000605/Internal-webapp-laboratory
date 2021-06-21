import React, { useEffect, useState } from "react";
import { useEditDeviceMutation, useGetDeviceQuery } from "generated/graphql";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { validate } from "utils";

interface Inputs {
	name: string;
	category: string;
	model?: string | null;
	image: {
		path: string | null;
		file: File | null;
	};
}

const DeviceEdit = () => {
	const { id } = useParams<{ id: string }>();
	const [inputs, setInputs] = useState<Inputs>({
		name: "",
		category: "",
		image: {
			file: null,
			path: "",
		},
	});
	const history = useHistory();
	const { loading, error, data } = useGetDeviceQuery({
		variables: { input: id },
		fetchPolicy: "network-only",
	});
	const [editDevice] = useEditDeviceMutation({
		onCompleted() {
			history.push("/app/devices");
		},

		onError() {
			// eslint-disable-next-line no-console
			console.log("Error");
		},
	});
	const [onSubmit, setOnSubmit] = useState<boolean>(false);

	const [isError, errorMessages] = validate(inputs, {
		name: {
			isError: ({ name }) => name.length > 30,
			message: "Name quá dài (tối đa 30 kí tự)",
		},
		category: {
			isError: ({ category }) => category.length > 30,
			message: "Category quá dài (tối đa 30 kí tự)",
		},
		model: {
			isError: ({ model }) => !!model && model.length > 30,
			message: "Model quá dài (tối đa 30 kí tự)",
		},
	});

	useEffect(() => {
		if (data) {
			const { device } = data;
			setInputs({
				name: device.name,
				category: device.category,
				model: device.model ? device.model : null,
				image: {
					...inputs.image,
					path: device.image?.path ? device.image?.path : "",
				},
			});
		}
	}, [data]);

	useEffect(() => {
		const submit = async () => {
			if (onSubmit) {
				const variables = {
					id,
					image: inputs.image.file,
					name: inputs.name,
					category: inputs.category,
					model: inputs.model,
				};
				await editDevice({
					variables,
				});
			}
		};
		submit();
	}, [errorMessages, onSubmit]);

	if (loading) return <h1>Loading...</h1>;
	if (error) {
		return <h1>{error.toString()}</h1>;
	}

	const textInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputs((prevInputs) => {
			return { ...prevInputs, [e.target.id]: e.target.value };
		});
	};
	const imageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const file = e.target.files[0];
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onloadend = () => {
				setInputs((prevInputs) => {
					return {
						...prevInputs,
						image: {
							path: reader.result
								? reader.result.toString()
								: null,
							file,
						},
					};
				});
			};
		}
	};

	const onFormSubmit = async (e: any) => {
		e.preventDefault();

		if (!isError) {
			setOnSubmit(true);
		}
	};

	const onCancel = () => {
		history.push("/app/devices");
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
					<img src={inputs.image.path} alt="uploadImage" />
				)}
				<Form.Group controlId="model">
					<Form.Label>Model</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter model"
						value={inputs.model ? inputs.model : ""}
						onChange={textInputChange}
					/>
				</Form.Group>
				{errorMessages.model}
				<Row>
					<Col>
						<Button
							disabled={isError}
							variant="primary"
							type="submit"
						>
							Submit
						</Button>
					</Col>
					<Col>
						<Button onClick={onCancel} variant="secondary">
							Cancel
						</Button>
					</Col>
				</Row>
			</Form>
		</>
	);
};

export default DeviceEdit;
