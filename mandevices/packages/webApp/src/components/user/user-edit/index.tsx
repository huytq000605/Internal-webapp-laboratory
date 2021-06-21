import React, { useEffect, useState } from "react";
import { Button, Col, Form, ListGroup, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { validate } from "utils";
import {
	useEditUserMutation,
	useGetRolesQuery,
	useGetUserQuery,
} from "../../../generated/graphql";

interface Inputs {
	name: string;
	class: string;
	studentId: string;
	roles: string[];
}

const UserEdit = () => {
	const history = useHistory();
	const { id } = useParams<{ id: string }>();
	const [roleChoose, setRoleChoose] = useState<string>("----Select Role----");
	const [editRoleMode, setEditRoleMode] = useState("Confirm");
	const { data, loading, error } = useGetUserQuery({
		variables: {
			input: id,
		},
		fetchPolicy: "network-only",
	});

	const { data: roleData } = useGetRolesQuery({
		fetchPolicy: "cache-and-network",
	});

	const roleList = roleData?.getRoles.map((role) => role.name);
	// console.log(roleList);

	const [editUser] = useEditUserMutation({
		onCompleted: () => {
			history.push("/app/users");
		},
	});
	const [inputs, setInputs] = useState<Inputs>({
		name: "",
		studentId: "",
		class: "",
		roles: [],
	});
	const [isError, errorMessages] = validate(inputs, {
		name: {
			isError: ({ name }) => name.length > 30,
			message: "Name quá dài (tối đa 30 kí tự)",
		},
		studentId: {
			isError: ({ studentId }) => {
				if (Number(studentId) > 30000000) return false;
			},
			message: "MSSV sai định dạng",
		},
		class: {
			isError: ({ class: className }) => className.length > 30,
			message: "Class quá dài (tối đa 30 kí tự)",
		},
	});

	useEffect(() => {
		if (data) {
			const user = data.getUser;
			setInputs({
				name: user.name ? user.name : "",
				studentId: user.studentId ? user.studentId : "",
				class: user.class ? user.class : "",
				roles: user.roles,
			});
		}
	}, [data]);

	useEffect(() => {
		if (inputs.roles.includes(roleChoose)) setEditRoleMode("Delete role");
		else setEditRoleMode("Add role");
	}, [roleChoose, inputs.roles]);

	if (loading) return <h1>Loading...</h1>;
	if (error) return <h1>Error...</h1>;

	const onFormSubmit = (e: any) => {
		e.preventDefault();
		const variables = {
			input: {
				_id: id,
				name: inputs.name,
				studentId: inputs.studentId,
				class: inputs.class,
				roles: inputs.roles,
			},
		};
		editUser({ variables });
	};

	const textInputChange = (e: any) => {
		setInputs((prevInputs) => {
			return {
				...prevInputs,
				[e.target.id]: e.target.value,
			};
		});
	};

	const handleChooseRole = (e: any) => {
		setRoleChoose(e.target.value);
	};

	const handleEditRole = () => {
		if (editRoleMode === "Add role") {
			setInputs((prevInputs) => {
				return {
					...prevInputs,
					roles: [...prevInputs.roles, roleChoose],
				};
			});
		} else {
			setInputs((prevInputs) => {
				return {
					...prevInputs,
					roles: prevInputs.roles.filter(
						(role) => role !== roleChoose
					),
				};
			});
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
				<Form.Group controlId="studentId">
					<Form.Label>Student ID</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter student id"
						value={inputs.studentId}
						onChange={textInputChange}
						required
					/>
				</Form.Group>
				{errorMessages.studentId}
				<Form.Group controlId="class">
					<Form.Label>Class</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter class"
						value={inputs.class}
						onChange={textInputChange}
					/>
				</Form.Group>
				{errorMessages.class}
				<Form.Group controlId="roles">
					<Form.Label>
						Roles:
						<ListGroup horizontal>
							{inputs.roles.map((role) => (
								<ListGroup.Item key={role} variant="primary">
									{role}
								</ListGroup.Item>
							))}
						</ListGroup>
					</Form.Label>
					<Row>
						<Col>
							<Form.Control
								as="select"
								id="role"
								name="role"
								value={roleChoose}
								onChange={handleChooseRole}
								defaultValue="select"
							>
								{roleList &&
									["----Select Role----", ...roleList].map(
										(role) => (
											<option
												value={role}
												key={role}
												disabled={
													role ===
													"----Select Role----"
												}
											>
												{role}
											</option>
										)
									)}
							</Form.Control>
						</Col>
						<Col>
							<Button
								variant="primary"
								onClick={handleEditRole}
								disabled={roleChoose === "----Select Role----"}
							>
								{editRoleMode}
							</Button>
						</Col>
						{/* <Col>
							<Button
								variant="primary"
								onClick={handleDeleteRole}
								disabled={!inputs.roles.includes(roleChoose)}
							>
								Delete role
							</Button>
						</Col> */}
					</Row>
				</Form.Group>
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
						<Button
							onClick={() => {
								history.push("/app/users");
							}}
							variant="secondary"
						>
							Cancel
						</Button>
					</Col>
				</Row>
			</Form>
		</>
	);
};

export default UserEdit;
