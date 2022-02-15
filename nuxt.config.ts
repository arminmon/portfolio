import { NuxtConfig } from '@nuxt/types'
import head from './head.config'
import { BASE_URL } from './constants/site'

const configs: NuxtConfig = {
	target: 'static',
	ssr: false,

	head,

	css: [
		'@fontsource/ubuntu-mono',
		'@fontsource/pacifico',
		'~/assets/styles/app',
	],

	plugins: [
		'~/plugins/resume',
		'~/plugins/i18n',
		'~/plugins/colour',
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
		baseUrl: BASE_URL,
	},

	vuetify: {
		treeShake: true,
		defaultAssets: false,
		customVariables: ['~/assets/styles/_vuetify'],
		optionsPath: './vuetify.options.ts',
	},

	vue: {
		config: {
			devtools: true,
		},
	},

	build: {
		extractCSS: true,
	},

	telemetry: false,
}

export default configs
