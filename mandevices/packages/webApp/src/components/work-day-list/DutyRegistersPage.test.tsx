import dayjs from "dayjs";
import { render, screen } from "utils/test";
import DutyRegistersPage from "./DutyRegistersPage";

describe("Duty registers", () => {
	// JavaScript counts months from 0 to 11
	const currentDate = new Date(2020, 12 - 1, 1);

	const allDaysOfCurrentWeek = [...Array(7)].map((_, i) =>
		dayjs(currentDate).weekday(i).format("dddd, DD-MM-YYYY")
	);

	const allDaysOfNextWeek = [...Array(7)].map((_, i) =>
		dayjs(currentDate)
			.weekday(i + 7)
			.format("dddd, DD-MM-YYYY")
	);

	beforeEach(() => {
		render(<DutyRegistersPage currentDate={currentDate} />);
	});

	it("should render current week", () => {
		const currentWeekTitle = screen.getByRole("tab", { selected: true });

		expect(currentWeekTitle.innerHTML).toEqual(
			expect.stringMatching(/tuần hiện tại/i)
		);

		allDaysOfNextWeek.forEach((day) =>
			expect(screen.queryByText(day)).not.toBeInTheDocument()
		);

		allDaysOfCurrentWeek.forEach((day) =>
			screen.getByText(new RegExp(day))
		);
	});

	it("should only render next week title", () => {
		const nextWeekTitle = screen.getByRole("tab", { selected: false });

		expect(nextWeekTitle.innerHTML).toEqual(
			expect.stringMatching(/tuần sau/i)
		);
	});
});

export {};
