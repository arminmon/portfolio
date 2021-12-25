import type { IContentDocument } from '@nuxt/content/types/content'

export interface EducationContent extends IContentDocument {
	avatar?: string
	color?: string
	details: {
		items: string[]
		title: string
	}
	graduation_date?: string
	initials?: string
	institution: string
	location: string
	start_date: string
	subtitle?: string
	title: string
}
