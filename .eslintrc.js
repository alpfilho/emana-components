module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		ecmaVersion: 2019,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: ['jsx-a11y', 'react-hooks'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:jsx-a11y/recommended',
		'plugin:react/recommended',
		'prettier/@typescript-eslint'
	],
	rules: {
		'react/prop-types': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'@typescript-eslint/no-explicit-any': 'off'
	},
	settings: {
		react: {
			version: 'detect'
		},
		/* jsx-a11y */
		linkComponents: [{ name: 'Link', linkAttribute: 'to' }]
	}
};
