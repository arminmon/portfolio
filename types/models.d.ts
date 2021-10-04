import type { IContentDocument } from '@nuxt/content/types/content'
import type { IconName } from '~/vuetify.icons'

declare interface BuildingBlock {
	title: string
	icon: IconName
}

declare interface SocialLink {
	title: string
	slug: string
	icon: string
	color: string
	href: string
}

declare interface Education extends IContentDocument {
	title: string
	subtitle?: string
	institution: string
	initials?: string
	avatar?: string
	color?: string
	location: string
	start_date: string
	graduation_date?: string
	details: {
		title: string
		items: string[]
	}
}

declare interface Employment extends IContentDocument {
	title: string
	type: string
	employer: string
	avatar?: string
	color?: string
	location: string
	start_date: string
	end_date?: string
	details: {
		title: string
		items: string[]
	}
}

declare interface Membership extends IContentDocument {
	title: string
	subtitle: string
	initials?: string
	institution: string
	avatar?: string
	color?: string
	join_date: string
}

declare interface Skill {
	title: string
	subtitle?: string
	link?: string
	color: string
	light?: boolean
	dark?: boolean
	icon?: IconName
}

declare interface Skillset extends IContentDocument {
	order?: number
	title: string
	items: Skill[]
}

declare interface SoftSkill extends IContentDocument {
	order?: number
}
