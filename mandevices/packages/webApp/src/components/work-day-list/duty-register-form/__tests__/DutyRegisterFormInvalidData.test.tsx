import DutyRegisterForm from "../DutyRegisterForm";
import { fireEvent, render, screen } from "utils/test";
import { updateState } from "utils";

jest.mock("rc-slider/lib/Range", () => {
	const mockStartTimeMorning = new Date(2020, 1, 1, 8, 30).getTime() / 1000;
	const mockEndTimeMorning = new Date(2020, 1, 1, 8, 30).getTime() / 1000;

	const mockStartTimeAfternoon =
		new Date(2020, 1, 1, 13, 30).getTime() / 1000;
	const mockEndTimeAfternoon = new Date(2020, 1, 1, 13, 30).getTime() / 1000;
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

it("should show error when invalid data", async () => {
	const mockOnSubmit = jest.fn();

	render(<DutyRegisterForm onSubmit={mockOnSubmit} />);

	fireEvent.click(screen.getByTestId(/^morning$/i));
	fireEvent.click(screen.getByTestId(/^afternoon$/i));

	await updateState();

	fireEvent.click(screen.getByRole("button", { name: /^ok$/i }));

	await updateState();

	screen.getByText(/Thời gian trực tối thiểu là 1 giờ/i);
});
