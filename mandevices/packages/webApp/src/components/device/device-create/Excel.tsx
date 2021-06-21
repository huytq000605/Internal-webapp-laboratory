import { useCreateDevicesMutation } from "generated/graphql";
import React, { useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import XLSX from "xlsx";
import { mapKeys } from "lodash";

interface Device {
	name: string;
	category: string;
	model?: string;
}

const ExcelMimeType = [
	"application/vnd.ms-excel",
	"application/msexcel",
	"application/x-msexcel",
	"application/x-ms-excel",
	"application/x-excel",
	"application/x-dos_ms_excel",
	"application/xls",
	"application/x-xls",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];

const DeviceExcelCreate = () => {
	const [devices, setDevices] = useState<Device[]>([]);
	const [createDevices] = useCreateDevicesMutation();
	const [errorFile, setErrorFile] = useState(false);
	const [errorFormat, setErrorFormat] = useState("");
	const [canSubmit, setCanSubmit] = useState(false);
	const history = useHistory();

	const sheetToDevices = (worksheet: XLSX.WorkSheet) => {
		const unfilteredArray = XLSX.utils.sheet_to_json(worksheet, {
			defval: "",
		});
		const filteredArray = unfilteredArray.map(
			(originalElement: any, index: number) => {
				const mappedElement = mapKeys(originalElement, (value, key) => {
					return key.toLowerCase();
				});

				if (!mappedElement.name || mappedElement.name.length >= 30)
					throw new Error(`Sai định dạng "Name" ở dòng ${index + 2}`);

				if (
					!mappedElement.category ||
					mappedElement.category.length >= 30
				)
					throw new Error(
						`Sai định dạng "Category" ở dòng ${index + 2}`
					);
				if (
					mappedElement.model
						? mappedElement.model.length > 30
						: false
				)
					throw new Error(
						`Sai định dạng "Model" ở dòng ${index + 2}`
					);
				const element = {
					name: mappedElement.name,
					category: mappedElement.category,
					model: mappedElement.model ? mappedElement.model : "",
				};
				return element;
			}
		);
		return filteredArray;
	};

	const inputFileHandle = (e: any) => {
		if (e.target.files) {
			const file = e.target.files[0];
			if (ExcelMimeType.includes(file.type)) {
				setErrorFile(false);
				setErrorFormat("");
				const reader = new FileReader();
				reader.onload = (event) => {
					const workbook = XLSX.read(event.target?.result, {
						type: "buffer",
					});
					const worksheet = workbook.Sheets[workbook.SheetNames[0]];
					try {
						const deviceArray: Device[] = sheetToDevices(worksheet);
						setDevices(deviceArray);
						setCanSubmit(true);
					} catch (error) {
						setErrorFormat(error.message);
						setCanSubmit(false);
					}
				};
				reader.readAsArrayBuffer(file);
			} else {
				setErrorFile(true);
				setCanSubmit(false);
			}
		}
	};

	const formSubmit = async (e: any) => {
		e.preventDefault();
		await createDevices({
			variables: { devices },
		});
		history.push("/app/devices");
	};
	return (
		<>
			<Form onSubmit={formSubmit}>
				{errorFile ? (
					<h1>File upload không đúng định dạng excel</h1>
				) : null}
				{errorFormat}
				<Form.File id="formcheck-api-regular">
					<Form.File.Label>Excel Upload</Form.File.Label>
					<Form.File.Input onChange={inputFileHandle} />
				</Form.File>
				<Table striped bordered hover>
					<thead>
						<tr>
							<td>#</td>
							<td>Name</td>
							<td>Category</td>
							<td>Model</td>
						</tr>
					</thead>
					<tbody>
						{devices.map((device, index) => {
							return (
								<tr key={device.name + device.category}>
									<td>{index + 1}</td>
									<td>{device.name}</td>
									<td>{device.category}</td>
									<td>{device?.model}</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
				<Row>
					<Col>
						<Button
							disabled={!canSubmit}
							variant="primary"
							type="submit"
						>
							Submit
						</Button>
					</Col>
					<Col>
						<Button
							onClick={() => {
								history.push("/app/devices");
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

export default DeviceExcelCreate;
