/* eslint-disable no-console */
import { render, screen } from "utils/test";
import TimeRange from "./TimeRange";

describe("TimeRange component", () => {
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

	it("should render default ui correctly", () => {
		render(<TimeRange />);

		screen.getByRole("timer", { name: "" });
		// Not render title
		expect(screen.queryByTestId("title")).not.toBeInTheDocument();
	});

	it("should throw error when start end end is same", () => {
		const date = new Date();
		try {
			render(<TimeRange min={date} max={date} />);
		} catch (error) {
			expect(error).toBeDefined();
		}
	});
	it("should only render start and end label when bounded mode", () => {
		render(<TimeRange onlyBounded />);
		const dom = screen.getByRole("timer").innerHTML;
		expect(dom.match(/\d{2}:\d{2}/g)?.length).toBe(2);
	});

	it.todo("test show icon of timeline");
	it.todo("when only set min then max default is the end of the day of min");
	it.todo("test intervals");
	it.todo("test intervals with duplicated start or end timeline");
});
