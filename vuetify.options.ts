import type { GlobalVuetifyPreset as VuetifyOptions } from 'vuetify/types/services/presets'
import colors from 'vuetify/lib/util/colors'
import icons from '~/vuetify.icons'

const options: VuetifyOptions = {
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
}

export default options
