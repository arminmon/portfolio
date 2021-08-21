import type { IconName } from '~/vuetify.icons'

declare interface NavLink {
	title: string
	icon: IconName
	to: string | number
}
