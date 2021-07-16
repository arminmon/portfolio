<template>
	<v-container>
		<v-toolbar flat color="transparent">
			<v-toolbar-title class="primary--text text-wrap">
				Soft Skills
			</v-toolbar-title>
		</v-toolbar>
		<v-row>
			<v-col cols="12">
				<v-expansion-panels hover>
					<v-expansion-panel v-for="skill in skills" :key="skill.slug">
						<v-expansion-panel-header class="primary--text text--darken-2">
							{{ skill.title }}
						</v-expansion-panel-header>
						<v-expansion-panel-content>
							<nuxt-content :document="skill" />
						</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	props: {
		skills: {
			type: Array,
			required: true,
		},
	},
}
</script>
