import type { contentFunc } from '@nuxt/content/types/content'
import { Education, EducationContent } from '../models'

const educationsModule = (contentProvider: contentFunc) =>
	contentProvider('resume', 'educations')
		.fetch()
		.then((res) => res.map((i: EducationContent) => new Education(i)))

export { educationsModule }
