import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import {
	useGetRolesQuery,
	useEditRoleMutation,
	useCreateRoleMutation,
	useDeleteRoleMutation,
	useGetPermissonsConfigQuery,
} from "generated/graphql";
import config from "./config.json";

interface Props {
	group: string;
	permission: string[];
	currentRole: string;
	currentPermissions: string[] | undefined;
	permissionsResult: Set<string>;
	createMode: boolean;
}

const ApiPermission: React.FC<Props> = ({
	group,
	permission,
	currentRole,
	currentPermissions,
	permissionsResult,
	createMode,
}) => {
	const handleCheckboxChange = (data: string, event: any) => {
		const checkbox = event.target.checked;

		if (checkbox) permissionsResult.add(data);
		else permissionsResult.delete(data);
	};

	useEffect(() => {
		if (!createMode)
			currentPermissions?.forEach((item) => permissionsResult.add(item));
	});

	return (
		<Form.Check>
			<Form.Label>{group}</Form.Label>
			<div className="mb-3">
				{permission.map((data) => (
					<Form.Check
						key={data}
						defaultChecked={
							createMode
								? undefined
								: currentPermissions?.includes(data)
						}
						onClick={(event) => {
							handleCheckboxChange(data, event);
						}}
						custom
						inline
						label={data}
						id={`checkbox-${data}`}
						disabled={
							createMode
								? false
								: currentRole === "----Select Role----"
						}
					/>
				))}
			</div>
		</Form.Check>
	);
};

const Authorize: React.FC = () => {
	const [createMode, setCreateMode] = useState(false);
	const [roleCreateName, setRoleCreateName] = useState("");
	const [roleAuth, setRoleAuth] = useState("----Select Role----");
	const [currentPermissions, setCurrentPermissions] = useState<string[]>();
	const permissionsResult = new Set<string>();

	const { data: roleData, refetch, loading, error } = useGetRolesQuery({
		fetchPolicy: "network-only",
	});

	const [updateRole] = useEditRoleMutation({
		onCompleted: () => {
			refetch();
		},
	});
	const [createRole] = useCreateRoleMutation({
		onCompleted: () => {
			refetch();
		},
	});

	const [deleteRole] = useDeleteRoleMutation({
		onCompleted: () => {
			refetch();
		},
	});

	const roleList = roleData?.getRoles.map((data) => data.name);

	const { data: configData } = useGetPermissonsConfigQuery();
	const groupList = configData?.getPermissionsConfig
		.map((data) => data.group)
		.filter((value, index, self) => self.indexOf(value) === index);

	const handleChooseRole = (e: any) => {
		setRoleAuth(e.target.value);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (!createMode) {
			updateRole({
				variables: {
					input: {
						name: roleAuth,
						permissions: Array.from(permissionsResult),
					},
				},
			});
		} else {
			createRole({
				variables: {
					input: {
						name: roleCreateName,
						permissions: Array.from(permissionsResult),
					},
				},
			});
		}
	};

	useEffect(() => {
		setCurrentPermissions(
			roleData?.getRoles.filter((role) => role.name === roleAuth)[0]
				?.permissions
		);
	}, [roleAuth]);

	if (loading) return <h1>Loading ...</h1>;
	if (error) return <h1>{error.toString()}</h1>;

	return (
		<div>
			<h1>Phân quyền</h1>
			<Button
				onClick={() => {
					setCreateMode(true);
				}}
				disabled={createMode}
				variant="primary"
			>
				Create role
			</Button>
			<h2>Role name</h2>
			{createMode ? (
				<>
					<Form.Control
						id="roleCreateName"
						value={roleCreateName}
						onChange={(e) => {
							setRoleCreateName(e.target.value);
						}}
						type="text"
						placeholder="Input role name"
					/>
				</>
			) : (
				<Form.Control
					as="select"
					id="role"
					name="role"
					value={roleAuth}
					onChange={handleChooseRole}
					defaultValue="select"
				>
					{roleList &&
						["----Select Role----", ...roleList].map((role) => (
							<option
								value={role}
								key={role}
								disabled={role === "----Select Role----"}
							>
								{role}
							</option>
						))}
				</Form.Control>
			)}
			<h2>Permissions</h2>
			<Form onSubmit={handleSubmit}>
				{roleAuth &&
					groupList &&
					groupList.map((group) => (
						<ApiPermission
							key={group}
							group={group}
							permission={config
								.filter((data) => data.group === group)
								.map((obj) => obj.api)}
							currentRole={roleAuth}
							currentPermissions={currentPermissions}
							permissionsResult={permissionsResult}
							createMode={createMode}
						/>
					))}
				{createMode ? (
					<>
						<Row>
							<Col>
								<Button
									disabled={!roleCreateName}
									type="submit"
								>
									Xác nhận
								</Button>
							</Col>
							<Col>
								<Button
									onClick={() => {
										setCreateMode(false);
									}}
								>
									Quay lại
								</Button>
							</Col>
						</Row>
					</>
				) : (
					<Row>
						<Col>
							<Button
								type="submit"
								disabled={roleAuth === "----Select Role----"}
							>
								Xác nhận
							</Button>
						</Col>
						<Col>
							<Button
								disabled={roleAuth === "----Select Role----"}
								onClick={() => {
									deleteRole({
										variables: {
											input: roleAuth,
										},
									});
								}}
							>
								Xóa
							</Button>
						</Col>
					</Row>
				)}
			</Form>
		</div>
	);
};

export default Authorize;
