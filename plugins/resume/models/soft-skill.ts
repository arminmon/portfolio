import type { IContentDocument } from '@nuxt/content/types/content'

export interface SoftSkillContent extends IContentDocument {
	order?: number
	title: string
}

export class SoftSkill {
	model: SoftSkillContent

	constructor(model: SoftSkillContent) {
		this.model = model
	}

	get slug(): string {
		return this.model.slug
	}

	get title(): string {
		return this.model.title
	}
}
