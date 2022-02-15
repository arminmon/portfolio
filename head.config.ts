import { NuxtOptionsHead } from '@nuxt/types/config/head'
import colors from 'vuetify/lib/util/colors'
import {
	BASE_URL,
	SITE_DESCRIPTION,
	SITE_IMAGE,
	SITE_NAME,
	SITE_TITLE,
} from './constants/site'

const openGraphMeta = [
	{
		property: 'og:site_name',
		content: SITE_NAME,
	},
	{
		hid: 'og:type',
		property: 'og:type',
		content: 'website',
	},
	{
		hid: 'og:url',
		property: 'og:url',
		content: BASE_URL,
	},
	{
		hid: 'og:title',
		property: 'og:title',
		content: SITE_TITLE,
	},
	{
		hid: 'og:description',
		property: 'og:description',
		content: SITE_DESCRIPTION,
	},
	{
		hid: 'og:image',
		property: 'og:image',
		content: SITE_IMAGE.url,
	},
	{
		property: 'og:image:width',
		content: SITE_IMAGE.width,
	},
	{
		property: 'og:image:height',
		content: SITE_IMAGE.height,
	},
]

const twitterMeta = [
	{
		name: 'twitter:site',
		content: '@arminmon',
	},
	{
		name: 'twitter:card',
		content: 'summary',
	},
	{
		hid: 'twitter:url',
		name: 'twitter:url',
		content: BASE_URL,
	},
	{
		hid: 'twitter:title',
		name: 'twitter:title',
		content: SITE_TITLE,
	},
	{
		hid: 'twitter:description',
		name: 'twitter:description',
		content: SITE_DESCRIPTION,
	},
	{
		hid: 'twitter:image',
		name: 'twitter:image',
		content: SITE_IMAGE.url,
	},
]

const head: NuxtOptionsHead = {
	titleTemplate: '%s | ARMIN MONIRZADEH',
	title: SITE_TITLE,
	meta: [
		{ charset: 'utf-8' },
		{
			name: 'viewport',
			content: 'width=device-width, initial-scale=1',
		},
		{
			hid: 'description',
			name: 'description',
			content: SITE_DESCRIPTION,
		},
		{
			name: 'theme-color',
			content: colors.indigo.darken1,
			media: '(prefers-color-scheme: dark)',
		},
		{
			name: 'theme-color',
			content: colors.indigo.lighten1,
			media: '(prefers-color-scheme: light)',
		},
		...openGraphMeta,
		...twitterMeta,
	],
	link: [
		{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
		{ rel: 'icon', type: 'image/png', href: '/favicon.png' },
	],
}

export default head
