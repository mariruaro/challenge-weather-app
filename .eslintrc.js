module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'plugin:react-native/all',
		'prettier',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-native', 'jsx-a11y', 'import', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': [
			'warn',
			{ extensions: ['.jsx', '.js'] },
		],
		'import/prefer-default-export': 'off',
		'no-param-reassign': 'off',
		'no-console': ['error', { allow: ['tron'] }],
		'react/display-name': 'off',
		'no-underscore-dangle': 'off',
		'default-param-last': 'off',
	},
};
