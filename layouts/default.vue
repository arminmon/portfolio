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
							<v-icon x-small :style="{ opacity: 0.5 }">$icon.plus</v-icon>
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
				icon: '$icon.nuxt_js',
			},
			{
				title: 'VueJS',
				icon: '$icon.vue_js',
			},
			{
				title: 'VuetifyJS',
				icon: '$icon.vuetify',
			},
			{
				title: 'Google Material Design',
				icon: '$icon.material_design',
			},
			{
				title: 'Material Design Icons',
				icon: '$icon.material_design_icons',
			},
			{
				title: 'Simple Icons',
				icon: '$icon.simple_icons',
			},
			{
				title: 'JetBrains Mono Font',
				icon: '$icon.jetbrains',
			},
			{
				title: 'GitHub Actions',
				icon: '$icon.github_actions',
			},
			{
				title: 'GitHub Pages',
				icon: '$icon.github',
			},
			{
				title: 'Theine',
				icon: '$icon.tea',
			},
		],
	}),
}
</script>
