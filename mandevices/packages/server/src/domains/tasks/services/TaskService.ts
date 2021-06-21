import { GraphqlContext } from '@root/global';
import { Service } from 'typedi';
import { Task, TaskRepository } from '../repositories/TaskRepository';

@Service()
export class TaskService {
	constructor(private readonly taskRepository: TaskRepository) {}

	async editTask(task: Partial<Task>) {
		if (!task.title) throw new Error('Tiêu đề nhiệm vụ không được trống');

		return this.taskRepository.updateTask(task);
	}

	async createTask(task: { title: string }, user: GraphqlContext['user']) {
		if (!user) throw new Error('User undefined');

		return this.taskRepository.createTask({
			title: task.title,
			ownerId: user.id,
		});
	}
	async deleteTask(id: string, user: GraphqlContext['user']) {
		const existingTask = await this.taskRepository.getTaskById(id);

		if (user?.id !== existingTask.ownerId)
			throw new Error('Nhiệm vụ này không phải do bạn tạo');

		return this.taskRepository.deleteTask({ _id: id });
	}
	async getTasksByUser(user: GraphqlContext['user']) {
		if (!user?.id) throw new Error('Chưa đăng nhập');

		return this.taskRepository.getTasksByUser(user.id);
	}
}
