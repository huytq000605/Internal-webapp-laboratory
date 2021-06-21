/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
import DutyRegisterForm from "../DutyRegisterForm";
import { render, screen } from "utils/test";
import { getByText } from "@testing-library/dom";

describe("Duty register form ui", () => {
	beforeEach(() => {
		jest.spyOn(console, "error");

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		console.error.mockImplementation(() => {});
	});

	afterEach(() => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		console.error.mockRestore();
	});
	it("should show register duty ui with correct time intervals of morning and afternoon", async () => {
		render(
			<DutyRegisterForm
				timeInterval={30}
				morningTimer={{
					start: { hour: 8, minute: 30 },
					end: { hour: 11, minute: 30 },
				}}
				afternoonTimer={{
					start: { hour: 13, minute: 30 },
					end: { hour: 19, minute: 1 },
				}}
			/>
		);

		screen.getByText(/^sáng$/i);
		screen.getByText(/^chiều$/i);
		screen.getByRole("button", { name: /^hủy$/i });
		screen.getByRole("button", { name: /^ok$/i });

		const morningTimer = screen.getByRole("timer", { name: /sáng/i });
		// default start time
		getByText(morningTimer, /08:30/i);
		// default end time
		getByText(morningTimer, /11:30/i);

		const afternoonTimer = screen.getByRole("timer", { name: /chiều/i });
		// default start time
		getByText(afternoonTimer, /13:30/i);
		/* default end time
		 *	00:00 ~ 24:00
		 */
		getByText(afternoonTimer, /19:00/i);
	});

	it.todo("should handle correctly when end afternoon is 24:00");
});
