import { TaskListItemFragment, useEditTaskMutation } from "generated/graphql";
import React, { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";

const EditTask: React.FC<{
	task: TaskListItemFragment;
	onCancel?: () => void;
	onOk?: () => void;
}> = ({ task, onCancel, onOk }) => {
	const [title, setTitle] = useState(task.title);

	const handleOnCancel = () => {
		if (onCancel) onCancel();
	};
	const handleOnOk = () => {
		if (onOk) onOk();
	};

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
	};

	const [editTask] = useEditTaskMutation({
		onCompleted() {
			handleOnOk();
		},
	});

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		editTask({ variables: { title, _id: task._id } });
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group>
				<Form.Control value={title} onChange={handleOnChange} />
			</Form.Group>

			<Row className="justify-content-end mr-0">
				<Button
					size="sm"
					variant="outline-warning"
					type="button"
					onClick={handleOnCancel}
				>
					Hủy
				</Button>
				<Button
					size="sm"
					variant="outline-success"
					type="submit"
					className="ml-1"
				>
					Cập nhật
				</Button>
			</Row>
		</Form>
	);
};

export default EditTask;
