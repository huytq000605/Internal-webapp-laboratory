import { fireEvent, screen } from "utils/test";
import render from "../helper";
import DutyDayItem from "../DutyDayCard";
import dayjs from "dayjs";
import { RegisterDutyDocument } from "generated/graphql";
import { updateState } from "utils";
import { GraphQLError } from "graphql";

const testDay = dayjs(new Date(2021, 0, 1));

const defaultTimesInput = [
	{
		start: testDay.hour(8).minute(30).second(0).millisecond(0).toDate(),
		end: testDay.hour(11).minute(30).second(0).millisecond(0).toDate(),
	},
	{
		start: testDay.hour(13).minute(30).second(0).millisecond(0).toDate(),
		end: testDay.hour(13).minute(30).second(0).millisecond(0).toDate(),
	},
];

describe("register duty", () => {
	it("should show graphql error when fail", async () => {
		const errorMessage = "Something went wrong!";

		render(
			<DutyDayItem
				targetDay={testDay}
				currentDate={new Date(2020, 0, 1)}
			/>,
			[
				{
					request: {
						query: RegisterDutyDocument,
						variables: {
							input: {
								times: defaultTimesInput,
							},
						},
					},
					result: {
						errors: [new GraphQLError(errorMessage)],
					},
				},
			]
		);

		await updateState();

		fireEvent.click(screen.getByRole("button", { name: /đăng kí/i }));

		await updateState();

		fireEvent.click(screen.getByRole("button", { name: /ok/i }));

		await updateState();

		screen.getByText(errorMessage);
	});
	it("should show network error when fail", async () => {
		const errorMessage = "Something went wrong!";

		render(
			<DutyDayItem
				targetDay={testDay}
				currentDate={new Date(2020, 0, 1)}
			/>,
			[
				{
					request: {
						query: RegisterDutyDocument,
						variables: {
							input: {
								times: defaultTimesInput,
							},
						},
					},
					error: new Error(errorMessage),
				},
			]
		);

		await updateState();

		fireEvent.click(screen.getByRole("button", { name: /đăng kí/i }));

		await updateState();

		fireEvent.click(screen.getByRole("button", { name: /ok/i }));

		await updateState();

		screen.getByText(errorMessage);
	});
});

export {};
