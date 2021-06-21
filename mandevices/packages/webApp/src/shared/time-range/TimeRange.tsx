import { Range } from "rc-slider";
import React from "react";
import dayjs from "dayjs";
import Duration from "dayjs/plugin/duration";
import clsx from "clsx";
import "./TimeRange.scss";
import { groupBy } from "lodash";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

dayjs.extend(Duration);

interface Interval {
	// Time start
	start?: dayjs.Dayjs | Date;
	// Time end
	end?: dayjs.Dayjs | Date;
	icon?: React.ReactNode;
}

interface Props {
	title?: string;
	// Time start
	min?: dayjs.Dayjs | Date;
	// Time end
	max?: dayjs.Dayjs | Date;
	// Time interval in minutes
	interval?: number;
	intervals?: Interval[];
	isError?: boolean;
	isValid?: boolean;
	isMobileOrTablet?: boolean;
	onChange?: (value: number[]) => void;
	vertilcal?: boolean;
	value?: number[];
	// Only print start and end label
	onlyBounded?: boolean;
	[key: string]: unknown;
}

const getAboveTimelineUi: React.FC<{
	icon: React.ReactNode;
	start: dayjs.Dayjs;
	isMobileOrTablet?: boolean;
}> = ({ icon, start, isMobileOrTablet }) => {
	return (
		<section className="timeline">
			<div>{icon}</div>

			{isMobileOrTablet && (
				<OverlayTrigger
					overlay={
						<Tooltip id={`${Math.random()}`}>
							{start.format("HH:mm")}
						</Tooltip>
					}
				>
					<i className="bi bi-clock d-block timeline__start" />
				</OverlayTrigger>
			)}

			{!isMobileOrTablet && (
				<div className="timeline__start">{start.format("HH:mm")}</div>
			)}
		</section>
	);
};

getAboveTimelineUi.defaultProps = {
	isMobileOrTablet: false,
};
const getUnderTimelineUi: React.FC<{
	icon: React.ReactNode;
	end: dayjs.Dayjs;
	isMobileOrTablet?: boolean;
}> = ({ icon, end, isMobileOrTablet }) => {
	return (
		<section className="timeline">
			<div className="timeline__icon">{icon}</div>

			{isMobileOrTablet && (
				<OverlayTrigger
					overlay={
						<Tooltip id={`${Math.random()}`}>
							{end.format("HH:mm")}
						</Tooltip>
					}
				>
					<i className="bi bi-clock timeline__end" />
				</OverlayTrigger>
			)}

			{!isMobileOrTablet && (
				<div className="timeline__end">{end.format("HH:mm")}</div>
			)}
		</section>
	);
};

getUnderTimelineUi.defaultProps = {
	isMobileOrTablet: false,
};

/**
 *
 * @param start StartTime
 * @param end EndTime
 * @param timeInterval Interval time in minute
 */
const generateTimeSeries = (
	start?: dayjs.Dayjs,
	end?: dayjs.Dayjs,
	timeInterval?: number,
	icon?: React.ReactNode,
	onlyBounded?: boolean,
	isMobileOrTablet?: boolean
) => {
	let result = {};
	let count = 0;

	if (!start || !end) return result;

	if (onlyBounded || !timeInterval) {
		result = {
			[start.unix()]: getAboveTimelineUi({ icon, start }),
			[end.unix()]: getUnderTimelineUi({ icon, end }),
		};
		return result;
	}

	for (
		let i = start;
		i <= end;
		i = i.add(dayjs.duration(timeInterval, "m"))
	) {
		count += 1;
		if (!(isMobileOrTablet && count % 2)) {
			result = { ...result, [i.unix()]: i.format("HH:mm") };
		}
	}

	return result;
};

const TimeRange: React.FC<Props> = ({
	min: start = dayjs().startOf("date"),
	max: end = dayjs().endOf("date"),
	isError,
	isValid,
	interval = 60,
	onChange,
	vertilcal,
	title,
	isMobileOrTablet,
	onlyBounded = false,
	intervals,
	value = [],
	...other
}) => {
	if (start && end && dayjs(start).isSame(dayjs(end))) {
		throw new Error(
			`Start time and End time must be different, current is the same is ${dayjs(
				start
			).toDate()}`
		);
	}

	let timeLabels = generateTimeSeries(
		dayjs(start),
		dayjs(end),
		interval,
		null,
		onlyBounded,
		isMobileOrTablet
	);

	if (intervals) {
		const endTagGroup = groupBy(intervals, "end");
		const startTagGroup = groupBy(intervals, "start");
		const startEntries = Object.keys(startTagGroup).map((startTime) => [
			dayjs(startTime).unix(),
			getAboveTimelineUi({
				start: dayjs(startTime),
				icon: startTagGroup[startTime].map((item) => (
					<span key={item.start?.toString()}>{item.icon}</span>
				)),
				isMobileOrTablet,
			}),
		]);
		const endEntries = Object.keys(endTagGroup).map((endTime) => [
			dayjs(endTime).unix(),
			getUnderTimelineUi({
				end: dayjs(endTime),
				icon: endTagGroup[endTime].map((item) => (
					<span key={item.end?.toString()}>{item.icon}</span>
				)),
				isMobileOrTablet,
			}),
		]);

		timeLabels = {
			...Object.fromEntries(startEntries),
			...Object.fromEntries(endEntries),
		};
	}

	const handleOnChange = (timeRange: number[]) => {
		if (onChange) {
			onChange(timeRange);
		}
	};
	return (
		<section
			key="1"
			className="w-100"
			role="timer"
			aria-labelledby={`session-of-a-day__${title}`}
		>
			{title && (
				<span id={`session-of-a-day__${title}`} data-testid="title">
					{!isError && (
						<i
							className={clsx(
								"bi bi-bookmark-check-fill",
								"time__tag",
								isValid && "time__tag-active"
							)}
						/>
					)}
					{isError && (
						<i
							className={clsx(
								"bi bi-bookmark-x-fill",
								"time__tag-error"
							)}
						/>
					)}
					{title}
				</span>
			)}
			<Range
				vertical={vertilcal}
				tabIndex={[0, 2]}
				onChange={handleOnChange}
				value={value}
				min={dayjs(start).unix()}
				max={dayjs(end).unix()}
				step={interval * 60}
				marks={timeLabels}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...other}
			/>
		</section>
	);
};

export default TimeRange;
