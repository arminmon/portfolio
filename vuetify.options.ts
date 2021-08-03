import type { GlobalVuetifyPreset as VuetifyOptions } from 'vuetify/types/services/presets'
import type { Context } from '@nuxt/types'
import colors from 'vuetify/lib/util/colors'
import icons from '~/vuetify.icons'

const options = ({ app }: Context): VuetifyOptions => ({
	lang: {
		t: (key, ...params) => <string>app.i18n.t(key, params),
	},
	rtl: false,
	icons: {
		iconfont: 'mdiSvg',
		values: icons,
	},
	theme: {
		dark: false,
		options: { customProperties: true },
		themes: {
			light: {
				primary: colors.indigo.lighten1,
				secondary: colors.deepOrange.lighten3,
				info: colors.lightBlue.accent2,
				warning: colors.amber.accent2,
				error: colors.deepOrange.accent4,
				success: colors.green.accent2,
			},
			dark: {
				primary: colors.indigo.darken1,
				secondary: colors.deepOrange.darken1,
				info: colors.lightBlue.accent2,
				warning: colors.amber.accent2,
				error: colors.deepOrange.accent4,
				success: colors.green.accent2,
			},
		},
	},
})

export default options
