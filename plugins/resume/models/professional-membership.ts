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

export class ProfessionalMembership {
	model: ProfessionalMembershipContent

	constructor(model: ProfessionalMembershipContent) {
		this.model = model
	}

	get slug(): string {
		return this.model.slug
	}

	get color(): string | null {
		return this.model.color || null
	}

	get joinDate(): Date {
		return new Date(this.model.join_date)
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
}
