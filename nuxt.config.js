export default {
	target: 'static',

	head: {
		titleTemplate: 'ARMIN MONIRZADEH | %s',
		title: 'arminmon',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
		],
		link: [
			{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
			{ rel: 'icon', type: 'image/png', href: '/favicon.png' },
		],
	},

	css: ['~/assets/styles/app'],

	plugins: ['~/plugins/vue-filters'],

	components: true,

	pageTransition: 'fade-transition',
	layoutTransition: 'fade-transition',

	buildModules: [
		'@nuxtjs/eslint-module',
		'@nuxtjs/stylelint-module',
		'@nuxtjs/vuetify',
	],

	modules: ['@nuxt/content'],

	axios: {},

	content: {},

	vuetify: {
		treeShake: true,
		defaultAssets: false,
		customVariables: ['~/assets/styles/vuetify/_override'],
		optionsPath: './vuetify.options.js',
	},

	build: {},

	telemetry: false,
}
