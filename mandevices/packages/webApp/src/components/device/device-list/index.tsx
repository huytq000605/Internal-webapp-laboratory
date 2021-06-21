import React, { useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGetDevicesQuery, useDeleteDeviceMutation } from "generated/graphql";
import QueryOptions from "../../../utils/QueryOptions";

interface Options {
	sort?: {
		name?: 1 | -1;
		category?: 1 | -1;
		model?: 1 | -1;
	};
	filter?: {
		name?: string;
		category?: string;
		model?: string;
	};
	perPage?: number;
	numPage?: number;
}
const DeviceList = () => {
	const [options, setOptions] = useState<Options>({});
	const { loading, error, data, refetch } = useGetDevicesQuery({
		fetchPolicy: "network-only",
		variables: {
			options,
		},
	});
	const [deleteDevice] = useDeleteDeviceMutation({
		onCompleted: () => {
			refetch();
		},
	});
	if (loading) return <h1>Loading...</h1>;
	if (error) {
		return <h1>{error.toString()}</h1>;
	}
	if (data === undefined) return <h1>Not found</h1>;
	const { devices } = data;

	const setNameOptions = (value: string) => {
		setOptions((prevOptions) => {
			return {
				...prevOptions,
				filter: {
					...prevOptions.filter,
					name: value,
				},
			};
		});
	};

	const setCategoryOptions = (value: string) => {
		setOptions((prevOptions) => {
			return {
				...prevOptions,
				filter: {
					...prevOptions.filter,
					category: value,
				},
			};
		});
	};

	const setModelOptions = (value: string) => {
		setOptions((prevOptions) => {
			return {
				...prevOptions,
				filter: {
					...prevOptions.filter,
					model: value,
				},
			};
		});
	};

	return (
		<div>
			<Link to="/app/create-device">
				<Button variant="primary">Create Device</Button>
			</Link>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>
							Name{" "}
							<QueryOptions
								setOptions={setNameOptions}
								options={
									options?.filter?.name
										? options.filter.name
										: ""
								}
							/>
						</th>
						<th>
							Category{" "}
							<QueryOptions
								setOptions={setCategoryOptions}
								options={
									options?.filter?.category
										? options.filter.category
										: ""
								}
							/>
						</th>
						<th>Image</th>
						<th>
							Model{" "}
							<QueryOptions
								setOptions={setModelOptions}
								options={
									options?.filter?.model
										? options.filter.model
										: ""
								}
							/>
						</th>
						<th>Created At</th>
						<th>Created By</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{devices.map((device, index: number) => {
						return (
							<tr key={device._id}>
								<td>{index + 1}</td>
								<td>{device.name}</td>
								<td>{device.category}</td>
								<td>
									{device.image?.path && (
										<img
											src={device.image?.path}
											alt="uploadedImage"
										/>
									)}
								</td>
								<td>{device.model}</td>
								<td>{device.createdAt}</td>
								<td>{device.createdBy.name}</td>
								<td>
									<Row>
										<Col>
											<Link
												to={`/app/devices/${device._id}`}
											>
												<Button variant="light">
													Edit
												</Button>
											</Link>
										</Col>
										<Col>
											<Button
												variant="danger"
												onClick={() => {
													deleteDevice({
														variables: {
															id: device._id,
														},
													});
												}}
											>
												Delete
											</Button>
										</Col>
									</Row>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
			{/* <Row>
				<Col />
				<Col>
					<Pagination>
						<Pagination.First />
						<Pagination.Prev />
						<Pagination.Item>{1}</Pagination.Item>
						<Pagination.Ellipsis />

						<Pagination.Item>{10}</Pagination.Item>
						<Pagination.Item>{11}</Pagination.Item>
						<Pagination.Item active>{12}</Pagination.Item>
						<Pagination.Item>{13}</Pagination.Item>
						<Pagination.Item disabled>{14}</Pagination.Item>

						<Pagination.Ellipsis />
						<Pagination.Item>{20}</Pagination.Item>
						<Pagination.Next />
						<Pagination.Last />
					</Pagination>
				</Col>
			</Row> */}
		</div>
	);
};

export default DeviceList;
