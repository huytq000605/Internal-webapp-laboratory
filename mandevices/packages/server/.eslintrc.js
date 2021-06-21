// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier/@typescript-eslint',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		quotes: ['error', 'single'],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars':
			process.env.NODE_ENV === 'development' ? 'warn' : 'error',
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'@typescript-eslint/explicit-module-boundary-types': 'off',
	},
};
