import React, { useContext, useState, useEffect } from "react";
import { Alert, Button } from "react-bootstrap";
import dayjs from "dayjs";
import Duration from "dayjs/plugin/duration";
import "./styles/DutyRegisterForm.css";
import TimeRange from "shared/time-range";
import { ApolloError } from "@apollo/client";

import setTimeInDate from "shared/times";
import { ResponsiveContext } from "App";

dayjs.extend(Duration);

export interface TimeInterval {
	start: {
		hour: number;
		minute: number;
	};
	end: {
		hour: number;
		minute: number;
	};
}

interface Props {
	targetDate?: Date;
	onCancel?: () => void;
	morningTimer?: TimeInterval;
	afternoonTimer?: TimeInterval;
	// time in minutes
	timeInterval?: number;
	error?: ApolloError;
	onSubmit?: (value: Array<{ start: Date; end: Date }>) => void;
}

const DutyRegisterForm: React.FC<Props> = ({
	targetDate,
	onCancel,
	onSubmit,
	error,
	timeInterval,
	morningTimer = {
		start: {
			hour: 0,
			minute: 0,
		},
		end: {
			hour: 13,
			minute: 0,
		},
	},
	afternoonTimer = {
		start: {
			hour: 13,
			minute: 0,
		},
		// 00:00 ~ 24:00
		end: {
			hour: 0,
			minute: 0,
		},
	},
}) => {
	const isValidTimeInterval = (start: number, end: number) => end > start;

	const defaultStartMorningTime = setTimeInDate(
		targetDate,
		morningTimer.start.hour,
		morningTimer.start.minute
	);

	const defaultEndMorningTime = setTimeInDate(
		targetDate,
		morningTimer.end.hour,
		morningTimer.end.minute
	);

	const defaultStartAfternoonTime = setTimeInDate(
		targetDate,
		afternoonTimer.start.hour,
		afternoonTimer.start.minute
	);
	const defaultEndAfternoonTime = setTimeInDate(
		targetDate,
		afternoonTimer.end.hour,
		afternoonTimer.end.minute
	);

	const [enteredMorningTime, setEnteredMorningTime] = useState<number[]>([
		defaultStartMorningTime.unix(),
		defaultEndMorningTime.unix(),
	]);

	const [enteredAfternoonTime, setEnteredAfternoonTime] = useState<number[]>([
		defaultStartAfternoonTime.unix(),
		defaultStartAfternoonTime.unix(),
	]);

	const [errorMessage, setErrorMessage] = useState("");

	const [isValidMoriningTime, setIsValidMoriningTime] = useState(
		isValidTimeInterval(enteredMorningTime[0], enteredMorningTime[1])
	);

	const [isValidAfternoonTime, setIsValidAfternoonTime] = useState(
		isValidTimeInterval(enteredAfternoonTime[0], enteredAfternoonTime[1])
	);

	const isErrorMorningTime =
		!isValidMoriningTime &&
		enteredMorningTime[0] !== defaultStartMorningTime.unix();

	const isErrorAfternoonTime =
		!isValidAfternoonTime &&
		enteredAfternoonTime[0] !== defaultStartAfternoonTime.unix();

	const handleOnCancel = () => {
		if (onCancel) onCancel();
	};

	useEffect(() => {
		if (error) {
			setErrorMessage(error.message);
		}
	}, [error]);

	const handleOnSubmit = () => {
		const isValidMorningInterval = isValidTimeInterval(
			enteredMorningTime[0],
			enteredMorningTime[1]
		);

		const isValidAfternoonInterval = isValidTimeInterval(
			enteredAfternoonTime[0],
			enteredAfternoonTime[1]
		);

		if (!isValidMorningInterval && !isValidAfternoonInterval) {
			setErrorMessage("Thời gian trực tối thiểu là 1 giờ");
			return;
		}

		if (onSubmit) {
			// x1000 to convert from seconds to miliseconds
			onSubmit([
				{
					start: new Date(enteredMorningTime[0] * 1000),
					end: new Date(enteredMorningTime[1] * 1000),
				},
				{
					start: new Date(enteredAfternoonTime[0] * 1000),
					end: new Date(enteredAfternoonTime[1] * 1000),
				},
			]);
		}
	};

	const handleOnTimeMorningChange = (value: number[]) => {
		setEnteredMorningTime(value);
		setIsValidMoriningTime(isValidTimeInterval(value[0], value[1]));
	};

	const handleOnTimeAfternoonChange = (value: number[]) => {
		setIsValidAfternoonTime(isValidTimeInterval(value[0], value[1]));
		setEnteredAfternoonTime(value);
	};

	return (
		<section data-testid="duty-register-form">
			{errorMessage && (
				<Alert
					variant="danger"
					className="mt-2"
					dismissible
					onClose={() => setErrorMessage("")}
				>
					<Alert.Heading>Oh man! Lỗi rồi :(( </Alert.Heading>
					{errorMessage}
				</Alert>
			)}
			<TimeRange
				title="Sáng"
				min={defaultStartMorningTime}
				max={defaultEndMorningTime}
				data-testid="morning"
				interval={timeInterval}
				onChange={handleOnTimeMorningChange}
				value={enteredMorningTime}
				isError={isErrorMorningTime}
				isValid={isValidMoriningTime}
			/>
			<div className="mt-4 mb-4">
				<TimeRange
					title="Chiều"
					min={defaultStartAfternoonTime}
					max={defaultEndAfternoonTime}
					data-testid="afternoon"
					isMobileOrTablet={
						useContext(ResponsiveContext)?.isMobileOrTablet
					}
					interval={timeInterval}
					onChange={handleOnTimeAfternoonChange}
					value={enteredAfternoonTime}
					isError={isErrorAfternoonTime}
					isValid={isValidAfternoonTime}
				/>
			</div>
			<Button size="sm" variant="warning" onClick={handleOnCancel}>
				Hủy
			</Button>
			<Button size="sm" className="ml-1" onClick={handleOnSubmit}>
				Ok
			</Button>
		</section>
	);
};

export default DutyRegisterForm;
