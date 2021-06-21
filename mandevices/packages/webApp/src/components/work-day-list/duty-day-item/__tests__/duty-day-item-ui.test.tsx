import { fireEvent, screen } from "utils/test";
import render from "../helper";
import DutyDayItem from "../DutyDayCard";
import dayjs from "dayjs";
import { updateState } from "utils";
import { getByText } from "@testing-library/dom";
import { UserContext } from "App";
import { DutyDayListDocument, DutyDayListQueryResult } from "generated/graphql";

const testDay = dayjs(new Date(2021, 0, 1));

describe("duty day item ui", () => {
	it("should not render duty register form at inital time", () => {
		render(
			<DutyDayItem
				targetDay={testDay}
				currentDate={new Date(2020, 0, 1)}
			/>
		);

		expect(
			screen.queryByTestId("duty-register-form")
		).not.toBeInTheDocument();
	});
	it("should render duty register form when click register button", async () => {
		render(
			<DutyDayItem
				targetDay={testDay}
				currentDate={new Date(2020, 0, 1)}
			/>
		);

		fireEvent.click(screen.getByRole("button", { name: /đăng kí/i }));

		await updateState();

		expect(screen.getByRole("button", { name: /đăng kí/i })).toBeDisabled();

		screen.getByTestId("duty-register-form");
	});
	it("should exit duty register form when click cancel button", async () => {
		render(
			<DutyDayItem
				targetDay={testDay}
				currentDate={new Date(2020, 0, 1)}
			/>
		);

		fireEvent.click(screen.getByRole("button", { name: /đăng kí/i }));

		await updateState();

		expect(screen.getByRole("button", { name: /đăng kí/i })).toBeDisabled();

		fireEvent.click(screen.getByRole("button", { name: /hủy/i }));

		expect(
			screen.queryByTestId("duty-register-form")
		).not.toBeInTheDocument();
	});

	it("should render register button only in the future", () => {
		render(
			<DutyDayItem
				targetDay={testDay}
				currentDate={new Date(2020, 0, 1)}
			/>
		);

		screen.getByRole("button", { name: /^đăng kí$/i });
		expect(
			screen.queryByRole("button", { name: /^hủy đăng kí$/i })
		).not.toBeInTheDocument();
	});

	it("should not render register button in the past", () => {
		render(
			<DutyDayItem
				targetDay={testDay}
				currentDate={new Date(2021, 0, 1)}
			/>
		);

		expect(
			screen.queryByRole("button", { name: /^đăng kí$/i })
		).not.toBeInTheDocument();

		expect(
			screen.queryByRole("button", { name: /^hủy đăng kí$/i })
		).not.toBeInTheDocument();
	});
	it("should not render register button at present", () => {
		render(
			<DutyDayItem targetDay={testDay} currentDate={testDay.toDate()} />
		);

		expect(
			screen.queryByRole("button", { name: /^đăng kí$/i })
		).not.toBeInTheDocument();

		expect(
			screen.queryByRole("button", { name: /^hủy đăng kí$/i })
		).not.toBeInTheDocument();
	});

	it("should show register duty ui with default time intervals of morning and afternoon", async () => {
		render(
			<DutyDayItem
				targetDay={testDay}
				currentDate={new Date(2020, 0, 1)}
			/>
		);

		fireEvent.click(screen.getByRole("button", { name: /đăng kí/i }));

		await updateState();

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
		getByText(afternoonTimer, /18:30/i);
	});

	it("should show unregister button for user registerd", async () => {
		render<DutyDayListQueryResult["data"]>(
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			<UserContext.Provider value={{ googleId: "g2" } as any}>
				<DutyDayItem
					targetDay={testDay}
					currentDate={new Date(2020, 0, 1)}
				/>
			</UserContext.Provider>,
			[
				{
					request: {
						query: DutyDayListDocument,
						variables: { date: testDay },
					},
					result: {
						data: {
							dutiesByDate: [
								{
									_id: "1",
									date: testDay,
									subscriberId: "g2",
									subscriberName: "fakename",
									subscriberAvatar: "",
									times: [],
									__typename: "Duty",
								},
							],
						},
					},
				},
			]
		);

		await updateState();
		screen.getByRole("button", { name: /^hủy đăng kí$/i });
		expect(
			screen.queryByRole("button", { name: /^đăng kí$/i })
		).not.toBeInTheDocument();
	});

	it("should hide unregister button for user unregisterd", async () => {
		render<DutyDayListQueryResult["data"]>(
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			<UserContext.Provider value={{ googleId: "g1" } as any}>
				<DutyDayItem
					targetDay={testDay}
					currentDate={new Date(2020, 0, 1)}
				/>
			</UserContext.Provider>,
			[
				{
					request: {
						query: DutyDayListDocument,
						variables: { date: testDay },
					},
					result: {
						data: {
							dutiesByDate: [
								{
									_id: "1",
									date: testDay,
									subscriberId: "g2",
									subscriberName: "fakename",
									subscriberAvatar: "",
									times: [],
									__typename: "Duty",
								},
							],
						},
					},
				},
			]
		);

		await updateState();

		expect(
			screen.queryByRole("button", { name: /hủy đăng kí/i })
		).not.toBeInTheDocument();
	});

	it.todo("show empty when no register");
});

export {};
