import type { IContentDocument } from '@nuxt/content/types/content'
import type { IconName } from '~/vuetify.icons'

export interface BuildingBlockModel {
	title: string
	icon: IconName
}

export interface SocialLinkModel extends IContentDocument {
	title: string
	slug: string
	icon: string
	color: string
	href: string
}

export interface EducationDetailModel {
	title: string
	items: string[]
}

export interface EducationModel extends IContentDocument {
	title: string
	subtitle?: string
	institution: string
	initials?: string
	avatar?: string
	color?: string
	location: string
	start_date: string
	graduation_date?: string
	details: EducationDetailModel[]
}

export interface EmploymentDetailModel {
	title: string
	items: string[]
}

export interface EmploymentModel extends IContentDocument {
	title: string
	type: string
	employer: string
	avatar?: string
	color?: string
	location: string
	start_date: string
	end_date?: string
	details: EmploymentDetailModel[]
}

export interface MembershipModel extends IContentDocument {
	title: string
	subtitle: string
	initials?: string
	institution: string
	avatar?: string
	color?: string
	join_date: string
}

export interface SkillModel {
	title: string
	subtitle?: string
	link?: string
	color: string
	light?: boolean
	dark?: boolean
	icon?: IconName
}

export interface SkillsetModel extends IContentDocument {
	order?: number
	title: string
	items: SkillModel[]
}

export interface SoftSkillModel extends IContentDocument {
	order?: number
}
