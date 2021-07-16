<template>
	<v-app>
		<v-main>
			<nuxt />
		</v-main>
		<v-footer app absolute>
			<v-container class="py-12">
				<v-row dense justify="center">
					<template v-for="(block, index) in blocks">
						<v-col v-if="index !== 0" :key="`${block.title}-plus`" cols="auto">
							<v-icon x-small :style="{ opacity: 0.5 }">$mdiPlus</v-icon>
						</v-col>
						<v-col :key="block.title" cols="auto">
							<v-tooltip top>
								<template #activator="{ on, attrs }">
									<v-icon v-bind="attrs" :style="{ opacity: 0.65 }" v-on="on">
										{{ block.icon }}
									</v-icon>
								</template>
								<span>{{ block.title }}</span>
							</v-tooltip>
						</v-col>
					</template>
				</v-row>
			</v-container>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		blocks: [
			{
				title: 'NuxtJS',
				icon: '$mdiNuxt',
			},
			{
				title: 'VueJS',
				icon: '$mdiVuejs',
			},
			{
				title: 'VuetifyJS',
				icon: '$mdiVuetify',
			},
			{
				title: 'Google Material Design',
				icon: '$mdiMaterialDesign',
			},
			{
				title: 'Material Design Icons',
				icon: '$mdiMaterialDesignIcons',
			},
			{
				title: 'Simple Icons',
				icon: '$mdiSimpleIcons',
			},
			{
				title: 'JetBrains Mono Font',
				icon: '$mdiJetBrains',
			},
			{
				title: 'GitHub Actions',
				icon: '$mdiGithubActions',
			},
			{
				title: 'GitHub Pages',
				icon: '$mdiGithub',
			},
			{
				title: 'Theine',
				icon: '$mdiTea',
			},
		],
	}),
}
</script>
