import { NuxtConfig } from '@nuxt/types'

const configs: NuxtConfig = {
	target: 'static',
	ssr: false,

	head: {
		titleTemplate: 'ARMIN MONIRZADEH | %s',
		title: 'arminmon',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: "Armin Monirzadeh's portfolio.",
			},
		],
		link: [
			{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
			{ rel: 'icon', type: 'image/png', href: '/favicon.png' },
		],
	},

	css: ['@fontsource/ubuntu-mono', '~/assets/styles/app'],

	plugins: [
		'~/plugins/i18n',
		'~/plugins/chroma',
		'~/plugins/vue-masonry.client',
	],

	components: true,

	pageTransition: { name: 'fade-transition' },
	layoutTransition: { name: 'fade-transition' },

	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/eslint-module',
		'@nuxtjs/vuetify',
	],

	modules: ['@nuxt/content', 'nuxt-i18n'],

	content: {},

	i18n: {
		strategy: 'no_prefix',
		detectBrowserLanguage: false,
		defaultLocale: 'en',
		locales: [
			{
				code: 'en',
				iso: 'en-AU',
				dir: 'ltr',
				file: 'en.ts',
				isCatchallLocale: true,
			},
			{
				code: 'fa',
				iso: 'fa-IR',
				dir: 'rtl',
				file: 'fa.ts',
			},
		],
		vueI18n: {
			silentFallbackWarn: true,
			silentTranslationWarn: true,
			dateTimeFormats: {
				en: {
					'long YMD': {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
					},
					'long YM': {
						year: 'numeric',
						month: 'long',
					},
				},
				fa: {
					'long YMD': {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
					},
					'long YM': {
						year: 'numeric',
						month: 'long',
					},
				},
			},
		},
		lazy: true,
		langDir: 'locales/',
		vueI18nLoader: true,
		baseUrl: 'https://arminmon.dev/',
	},

	vuetify: {
		treeShake: true,
		defaultAssets: false,
		customVariables: ['~/assets/styles/_vuetify'],
		optionsPath: './vuetify.options.ts',
	},

	build: {
		extractCSS: true,
	},

	telemetry: false,
}

export default configs
