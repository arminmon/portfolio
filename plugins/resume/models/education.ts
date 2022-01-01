import type { IContentDocument } from '@nuxt/content/types/content'

interface EducationContentDetails {
	items: string[]
	title: string
}

export interface EducationContent extends IContentDocument {
	avatar?: string
	color?: string
	details: EducationContentDetails[]
	graduation_date?: string
	initials?: string
	institution: string
	location: string
	start_date: string
	subtitle?: string
	title: string
}

export class Education {
	model: EducationContent

	constructor(model: EducationContent) {
		this.model = model
	}

	get slug(): string {
		return this.model.slug
	}

	get color(): string | null {
		return this.model.color || null
	}

	get isOngoing(): boolean {
		return this.model.graduation_date === 'present'
	}

	get graduationDate(): Date | 'present' {
		return this.isOngoing ? 'present' : new Date(this.model.graduation_date!)
	}

	get startDate(): Date {
		return new Date(this.model.start_date)
	}

	get title(): string {
		return this.model.title
	}

	get subtitle(): string | null {
		return this.model.subtitle || null
	}

	get institution(): string {
		return this.model.institution
	}

	get hasAvatar(): boolean {
		return !!this.model.avatar
	}

	get avatarUrl(): string {
		return `/images/avatars/${this.model.avatar}`
	}

	get hasDetails(): boolean {
		return this.model.details && this.model.details.length > 0
	}

	get details(): EducationContentDetails[] {
		return this.model.details
	}
}
