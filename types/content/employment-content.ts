import type { IContentDocument } from '@nuxt/content/types/content'

export interface EmploymentContent extends IContentDocument {
	avatar?: string
	color?: string
	details: {
		items: string[]
		title: string
	}
	employer: string
	end_date?: string
	location: string
	start_date: string
	title: string
	type: string
}
