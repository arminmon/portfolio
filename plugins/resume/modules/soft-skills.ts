import type { contentFunc } from '@nuxt/content/types/content'
import { SoftSkill, SoftSkillContent } from '../models'

const softSkillsModule = (contentProvider: contentFunc) =>
	contentProvider('resume', 'soft-skills')
		.sortBy('order', 'asc')
		.fetch()
		.then((res) => res.map((i: SoftSkillContent) => new SoftSkill(i)))

export { softSkillsModule }
