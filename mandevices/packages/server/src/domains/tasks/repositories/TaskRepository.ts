import Container, { Service } from 'typedi';

export interface Task {
	_id: string;
	title: string;
	ownerId: string;
	createdAt: Date;
}

export interface TaskPersistentDataSource {
	getTaskById: (id: string) => Promise<Task>;
	getTasksByUser: (userId: string) => Promise<Task[]>;
	updateTask: (task: Omit<Partial<Task>, 'createdAt'>) => Promise<Task>;
	createTask: (task: Omit<Task, '_id' | 'createdAt'>) => Promise<Task>;
	deleteTask: (task: Pick<Task, '_id'>) => Promise<Task>;
}

export const TASK_PERISTENT_DATA_SOURCE = 'TASK_PERISTENT_DATA_SOURCE';

@Service()
export class TaskRepository {
	private readonly taskPersistentDataSource: TaskPersistentDataSource = Container.get(
		TASK_PERISTENT_DATA_SOURCE
	);

	async updateTask(task: Partial<Task>) {
		return this.taskPersistentDataSource.updateTask(task);
	}

	async createTask(
		task: Parameters<TaskPersistentDataSource['createTask']>[0]
	) {
		return this.taskPersistentDataSource.createTask(task);
	}

	async deleteTask(
		task: Parameters<TaskPersistentDataSource['deleteTask']>[0]
	) {
		return this.taskPersistentDataSource.deleteTask(task);
	}
	async getTaskById(
		task: Parameters<TaskPersistentDataSource['getTaskById']>[0]
	) {
		return this.taskPersistentDataSource.getTaskById(task);
	}
	async getTasksByUser(
		userId: Parameters<TaskPersistentDataSource['getTasksByUser']>[0]
	) {
		return this.taskPersistentDataSource.getTasksByUser(userId);
	}
}
