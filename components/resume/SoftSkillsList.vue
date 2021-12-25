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
		<client-only>
			<v-row v-masonry>
				<v-col
					v-for="skill in items"
					:key="skill.slug"
					v-masonry-tile
					cols="12"
					sm="6"
					md="4"
					lg="3"
					xl="2"
				>
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
							<nuxt-content :document="skill" />
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
		</client-only>
	</v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import type { SoftSkillContent } from '~/types/content'

@Component
export default class ResumeSoftSkillsList extends Vue {
	$redrawVueMasonry: any

	@Prop({ required: true })
	items!: SoftSkillContent[]

	renderMasonry() {
		if (typeof this.$redrawVueMasonry === 'function') {
			this.$redrawVueMasonry()
		}
	}

	mounted() {
		setTimeout(() => {
			this.renderMasonry()
		})
	}
}
</script>
