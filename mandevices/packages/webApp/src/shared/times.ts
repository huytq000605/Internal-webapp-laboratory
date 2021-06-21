import dayjs from "dayjs";

const setTimeInDate = (
	date: Date | undefined | dayjs.Dayjs,
	hour: number,
	minute: number
): dayjs.Dayjs => {
	return dayjs(date).hour(hour).minute(minute).second(0).millisecond(0);
};

export default setTimeInDate;
