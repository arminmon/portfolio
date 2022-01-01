import type { Plugin } from '@nuxt/types'
import {
	educationsModule,
	employmentsModule,
	professionalMembershipsModule,
	skillsModule,
	softSkillsModule,
} from './modules'

declare module '@nuxt/types' {
	interface Context {
		$resume: {
			educations: ReturnType<typeof educationsModule>
			employments: ReturnType<typeof employmentsModule>
			professionalMemberships: ReturnType<typeof professionalMembershipsModule>
			skills: ReturnType<typeof skillsModule>
			softSkills: ReturnType<typeof softSkillsModule>
		}
	}
}

const ResumePlugin: Plugin = (context) => {
	context.$resume = {
		educations: educationsModule(context.$content),
		employments: employmentsModule(context.$content),
		professionalMemberships: professionalMembershipsModule(context.$content),
		skills: skillsModule(context.$content),
		softSkills: softSkillsModule(context.$content),
	}
}

export default ResumePlugin
