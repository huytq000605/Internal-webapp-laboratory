import { Db } from 'mongodb';
import { TaskMongoDataSource } from './tasks/dataSources/TaskMongoDataSource';
import { Duties } from './duties/dataSources/DutyMongoDataSource';

interface GraphqlContext {
	db: Db;
	authError?: Error;
	user?: User;
	google: GoogleData;
	dataSources: {
		tasks: TaskMongoDataSource;
		duties: Duties;
	};
}

interface User {
	id: string;
	name: string;
	avatar?: string;
	email: string;
	roles: string[];
}

interface GoogleData {
	id: string;
	name: string;
	avatar: string;
	email: string;
}
