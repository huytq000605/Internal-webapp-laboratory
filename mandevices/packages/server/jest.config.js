/* eslint-disable @typescript-eslint/no-var-requires */
const tsPreset = require('ts-jest/jest-preset');
const jestMongo = require('@shelf/jest-mongodb/jest-preset');

module.exports = {
	...tsPreset,
	...jestMongo,
	setupFilesAfterEnv: ['<rootDir>/src/config/tests.ts'],
	moduleDirectories: ['node_modules', '.'],
	testPathIgnorePatterns: ['build/'],
	moduleNameMapper: {
		'@graphql-types/(.*)': '<rootDir>/src/types/$1',
		'@root/(.*)': '<rootDir>/src/$1',
	},
};
