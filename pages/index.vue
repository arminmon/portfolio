<template>
	<v-sheet color="transparent" class="pb-12">
		<v-container :style="{ maxWidth: '960px' }">
			<v-row>
				<v-col cols="12" class="pt-0">
					<landing-header-banner />
				</v-col>
				<v-col cols="12">
					<resume-social-links :items="socialLinks" />
				</v-col>
				<v-col cols="12">
					<v-card id="employment_history" tag="section" elevation="18">
						<resume-timeline-employment :items="employments" />
					</v-card>
				</v-col>
				<v-col cols="12">
					<v-card id="education_history" tag="section" elevation="18">
						<resume-timeline-education :items="educations" />
					</v-card>
				</v-col>
				<v-col cols="12">
					<v-card id="professional_memberships" tag="section" elevation="18">
						<resume-timeline-professional-membership :items="memberships" />
					</v-card>
				</v-col>
				<v-col cols="12">
					<v-card id="technical_skillsets" tag="section" elevation="18">
						<resume-grid-skillsets :items="skills" />
					</v-card>
				</v-col>
				<v-col cols="12">
					<v-card id="soft_skills" tag="section" elevation="18">
						<resume-grid-soft-skills :items="softSkills" />
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-sheet>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import type { Context } from '@nuxt/types'
import type { SocialLink } from '~/types/content'
import type {
	Education,
	Employment,
	ProfessionalMembership,
	Skill,
	SoftSkill,
} from '~/plugins/resume/models'

@Component
export default class PageIndex extends Vue {
	socialLinks!: SocialLink[]
	employments!: Employment[]
	educations!: Education[]
	memberships!: ProfessionalMembership[]
	skills!: Skill[]
	softSkills!: SoftSkill[]

	async asyncData({ $content, $resume, error }: Context) {
		try {
			const socialLinks = await $content('socials').fetch()
			const employments = await $resume.employments
			const educations = await $resume.educations
			const memberships = await $resume.professionalMemberships
			const skills = await $resume.skills
			const softSkills = await $resume.softSkills

			return {
				socialLinks,
				employments,
				educations,
				memberships,
				skills,
				softSkills,
			}
		} catch (err: any) {
			error(err)
		}
	}

	head() {
		return {
			title: 'RÉSUMÉ',
		}
	}
}
</script>
