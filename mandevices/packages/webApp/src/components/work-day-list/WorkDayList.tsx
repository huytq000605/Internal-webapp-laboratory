import React from "react";
import "dayjs/locale/vi";
import dayjs from "dayjs";
import WeekDay from "dayjs/plugin/weekday";
import { Alert } from "react-bootstrap";
import "./WorkDayList.css";

import isSameOrAfter from "dayjs/plugin/isSameOrAfter";

import DutyDayItem from "./duty-day-item/DutyDayCard";

dayjs.extend(isSameOrAfter);
dayjs.locale("vi");
dayjs.extend(WeekDay);

interface Props {
	/**
	 * value 0 corresponding to the Monday of current week
	 * value 7 corresponding to the Monday of next week
	 */
	startWeek?: number;
	currentDate?: Date;
}

const WorkDayList: React.FC<Props> = ({
	currentDate = new Date(),
	startWeek = 0,
}) => {
	return (
		<section className="pt-3">
			<Alert variant="info">
				<ul>
					<li>
						<p>Có thể đăng kí trước lịch trực cho tuần sau</p>
					</li>
				</ul>
			</Alert>
			<Alert variant="warning">
				<ul>
					<li>
						<p>
							Không thể thay đổi đăng kí của những ngày đã qua và
							ngày hiện tại.
						</p>
					</li>
					<li>
						<p>
							Nếu không thực hiện như đăng kí thì sẽ tính lỗi dù
							bất kỳ lý do gì. Mức độ lỗi sẽ căn cứ theo lý do.
						</p>
					</li>
				</ul>
			</Alert>

			{[...Array(7)].map((_, i) => {
				const day = dayjs(currentDate).weekday(i + startWeek);
				return <DutyDayItem key={day.unix()} targetDay={day} />;
			})}
		</section>
	);
};

export default WorkDayList;
