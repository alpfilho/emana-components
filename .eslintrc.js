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
		'plugin:jsx-a11y/recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'prettier/@typescript-eslint'
	],
	rules: {
		'no-console': 'error',
		'no-mixed-spaces-and-tabs': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'react/prop-types': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error'
	},
	settings: {
		react: {
			version: 'detect'
		},
		/* jsx-a11y */
		linkComponents: [{ name: 'Link', linkAttribute: 'to' }]
	}
};
