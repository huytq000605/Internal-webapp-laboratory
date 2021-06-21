module.exports = {
	extends: [
		'@commitlint/config-conventional',
		'@commitlint/config-lerna-scopes',
	],
	rules: {
		'type-enum': [
			2,
			'always',
			[
				'install',
				'feat',
				'fix',
				'docs',
				'style',
				'refactor',
				'test',
				'revert',
				'log',
				'project',
				'workspace',
				'ci',
				'cd',
				'build',
				'chore',
				'perf',
			],
		],
	},
};
