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
							<v-icon x-small :style="{ opacity: 0.5 }">$icon.mdiPlus</v-icon>
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
				icon: '$icon.siNuxtjs',
			},
			{
				title: 'VueJS',
				icon: '$icon.siVuejs',
			},
			{
				title: 'VuetifyJS',
				icon: '$icon.siVuetify',
			},
			{
				title: 'Google Material Design',
				icon: '$icon.siMaterialDesign',
			},
			{
				title: 'Material Design Icons',
				icon: '$icon.siMaterialDesignIcons',
			},
			{
				title: 'Simple Icons',
				icon: '$icon.siSimpleIcons',
			},
			{
				title: 'JetBrains Mono Font',
				icon: '$icon.siJetBrains',
			},
			{
				title: 'GitHub Actions',
				icon: '$icon.siGithubActions',
			},
			{
				title: 'GitHub Pages',
				icon: '$icon.siGithub',
			},
			{
				title: 'Theine',
				icon: '$icon.mdiTea',
			},
		],
	}),
}
</script>
