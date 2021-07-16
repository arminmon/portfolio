module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
	extends: [
		'@nuxtjs',
		'prettier',
		'plugin:prettier/recommended',
		'plugin:nuxt/recommended',
	],
	plugins: ['prettier'],
	rules: {
		'camelcase': ['off'],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: '*',
				next: 'return',
			},
		],
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'vue/v-slot-style': [
			'warn',
			{
				atComponent: 'shorthand',
				default: 'shorthand',
				named: 'shorthand',
			},
		],
		'vue/valid-v-slot': ['error', { allowModifiers: true }],
	},
}
