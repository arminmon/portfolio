import type { contentFunc } from '@nuxt/content/types/content'
import {
	ProfessionalMembership,
	ProfessionalMembershipContent,
} from '../models'

const professionalMembershipsModule = (contentProvider: contentFunc) =>
	contentProvider('resume', 'professional-memberships')
		.fetch()
		.then((res) =>
			res.map(
				(i: ProfessionalMembershipContent) => new ProfessionalMembership(i)
			)
		)

export { professionalMembershipsModule }
