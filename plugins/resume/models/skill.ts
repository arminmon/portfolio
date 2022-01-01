import type { IContentDocument } from '@nuxt/content/types/content'
import type { IconName } from '~/vuetify.icons'

export interface SkillsetContentItem {
	color: string
	dark?: boolean
	icon?: IconName
	is_preferred?: boolean
	keywords: string[]
	light?: boolean
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

	get dark(): boolean {
		return this.model.dark || false
	}

	get light(): boolean {
		return this.model.light || false
	}

	get keywords(): string[] | null {
		return this.model.keywords || null
	}
}
