import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { fireEvent, render, screen } from "@testing-library/react";
import {
	DeleteTaskDocument,
	EditTaskDocument,
	TaskListDocument,
	TaskListItemFragment,
} from "generated/graphql";
import { GraphQLError } from "graphql";
import TaskList from "..";
import { updateState } from "../../../utils";
import { render as r } from "utils/test";

const initialTaskTitle = Math.random().toString();
const initialTasksMock: MockedResponse<{ tasks: TaskListItemFragment[] }> = {
	request: {
		query: TaskListDocument,
	},
	result: {
		data: {
			tasks: [
				{
					_id: "initialId",
					title: initialTaskTitle,
					createdAt: new Date().toISOString(),
					__typename: "Task",
				},
			],
		},
	},
};

describe("List of tasks", () => {
	const expectDisplayMode = async () => {
		await updateState();
		screen.getByText("Sửa");
		expect(
			screen.queryByDisplayValue(initialTaskTitle)
		).not.toBeInTheDocument();
		expect(
			screen.queryByText("Bạn có chắc muốn xóa nhiệm vụ này?")
		).not.toBeInTheDocument();
	};

	const expectEditMode = async () => {
		await updateState();
		expect(screen.queryByText("Sửa")).not.toBeInTheDocument();
		screen.getByDisplayValue(initialTaskTitle);
		screen.getByText("Hủy");
		screen.getByText("Cập nhật");
	};
	const expectDeleteMode = async () => {
		await updateState();
		expect(screen.queryByText("Xóa")).not.toBeInTheDocument();
		expect(screen.queryByText("Sửa")).not.toBeInTheDocument();
		screen.getByText("Bạn có chắc muốn xóa nhiệm vụ này?");
		screen.getByText("Hủy");
		screen.getByText("Đồng ý");
	};

	it("should render loading state", () => {
		render(
			<MockedProvider addTypename={false}>
				<TaskList />
			</MockedProvider>
		);
		screen.getByText(/Loading .../i);
	});

	it("should render list of task with title", async () => {
		r(<TaskList />, [initialTasksMock]);
		await updateState();

		screen.getByText(/Danh sách công việc cần làm/i);

		screen.getByText(initialTaskTitle);
	});

	it("should show graphql error when fail", async () => {
		const errorMessage = "Something went wrong!";

		r(<TaskList />, [
			{
				request: {
					query: TaskListDocument,
				},
				result: {
					errors: [new GraphQLError(errorMessage)],
				},
			},
		]);

		await updateState();

		screen.getByText(errorMessage);
	});
	it("should show network error when fail", async () => {
		const errorMessage = "Something went wrong!";
		r(
			<TaskList />,

			[
				{
					request: {
						query: TaskListDocument,
					},
					error: new Error(errorMessage),
				},
			]
		);

		await updateState();

		screen.getByText(errorMessage);
	});

	it("should show editable task ui", async () => {
		render(
			<MockedProvider mocks={[initialTasksMock]}>
				<TaskList />
			</MockedProvider>
		);

		await expectDisplayMode();

		fireEvent.click(screen.getByText("Sửa"));

		await expectEditMode();

		const cancelBtn = screen.getByText("Hủy");

		fireEvent.click(cancelBtn);

		await expectDisplayMode();
	});

	it("should edit task successfully", async () => {
		const newTitle = "fakdsfds";
		const editTaskMock: MockedResponse = {
			request: {
				query: EditTaskDocument,
				variables: { title: newTitle, _id: "initialId" },
			},
			result: {
				data: {
					editTask: {
						_id: "initialId",
						title: newTitle,
						__typename: "Task",
					},
				},
			},
		};
		r(<TaskList />, [initialTasksMock, editTaskMock]);

		await updateState();

		fireEvent.click(screen.getByText("Sửa"));

		await updateState();

		fireEvent.change(screen.getByDisplayValue(initialTaskTitle), {
			target: { value: newTitle },
		});

		await updateState();

		fireEvent.click(screen.getByText("Cập nhật"));

		await expectDisplayMode();

		screen.getByText(newTitle);
	});

	it("should show delete task ui", async () => {
		render(
			<MockedProvider mocks={[initialTasksMock]}>
				<TaskList />
			</MockedProvider>
		);

		await expectDisplayMode();

		fireEvent.click(screen.getByText("Xóa"));

		await expectDeleteMode();

		const cancelBtn = screen.getByText("Hủy");

		fireEvent.click(cancelBtn);

		await expectDisplayMode();
	});

	it("should delete task successfully", async () => {
		const deleteTaskMock: MockedResponse = {
			request: {
				query: DeleteTaskDocument,
				variables: { id: "initialId" },
			},
			result: {
				data: {
					deleteTask: {
						_id: "initialId",
					},
				},
			},
		};
		render(
			<MockedProvider
				mocks={[initialTasksMock, deleteTaskMock]}
				addTypename={true}
			>
				<TaskList />
			</MockedProvider>
		);

		await updateState();

		fireEvent.click(screen.getByText("Xóa"));

		await updateState();

		fireEvent.click(screen.getByText("Đồng ý"));

		await updateState();

		screen.getByText("Không có việc nào cần làm");

		expect(screen.queryByText(initialTaskTitle)).not.toBeInTheDocument();
	});
});
