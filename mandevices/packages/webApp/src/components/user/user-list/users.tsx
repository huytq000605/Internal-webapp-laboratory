import {
	useGetUsersQuery,
	User,
	useDeleteUserMutation,
} from "generated/graphql";
import React, { useState, useEffect } from "react";
import {
	Table,
	Pagination,
	PageItem,
	Button,
	Row,
	Col,
	ListGroup,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";

const UserList: React.FC = () => {
	const { data, loading, error, refetch } = useGetUsersQuery({
		fetchPolicy: "network-only",
	});

	const [deleteUser] = useDeleteUserMutation({
		onCompleted: () => {
			refetch();
		},
	});
	const history = useHistory();

	const [currentPage, setcurrentPage] = useState(1);
	const [results, setResults] = useState<User[]>();

	const limit = 6;
	const dataLength = data?.getUsers.length;
	const limitPages = dataLength ? Math.ceil(dataLength / limit) : 0;

	const handleNext = () => {
		setcurrentPage(currentPage + 1);
	};

	const handleBack = () => {
		setcurrentPage(currentPage - 1);
	};

	const handleChangePage = (page: number) => {
		setcurrentPage(page);
	};

	const items = [];
	for (let number = 1; number <= limitPages; number++) {
		items.push(
			<PageItem
				key={number}
				active={number === currentPage}
				activeLabel="(current)"
				onClick={() => handleChangePage(number)}
			>
				{number}
			</PageItem>
		);
	}

	useEffect(() => {
		return setResults(
			data?.getUsers.slice((currentPage - 1) * limit, currentPage * limit)
		);
	}, [currentPage, data]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div style={{ color: "red" }}>{error.message}</div>;
	return (
		<div>
			<h1 className="text-w-50">Danh sách người dùng</h1>
			<Pagination>
				<Pagination.First
					onClick={() => handleChangePage(1)}
					disabled={currentPage === 1}
				/>
				<Pagination.Prev
					onClick={handleBack}
					disabled={currentPage === 1}
				/>
				<Pagination>{items}</Pagination>
				<Pagination.Next
					onClick={handleNext}
					disabled={currentPage === limitPages}
				/>
				<Pagination.Last
					onClick={() => handleChangePage(limitPages)}
					disabled={currentPage === limitPages}
				/>
			</Pagination>
			<Table bordered hover responsive="xl">
				<thead>
					<tr>
						<th>#</th>
						<th>Email</th>
						<th>Name</th>
						<th>MSSV</th>
						<th>Lớp</th>
						{/* <th>Viện</th>
						<th>Chuyên ngành</th> */}
						<th>Roles</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{results?.map((user: User, index: number) => (
						<tr key={user._id}>
							<th>{(currentPage - 1) * limit + index}</th>
							<th>{user.email}</th>
							<th>{user.name}</th>
							<th>{user.studentId}</th>
							<th>{user.class}</th>
							{/* <th>{user.faculty}</th>
							<th>{user.specialty}</th> */}
							<th>
								<ListGroup horizontal>
									{user.roles.map((role) => (
										<ListGroup.Item
											variant="primary"
											key={role}
										>
											{role}
										</ListGroup.Item>
									))}
								</ListGroup>
							</th>
							<th>
								<Row>
									<Col>
										<Button
											onClick={() => {
												history.push(
													`/app/users/${user._id}`
												);
											}}
											variant="light"
										>
											Edit
										</Button>
									</Col>
									<Col>
										<Button
											variant="danger"
											onClick={() => {
												deleteUser({
													variables: {
														input: user._id,
													},
												});
												refetch();
											}}
										>
											Delete
										</Button>
									</Col>
								</Row>
							</th>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default UserList;
