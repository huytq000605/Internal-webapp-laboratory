// eslint-disable-next-line @typescript-eslint/no-var-requires
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();
// TODO: fix no-console and unused-var rule pass in test environment
module.exports = {
    extends: [
        'airbnb-typescript',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
        'prettier/react',
    ],
    env: {
        node: true,
        browser: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        'no-unused-vars': 'off',
        'no-console': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
        '@typescript-eslint/no-unused-vars':
            process.env.NODE_ENV === 'development' ? 'warn' : 'error',
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        'react/prop-types': [2, { ignore: ['children'] }],
        // note you must disable the base rule as it can report incorrect errors
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': ['error'],
        'react/jsx-key': ['error'],
        'react/self-closing-comp': [
            'error',
            {
                component: true,
                html: true,
            },
        ],
        'react/void-dom-elements-no-children': 'error',
        'consistent-return': [0],
        'no-restricted-imports': [
            'error',
            {
                paths: [
                    {
                        name: 'styled-components',
                        message: 'Please import from styled-components/macro.',
                    },
                ],
                patterns: ['!styled-components/macro'],
            },
        ],
    },
    overrides: [
        {
            files: ['**/*.ts?(x)'],
            rules: {
                'react/prop-types': 'off',
            },
        },
    ],
};
