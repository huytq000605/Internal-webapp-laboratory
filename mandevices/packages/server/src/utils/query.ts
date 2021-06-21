import { Collection } from 'apollo-datasource-mongodb';
import { Cursor } from 'mongodb';

type SortOptions<T> = Record<keyof T, 1 | -1>;

type FilterOptions<T> = Record<keyof T, string | RegExp>;

interface Options<S, F = S> {
	sort?: Partial<SortOptions<S>>;
	filter?: Partial<FilterOptions<F>>;
	numPage?: number;
	perPage?: number;
}
export default async <T, S, F = S>(
	collection: Collection<T>,
	options: Options<S, F>
): Promise<T[]> => {
	const { sort = {}, filter = {}, numPage = 1, perPage = 0 } = options;
	const { ...filterBy } = filter;
	const { ...sortBy } = sort;
	for (const [key, value] of Object.entries(filterBy)) {
		if (typeof value === 'string') {
			((filterBy as unknown) as Record<
				string,
				Record<string, RegExp | string>
			>)[key] = {
				$regex: new RegExp(`${value}`),
				$options: 'i',
			};
		} else {
			((filterBy as unknown) as Record<
				string,
				Record<string, string | RegExp>
			>)[key] = {
				$regex: value,
				$options: 'i',
			};
		}
	}
	const result: Cursor<T> = collection
		.find({
			...(((filterBy as unknown) as Record<
				string,
				Record<string, string | RegExp>
			>) as any),
		})
		.limit(perPage)
		.skip((numPage - 1) * perPage)
		.sort({
			...sortBy,
		});
	return result.toArray();
};
