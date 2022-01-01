import type { IContentDocument } from '@nuxt/content/types/content'

interface EmploymentContentDetails {
	items: string[]
	title: string
}

export interface EmploymentContent extends IContentDocument {
	avatar?: string
	color?: string
	details: EmploymentContentDetails[]
	employer: string
	end_date?: string
	location: string
	start_date: string
	title: string
	type: string
}

export class Employment {
	model: EmploymentContent

	constructor(model: EmploymentContent) {
		this.model = model
	}

	get slug(): string {
		return this.model.slug
	}

	get color(): string | null {
		return this.model.color || null
	}

	get isOngoing(): boolean {
		return this.model.end_date === 'present'
	}

	get endDate(): Date | 'present' {
		return this.isOngoing ? 'present' : new Date(this.model.end_date!)
	}

	get startDate(): Date {
		return new Date(this.model.start_date)
	}

	get title(): string {
		return this.model.title
	}

	get employer(): string {
		return this.model.employer
	}

	get type(): string {
		return this.model.type
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

	get details(): EmploymentContentDetails[] {
		return this.model.details
	}
}
