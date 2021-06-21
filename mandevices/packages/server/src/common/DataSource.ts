/* eslint-disable @typescript-eslint/no-unused-vars */
interface Write<T> {
	create(item: T): Promise<T>;
	update(item: T): Promise<T>;
	delete(item: T): Promise<T>;
}

interface Read<T> {
	find(): Promise<T[]>;
	findOne(id: string | number): Promise<T>;
}

export type DataSource<T> = Write<T> & Read<T>;
