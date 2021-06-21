import { GraphqlContext } from '@root/global';
import { IMiddlewareFunction } from 'graphql-middleware/dist/types';
import Container from 'typedi';
import { UserService } from '../users/services/UserService';
import configs from './config/config.json';

interface Config {
	api: string;
	group: string;
	permissions: string[];
}

const isSubArray = <T>(subArray: Array<T>, array: Array<T>) => {
	if (!array) return true;
	for (const element of subArray) {
		if (!array.includes(element)) return false;
	}
	return true;
};

export const authorization: IMiddlewareFunction = async (
	resolve,
	root,
	args,
	context: GraphqlContext,
	info
) => {
	const user = context.user;
	if (user) {
		const api = info.path.key;
		const userService: UserService = Container.get(UserService);

		if (user.roles.includes('admin')) {
			const result = await resolve(root, args, context, info);
			return result;
		}
		const availablePermissions = await userService.getPermissions(user);

		const requiredPermissions = configs.filter((config: Config) => {
			return config.api === api;
		})[0]?.permissions;

		const isAuthorized = isSubArray(
			requiredPermissions,
			availablePermissions
		);

		if (!isAuthorized) {
			throw Error('Unauthorized');
		}
	}
	const result = await resolve(root, args, context, info);
	return result;
};
