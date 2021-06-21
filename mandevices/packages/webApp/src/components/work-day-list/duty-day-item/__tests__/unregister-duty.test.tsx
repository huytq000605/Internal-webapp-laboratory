/* eslint-disable no-console */
import { fireEvent, screen } from "utils/test";
import render from "../helper";
import DutyDayItem from "../DutyDayCard";
import dayjs from "dayjs";
import {
	DutyDayListDocument,
	DutyDayListQueryResult,
	UnsubribeDutyDocument,
	UnsubribeDutyMutationResult,
} from "generated/graphql";
import { updateState } from "utils";
import { UserContext } from "App";

const testDay = dayjs(new Date(2021, 0, 1));

describe("unregister duty", () => {
	beforeEach(() => {
		jest.spyOn(console, "warn");

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		console.warn.mockImplementation(() => {});
	});

	afterEach(() => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		console.warn.mockRestore();
	});
	it("should unregister successfully", async () => {
		render<
			DutyDayListQueryResult["data"] | UnsubribeDutyMutationResult["data"]
		>(
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
				{
					request: {
						query: UnsubribeDutyDocument,
						variables: { date: testDay.toDate() },
					},
					result: {
						data: {
							unsubcribeDuty: {
								_id: "1",
								subscriberId: "g2",
								__typename: "Duty",
							},
						},
					},
				},
			]
		);

		await updateState();

		fireEvent.click(screen.getByRole("button", { name: /hủy đăng kí/i }));

		await updateState();

		expect(screen.queryByText(/fakename/i)).not.toBeInTheDocument();
	});
});

export {};
