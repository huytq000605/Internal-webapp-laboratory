import DutyRegisterForm from "../DutyRegisterForm";
import { fireEvent, render, screen } from "utils/test";
import { updateState } from "utils";

jest.mock("rc-slider/lib/Range", () => {
	const mockStartTimeMorning = new Date(2020, 1, 1, 8, 30).getTime() / 1000;
	const mockEndTimeMorning = new Date(2020, 1, 1, 9, 30).getTime() / 1000;

	const mockStartTimeAfternoon =
		new Date(2020, 1, 1, 13, 30).getTime() / 1000;
	const mockEndTimeAfternoon = new Date(2020, 1, 1, 15, 30).getTime() / 1000;
	const mockValue = [mockStartTimeMorning, mockEndTimeMorning];
	const mockAfternoonValue = [mockStartTimeAfternoon, mockEndTimeAfternoon];

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	return (props) => {
		return (
			<div
				className="rc-slider"
				onClick={
					props["data-testid"] === "afternoon"
						? () => props.onChange(mockAfternoonValue)
						: () => props.onChange(mockValue)
				}
				{...props}
			>
				Fake RC Slider
			</div>
		);
	};
});

describe("Duty register form ui", () => {
	it("should pass valid data when press ok", async () => {
		const mockOnSubmit = jest.fn();

		render(
			<DutyRegisterForm
				onSubmit={mockOnSubmit}
				targetDate={new Date(2020, 1, 1)}
			/>
		);

		fireEvent.click(screen.getByTestId(/^morning$/i));
		fireEvent.click(screen.getByTestId(/^afternoon$/i));

		await updateState();

		fireEvent.click(screen.getByRole("button", { name: /^ok$/i }));

		await updateState();

		expect(mockOnSubmit).toHaveBeenCalledWith([
			{
				start: new Date(2020, 1, 1, 8, 30),
				end: new Date(2020, 1, 1, 9, 30),
			},
			{
				start: new Date(2020, 1, 1, 13, 30),
				end: new Date(2020, 1, 1, 15, 30),
			},
		]);
	});
});
