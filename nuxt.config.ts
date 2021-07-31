import { NuxtConfig } from '@nuxt/types'

const configs: NuxtConfig = {
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

	pageTransition: { name: 'fade-transition' },
	layoutTransition: { name: 'fade-transition' },

	buildModules: [
		'@nuxt/typescript-build',
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
		customVariables: ['~/assets/styles/_vuetify'],
		optionsPath: './vuetify.options.ts',
	},

	build: {},

	telemetry: false,
}

export default configs
