import colors from 'vuetify/lib/util/colors'
import icons from '~/vuetify.icons'

export default {
	rtl: false,
	icons,
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
