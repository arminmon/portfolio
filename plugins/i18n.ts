import type { Context } from '@nuxt/types'
import type { LocaleObject } from 'nuxt-i18n'

export default function ({ app: { i18n } }: Context) {
	i18n.onBeforeLanguageSwitch = (
		_oldLocale,
		newLocale,
		_isInitialSetup,
		{ $vuetify }
	) => {
		const locales = i18n.locales as LocaleObject[]
		const locale = locales.find(
			(locale: LocaleObject) => locale.code === newLocale
		)
		$vuetify.rtl = locale!.dir === 'rtl'
	}
}
