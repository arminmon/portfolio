<template>
	<v-sheet class="pb-12">
		<v-speed-dial
			v-show="$vuetify.breakpoint.mdAndUp"
			id="speedDial"
			v-model="menuFab"
			top
			right
			direction="bottom"
			transition="slide-y-transition"
		>
			<template #activator>
				<v-btn v-model="menuFab" fab elevation="18" color="primary">
					<v-icon>$mdiDotsVertical</v-icon>
				</v-btn>
			</template>
			<v-tooltip v-for="(nav, index) in navs" :key="`nav-${index}`" left>
				<template #activator="{ on, attrs }">
					<v-btn
						v-bind="attrs"
						fab
						small
						elevation="9"
						@click="$vuetify.goTo(nav.to, { offset: 24 })"
						v-on="on"
					>
						<v-icon color="primary">{{ nav.icon }}</v-icon>
					</v-btn>
				</template>
				<span>{{ nav.title }}</span>
			</v-tooltip>
		</v-speed-dial>
		<v-container :style="{ maxWidth: '1100px' }">
			<v-row>
				<v-col cols="12" class="pt-0">
					<v-card elevation="16" class="rounded-t-0">
						<v-card-title>
							<h1 class="text-h4">
								{{ $vuetify.breakpoint.smAndDown ? 'Hi' : 'Hello' }} 👋,
								I'm&nbsp;Armin.
							</h1>
						</v-card-title>
						<v-container>
							<v-row justify="start">
								<v-col v-for="link in links" :key="link.title" cols="auto">
									<v-hover #default="{ hover }">
										<v-chip
											:color="link.color"
											dark
											large
											:href="link.href"
											target="_blank"
											:class="{
												'px-6': true,
												'transition-swing': true,
												'elevation-8': hover,
												'elevation-4': !hover,
											}"
										>
											<v-icon large left>{{ link.icon }}</v-icon>
											<span>{{ link.title }}</span>
										</v-chip>
									</v-hover>
								</v-col>
							</v-row>
						</v-container>
					</v-card>
				</v-col>
				<v-col cols="12">
					<v-card id="employment_history" elevation="16">
						<resume-employment-timeline :employments="employments" />
					</v-card>
				</v-col>
				<v-col cols="12">
					<v-card id="education_history" elevation="16">
						<resume-education-timeline :educations="educations" />
					</v-card>
				</v-col>
				<v-col cols="12">
					<v-card id="membership_history" elevation="16">
						<resume-membership-timeline :memberships="memberships" />
					</v-card>
				</v-col>
				<v-col cols="12">
					<v-card id="technical_skillsets" elevation="16">
						<resume-skillsets-grid :skillsets="skillsets" />
					</v-card>
				</v-col>
				<v-col cols="12">
					<v-card id="soft_skills" elevation="16">
						<resume-soft-skills-list :skills="softSkills" />
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-sheet>
</template>

<script>
export default {
	asyncData: async ({ $content, error }) => {
		try {
			const employments = await $content('resume', 'employments').fetch()
			const educations = await $content('resume', 'educations').fetch()
			const memberships = await $content('resume', 'memberships').fetch()
			const skillsets = await $content('resume', 'skillsets')
				.sortBy('order', 'asc')
				.fetch()
			const softSkills = await $content('resume', 'soft-skills')
				.sortBy('order', 'asc')
				.fetch()

			return { employments, educations, memberships, skillsets, softSkills }
		} catch (err) {
			error(err)
		}
	},
	data: () => ({
		menuFab: false,
		navs: [
			{ title: 'Scroll Up', icon: '$mdiChevronUp', to: 0 },
			{
				title: 'Employment History',
				icon: '$mdiDomain',
				to: '#employment_history',
			},
			{
				title: 'Education History',
				icon: '$mdiSchool',
				to: '#education_history',
			},
			{
				title: 'Professional Memberships',
				icon: '$mdiHandshake',
				to: '#membership_history',
			},
			{
				title: 'Technical Skillsets',
				icon: '$mdiPencilRuler',
				to: '#technical_skillsets',
			},
			{
				title: 'Soft Skills',
				icon: '$mdiHumanGreeting',
				to: '#soft_skills',
			},
		],
		links: [
			{
				title: 'armin.monirzadeh@gmail.com',
				icon: '$mdiEmail',
				color: '#EA4335',
				href: 'mailto:armin.monirzadeh@gmail.com?body=Hello%20Armin%2C%0D%0A%0D%0A',
			},
			{
				title: 'LinkedIn',
				icon: '$mdiLinkedin',
				color: '#0A66C2',
				href: 'https://www.linkedin.com/in/armin-monirzadeh/',
			},
			{
				title: 'GitHub',
				icon: '$mdiGithub',
				color: '#181717',
				href: 'https://github.com/arminmon',
			},
			{
				title: 'Dribbble',
				icon: '$mdiDribbble',
				color: '#EA4C89',
				href: 'https://dribbble.com/arminmon',
			},
		],
	}),
	head() {
		return {
			title: 'RÉSUMÉ',
		}
	},
}
</script>

<style lang="scss" scoped>
#speedDial {
	position: fixed;
	z-index: 1000;
}
</style>
