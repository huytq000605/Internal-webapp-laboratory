import DeleteTask from "components/delete-task";
import { TaskListItemFragment, useTaskListQuery } from "generated/graphql";
import React, { useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import EditTask from "../edit-task";

const TaskItem: React.FC<{ task: TaskListItemFragment }> = ({ task }) => {
	return (
		<>
			<div style={{ fontStyle: "italic", fontSize: "0.8rem" }}>
				{task.createdAt
					? new Date(task.createdAt).toString()
					: "Chưa rõ thời điểm"}
			</div>
			<h4 style={{ color: "darkmagenta", fontWeight: "bold" }}>
				{task.title}
			</h4>
		</>
	);
};
const TaskItemWrapper: React.FC<{ task: TaskListItemFragment }> = ({
	task,
}) => {
	const [mode, setMode] = useState<"display" | "edit" | "delete">("display");

	const enterEditMode = () => {
		setMode("edit");
	};

	const enterDeleteMode = () => {
		setMode("delete");
	};

	const enterDisplayMode = () => {
		setMode("display");
	};

	return (
		<Card
			style={{
				margin: "8px",
			}}
		>
			<Card.Header className="text-right d-flex justify-content-end flex-wrap">
				{mode === "delete" && (
					<DeleteTask taskId={task._id} onCancel={enterDisplayMode} />
				)}
				{mode === "display" && (
					<>
						<Button
							variant="outline-danger"
							size="sm"
							onClick={enterDeleteMode}
						>
							Xóa
						</Button>
						<Button
							className="ml-1"
							variant="outline-secondary"
							size="sm"
							onClick={enterEditMode}
						>
							Sửa
						</Button>
					</>
				)}
			</Card.Header>
			<Card.Body>
				{["delete", "display"].includes(mode) && (
					<TaskItem task={task} />
				)}
				{mode === "edit" && (
					<EditTask
						task={task}
						onCancel={enterDisplayMode}
						onOk={enterDisplayMode}
					/>
				)}
			</Card.Body>
		</Card>
	);
};

const TaskList: React.FC = () => {
	const { loading, error, data } = useTaskListQuery();

	if (loading) return <div>Loading ...</div>;
	if (error) return <div style={{ color: "red" }}>{error.message}</div>;

	return (
		<>
			<h2 className="text-center">Danh sách công việc cần làm</h2>
			{data?.tasks.map((task) => (
				<TaskItemWrapper key={task._id} task={task} />
			))}
			{!data?.tasks.length && (
				<Alert variant="info" className="text-center">
					Không có việc nào cần làm
				</Alert>
			)}
		</>
	);
};

export default TaskList;
