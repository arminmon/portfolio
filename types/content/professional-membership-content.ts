import type { IContentDocument } from '@nuxt/content/types/content'

export interface ProfessionalMembershipContent extends IContentDocument {
	avatar?: string
	color?: string
	initials?: string
	institution: string
	join_date: string
	subtitle: string
	title: string
}
