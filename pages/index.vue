<template>
	<v-sheet class="pb-12">
		<v-container :style="{ maxWidth: '1000px' }">
			<v-row>
				<v-col cols="12" class="pt-0">
					<v-card
						elevation="16"
						class="rounded-t-0"
						:style="{ overflow: 'hidden' }"
					>
						<v-img
							v-show="$vuetify.breakpoint.mdAndUp"
							:src="require('~/assets/images/opera-house.svg')"
							aspect-ratio="2.235"
							width="200"
							:style="{
								position: 'absolute',
								bottom: '-5px',
								left: !$vuetify.rtl ? 'unset' : '20px',
								right: $vuetify.rtl ? 'unset' : '20px',
								opacity: 0.05,
							}"
						/>
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
					<v-row justify="center" :dense="$vuetify.breakpoint.smAndDown">
						<v-col v-for="link in socials" :key="link.slug" cols="auto">
							<v-hover #default="{ hover }">
								<v-chip
									:color="link.color"
									dark
									large
									outlined
									:href="link.href"
									target="_blank"
									rel="noopener noreferrer"
									:class="{
										'px-6': true,
										'transition-swing': true,
										'elevation-8': hover,
										'elevation-4': !hover,
									}"
								>
									<v-icon :size="$vuetify.breakpoint.smAndDown ? 18 : 24" left>
										{{ link.icon }}
									</v-icon>
									<span>{{ link.title }}</span>
								</v-chip>
							</v-hover>
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="12">
					<v-card id="employment_history" tag="section" elevation="16">
						<resume-employment-timeline :items="employments" />
					</v-card>
				</v-col>
				<v-col cols="12">
					<v-card id="education_history" tag="section" elevation="16">
						<resume-education-timeline :items="educations" />
					</v-card>
				</v-col>
				<v-col cols="12">
					<v-card id="membership_history" tag="section" elevation="16">
						<resume-membership-timeline :items="memberships" />
					</v-card>
				</v-col>
				<v-col cols="12">
					<v-card id="technical_skillsets" tag="section" elevation="16">
						<resume-skillsets-grid :items="skillsets" />
					</v-card>
				</v-col>
				<v-col cols="12">
					<v-card id="soft_skills" tag="section" elevation="16">
						<resume-soft-skills-list :items="softSkills" />
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-sheet>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import type { Context } from '@nuxt/types'

@Component
export default class PageIndex extends Vue {
	async asyncData({ $content, error }: Context) {
		try {
			const socials = await $content('socials').fetch()
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
				socials,
				employments,
				educations,
				memberships,
				skillsets,
				softSkills,
			}
		} catch (err) {
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
