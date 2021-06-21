import { screen } from "utils/test";
import render from "../helper";
import DutyDayItem from "../DutyDayCard";
import dayjs from "dayjs";
import { DutyDayListDocument, DutyDayListQueryResult } from "generated/graphql";
import { updateState } from "utils";
import { UserContext } from "App";

const testDay = dayjs(new Date(2021, 0, 1));

describe("duty register list", () => {
	it("should show user who register that day", async () => {
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
								{
									_id: "2",
									date: testDay,
									subscriberId: "g3",
									subscriberName: "random",
									subscriberAvatar: "",
									times: [],
									__typename: "Duty",
								},
								{
									_id: "3",
									date: new Date(1990, 1, 2),
									subscriberId: "g1",
									subscriberName: "phantom",
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

		screen.getByText(/fakename/i);
		screen.getByText(/random/i);

		expect(screen.queryByText(/phantom/i)).not.toBeInTheDocument();
	});
});

export {};
