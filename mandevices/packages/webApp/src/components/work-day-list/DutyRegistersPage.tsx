import React, { useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";
import dayjs from "dayjs";
import { SelectCallback } from "react-bootstrap/esm/helpers";
import { useHistory, useParams } from "react-router-dom";
import { useSystemCheckQuery } from "generated/graphql";
import WorkDayList from "./WorkDayList";

interface Props {
	currentDate?: Date;
	onFail?: () => void;
}

const DutyRegistersPage: React.FC<Props> = ({
	currentDate = new Date(),
	onFail,
}) => {
	const history = useHistory();

	// Assign default param for testing when url browswer not avaiable
	const { startWeek = "0" } = useParams<{ startWeek: string }>();

	const isCurrentWeek = +startWeek === 0;

	const handleOnNextWeekClick = () => {
		history.push("/app/7");
	};

	const handleOnCurrentWeekClick = () => {
		history.push("/app/0");
	};

	const handleOnWeekChange: SelectCallback = (eventKey) => {
		if (eventKey === "currentWeek") handleOnCurrentWeekClick();
		if (eventKey === "nextWeek") handleOnNextWeekClick();
	};
	const status = useSystemCheckQuery({
		fetchPolicy: "cache-and-network",
	}).data;

	useEffect(() => {
		if (status?.system.hasOwnerAccount === false && onFail) onFail();
	}, [status?.system.hasOwnerAccount]);

	return (
		<>
			<h3 className="text-center p-3">Lịch trực Lab</h3>

			<h6 className="text-center">{`${dayjs(currentDate)
				.weekday(+startWeek)
				.format("DD-MM-YYYY")} --- ${dayjs(currentDate)
				.weekday(+startWeek + 6)
				.format("DD-MM-YYYY")}`}</h6>

			<Tabs
				defaultActiveKey={isCurrentWeek ? "currentWeek" : "nextWeek"}
				className="justify-content-center"
				onSelect={handleOnWeekChange}
			>
				<Tab eventKey="currentWeek" title="Tuần hiện tại">
					{isCurrentWeek && (
						<WorkDayList
							startWeek={+startWeek}
							currentDate={currentDate}
						/>
					)}
				</Tab>

				<Tab eventKey="nextWeek" title="Tuần sau">
					{!isCurrentWeek && (
						<WorkDayList
							startWeek={+startWeek}
							currentDate={currentDate}
						/>
					)}
				</Tab>
			</Tabs>
		</>
	);
};

export default DutyRegistersPage;
