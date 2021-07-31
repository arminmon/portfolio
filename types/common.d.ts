import type { IconName } from '~/vuetify.icons'

export interface NavLink {
	title: string
	icon: IconName
	to: string | number
}
