import React, { useState } from "react";
import TaskList from "components/task-list";
import {
	Task,
	TaskListDocument,
	useCreateTaskMutation,
} from "generated/graphql";
import { Button, Form } from "react-bootstrap";

const Tasks: React.FC = () => {
	const [taskTitle, setTaskTitle] = useState<string>("");
	const [taskTitleError, setTaskTitleError] = useState<string | undefined>();

	const [createTask, { loading: submitLoading }] = useCreateTaskMutation({
		update(cache, { data }) {
			if (!data?.createTask) return;
			const existingTasks = cache.readQuery({
				query: TaskListDocument,
			});

			cache.writeQuery({
				query: TaskListDocument,
				data: {
					tasks: [
						...(existingTasks as { tasks: Task[] }).tasks,
						data.createTask,
					],
				},
			});
		},
		onCompleted() {
			setTaskTitle("");
		},
	});

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!taskTitle) setTaskTitleError("Tên công việc không được trống");
		else
			createTask({
				variables: { input: { title: taskTitle } },
			});
	};

	const handleTaskTitleChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setTaskTitleError(undefined);
		setTaskTitle(event.target.value);
	};

	return (
		<>
			<Form style={{ margin: "16px" }} onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Control
						id="task_title"
						placeholder="Tên công việc"
						type="text"
						value={taskTitle}
						onChange={handleTaskTitleChange}
					/>
					{taskTitleError && (
						<div style={{ color: "red" }}>{taskTitleError}</div>
					)}
				</Form.Group>
				<Button
					variant="primary"
					type="submit"
					size="sm"
					disabled={submitLoading}
				>
					{submitLoading ? "Đang thêm" : "Thêm"}
				</Button>
			</Form>

			<TaskList />
		</>
	);
};

export default Tasks;
