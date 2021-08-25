<template>
	<v-container>
		<v-toolbar flat color="transparent">
			<v-toolbar-title class="primary--text text-wrap">
				{{ $t('Soft Skills') }}
			</v-toolbar-title>
		</v-toolbar>
		<v-row>
			<v-col cols="12">
				<v-expansion-panels hover>
					<v-expansion-panel v-for="skill in items" :key="skill.slug">
						<v-expansion-panel-header class="primary--text text--darken-2">
							{{ $t(skill.title) }}
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

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import type { SoftSkill } from '~/types/models'

@Component
export default class ResumeSoftSkillsList extends Vue {
	@Prop({ required: true })
	items!: SoftSkill[]
}
</script>
