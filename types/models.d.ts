import type { IContentDocument } from '@nuxt/content/types/content'
import type { IconName } from '~/vuetify.icons'

export interface BuildingBlock {
	title: string
	icon: IconName
}

export interface SocialLink extends IContentDocument {
	title: string
	slug: string
	icon: string
	color: string
	href: string
}

export interface Education extends IContentDocument {
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

export interface Employment extends IContentDocument {
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

export interface Membership extends IContentDocument {
	title: string
	subtitle: string
	initials?: string
	institution: string
	avatar?: string
	color?: string
	join_date: string
}

export interface Skill {
	title: string
	subtitle?: string
	link?: string
	color: string
	light?: boolean
	dark?: boolean
	icon?: IconName
}

export interface Skillset extends IContentDocument {
	order?: number
	title: string
	items: Skill[]
}

export interface SoftSkill extends IContentDocument {
	order?: number
}
