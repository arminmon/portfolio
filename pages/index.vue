<template>
	<v-sheet color="transparent" class="pb-12">
		<v-container :style="{ maxWidth: '960px' }">
			<v-row>
				<v-col cols="12" class="pt-0">
					<v-card tag="header" elevation="18" class="rounded-t-0">
						<v-card-title
							class="
								text-h4 text-center
								justify-center
								pa-6 pa-md-8 pa-lg-10 pa-xl-12
							"
						>
							{{ $vuetify.breakpoint.smAndDown ? $t('Hi') : $t('Hello') }}
							👋,&nbsp;
							<span class="text-nowrap">{{ $t("I'm Armin") }}.</span>
							<v-avatar size="64" class="ms-2 ms-md-4">
								<v-img
									src="https://secure.gravatar.com/avatar/14b8d65cfe37e16e124d3d37106e3cab?s=300"
								/>
							</v-avatar>
						</v-card-title>
					</v-card>
				</v-col>
				<v-col cols="12">
					<resume-social-links :items="socialLinks" />
				</v-col>
				<v-col cols="12">
					<v-card id="employment_history" tag="section" elevation="18">
						<resume-employment-timeline :items="employments" />
					</v-card>
				</v-col>
				<v-col cols="12">
					<v-card id="education_history" tag="section" elevation="18">
						<resume-education-timeline :items="educations" />
					</v-card>
				</v-col>
				<v-col cols="12">
					<v-card id="professional_memberships" tag="section" elevation="18">
						<resume-professional-membership-timeline :items="memberships" />
					</v-card>
				</v-col>
				<v-col cols="12">
					<v-card id="technical_skillsets" tag="section" elevation="18">
						<resume-skillsets-grid :items="skillsets" />
					</v-card>
				</v-col>
				<v-col cols="12">
					<v-card id="soft_skills" tag="section" elevation="18">
						<resume-soft-skills-grid :items="softSkills" />
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-sheet>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import type { Context } from '@nuxt/types'
import type {
	SocialLink,
	EmploymentContent,
	EducationContent,
	ProfessionalMembershipContent,
	SkillsetContent,
	SoftSkillContent,
} from '~/types/content'

@Component
export default class PageIndex extends Vue {
	socialLinks!: SocialLink[]
	employments!: EmploymentContent[]
	educations!: EducationContent[]
	memberships!: ProfessionalMembershipContent[]
	skillsets!: SkillsetContent[]
	softSkills!: SoftSkillContent[]

	async asyncData({ $content, error }: Context) {
		try {
			const socialLinks = await $content('socials').fetch()
			const employments = await $content('resume', 'employments').fetch()
			const educations = await $content('resume', 'educations').fetch()
			const memberships = await $content('resume', 'memberships').fetch()
			const skillsets = await $content('resume', 'skillsets')
				.sortBy('order', 'asc')
				.fetch()
			const softSkills = await $content('resume', 'soft-skills')
				.sortBy('order', 'asc')
				.fetch()

			return {
				socialLinks,
				employments,
				educations,
				memberships,
				skillsets,
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
