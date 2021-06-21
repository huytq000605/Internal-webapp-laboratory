import {
	TaskListDocument,
	TaskListQuery,
	useDeleteTaskMutation,
} from "generated/graphql";
import React from "react";
import { Alert, Button, Row } from "react-bootstrap";

interface Props {
	taskId?: string;
	onCancel?: () => void;
}

const DeleteTask: React.FC<Props> = ({ onCancel, taskId }) => {
	const handleOnCancel = () => {
		if (onCancel) onCancel();
	};

	const [deleteTask] = useDeleteTaskMutation({
		update(cache, { data }) {
			if (!data?.deleteTask) return;
			const result = cache.readQuery<TaskListQuery>({
				query: TaskListDocument,
			});

			if (!result) return;

			cache.evict({
				fieldName: "tasks",
				broadcast: false,
			});

			cache.writeQuery<TaskListQuery>({
				query: TaskListDocument,
				data: {
					tasks: result.tasks.filter(
						(task) => task._id !== data.deleteTask._id
					),
				},
			});
		},
	});

	const handleOnOk = () => {
		if (taskId) deleteTask({ variables: { id: taskId } });
	};

	return (
		<Row className="align-items-center">
			<Alert variant="danger" className="m-0 mr-1">
				Bạn có chắc muốn xóa nhiệm vụ này?
			</Alert>
			<Button variant="outline" size="sm" onClick={handleOnCancel}>
				Hủy
			</Button>
			<Button variant="outline-danger" size="sm" onClick={handleOnOk}>
				Đồng ý
			</Button>
		</Row>
	);
};

export default DeleteTask;
