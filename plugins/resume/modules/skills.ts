import type { contentFunc } from '@nuxt/content/types/content'
import { Skill, SkillsetContent } from '../models/skill'

const skillsModule = (contentProvider: contentFunc) =>
	contentProvider('resume', 'skillsets')
		.sortBy('order', 'asc')
		.fetch()
		.then((res) => {
			const skills: Skill[] = []
			res.forEach((skillset: SkillsetContent) => {
				skillset.items.forEach((skill, index) => {
					skills.push(new Skill(skill, skillset.slug, index))
				})
			})

			return skills
		})

export { skillsModule }
