import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import Tasks from "components/tasks";
import { updateState } from "utils";
import {
	CreateTaskDocument,
	TaskListDocument,
	TaskListItemFragment,
} from "generated/graphql";

describe("Add new task", () => {
	it("should render form inputs when click button", async () => {
		const taskTitle = "new foo task";
		const tasksMock: MockedResponse = {
			request: {
				query: TaskListDocument,
			},
			result: {
				data: {
					tasks: [
						{
							_id: "5fe5b79a1365eb50f054f407",
							title: "taskTitle",
							createdAt: null,
							__typename: "Task",
						},
					],
				},
			},
		};

		const createTaskMock: MockedResponse<{
			createTask: TaskListItemFragment;
		}> = {
			request: {
				query: CreateTaskDocument,
				variables: { input: { title: taskTitle } },
			},
			result: {
				data: {
					createTask: {
						_id: "5fe5b79a1365eb50f054f406",
						title: taskTitle,
						createdAt: "2020-12-25T09:57:46.316Z",
						__typename: "Task",
					},
				},
			},
		};

		render(
			<MockedProvider
				mocks={[tasksMock, createTaskMock]}
				addTypename={true}
			>
				<Tasks />
			</MockedProvider>
		);

		await updateState();

		const taskTitleInput = screen.getByPlaceholderText(
			/Tên công việc/i
		) as HTMLInputElement;

		const submitButton = screen.getByText("Thêm") as HTMLButtonElement;

		fireEvent.click(submitButton);
		await updateState();

		screen.getByText("Tên công việc không được trống");

		fireEvent.change(taskTitleInput, { target: { value: taskTitle } });
		expect(taskTitleInput.value).toBe(taskTitle);

		fireEvent.click(submitButton);
		expect(
			screen.queryByText("Tên công việc không được trống")
		).toBeFalsy();
		expect(submitButton.innerHTML).toBe("Đang thêm");

		await updateState();

		screen.getByText(taskTitle);

		expect(taskTitleInput.value).toBeFalsy();
	});
});
