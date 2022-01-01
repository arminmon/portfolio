import type { contentFunc } from '@nuxt/content/types/content'
import { Employment, EmploymentContent } from '../models'

const employmentsModule = (contentProvider: contentFunc) =>
	contentProvider('resume', 'employments')
		.fetch()
		.then((res) => res.map((i: EmploymentContent) => new Employment(i)))

export { employmentsModule }
