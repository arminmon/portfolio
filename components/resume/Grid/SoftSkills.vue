<template>
	<v-container>
		<v-toolbar flat color="transparent">
			<v-toolbar-title>
				<h2
					:class="[
						'text-subtitle-1',
						'text-md-h6',
						'text-uppercase',
						'text-wrap',
						'primary--text',
					]"
				>
					{{ $t('Soft Skills') }}
				</h2>
			</v-toolbar-title>
		</v-toolbar>
		<v-row dense>
			<v-col v-for="skill in items" :key="skill.slug" cols="12">
				<v-card flat outlined>
					<v-card-title>
						<h3
							:class="{
								'text-subtitle-2': true,
								'text-md-subtitle-1': true,
								'text-wrap': true,
								'primary--text': true,
								'text--darken-2': !$vuetify.theme.dark,
								'text--lighten-2': $vuetify.theme.dark,
							}"
						>
							{{ $t(skill.title) }}
						</h3>
					</v-card-title>
					<v-card-text>
						<nuxt-content :document="skill.model" />
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { SoftSkill } from '~/plugins/resume/models'

@Component
export default class ResumeGridSoftSkills extends Vue {
	@Prop({ required: true })
	items!: SoftSkill[]
}
</script>
