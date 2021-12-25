import type { IContentDocument } from '@nuxt/content/types/content'
import type { IconName } from '~/vuetify.icons'

export interface Skill {
	color: string
	dark?: boolean
	icon?: IconName
	light?: boolean
	link?: string
	subtitle?: string
	title: string
}

export interface SkillsetContent extends IContentDocument {
	items: Skill[]
	order?: number
	title: string
}
