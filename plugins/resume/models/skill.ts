import type { IContentDocument } from '@nuxt/content/types/content'
import type { IconName } from '~/vuetify.icons'

export interface SkillsetContentItem {
	color: string
	icon?: IconName
	is_preferred?: boolean
	keywords: string[]
	link?: string
	notes?: string[]
	subtitle?: string
	title: string
}

export interface SkillsetContent extends IContentDocument {
	items: SkillsetContentItem[]
	order?: number
}

export type SkillGroup =
	| 'backend-dev'
	| 'deployment'
	| 'dev-tools'
	| 'frontend-dev'
	| 'graphic-design'
	| 'operating-systems'
	| 'principles'
	| 'project-tools'

export class Skill {
	model: SkillsetContentItem
	group: string
	order: number

	constructor(model: SkillsetContentItem, group: string, order: number) {
		this.model = model
		this.group = group
		this.order = order
	}

	get slug(): string {
		return `${this.group}-${this.title}`
	}

	get title(): string {
		return this.model.title
	}

	get subtitle(): string | null {
		return this.model.subtitle || null
	}

	get notes(): string[] | null {
		return this.model.notes || null
	}

	get link(): string | null {
		return this.model.link || null
	}

	get isPreferred(): boolean {
		return this.model.is_preferred || false
	}

	get icon(): string | null {
		return this.model.icon || null
	}

	get color(): string {
		return this.model.color
	}

	get keywords(): string[] | null {
		return this.model.keywords || null
	}
}
