<template>
	<v-dialog
		v-if="skill"
		v-model="dialog"
		max-width="320px"
		width="300px"
		:dark="skill.dark"
		:light="skill.light"
		:overlay-color="
			$colour.setLightness(skill.color, skill.light ? 0.15 : 0.85)
		"
		overlay-opacity=".5"
	>
		<v-card
			:color="skill.color"
			:dark="skill.dark"
			:light="skill.light"
			:style="{ position: 'relative', overflow: 'hidden' }"
		>
			<v-icon
				v-if="skill.icon"
				size="200"
				:style="{
					position: 'absolute',
					left: !$vuetify.rtl ? 'unset' : '-8px',
					right: $vuetify.rtl ? 'unset' : '-8px',
					top: '-8px',
					opacity: '.075',
				}"
			>
				{{ skill.icon }}
			</v-icon>
			<v-card-title class="font-weight-black">
				{{ skill.title }}
				<v-spacer />
				<v-badge
					v-if="skill.isPreferred"
					aria-hidden="true"
					dot
					bordered
					:dark="skill.light"
					:light="skill.dark"
					color="primary"
					class="ma-4"
					:style="{ position: 'absolute', top: 0, right: 0 }"
				/>
			</v-card-title>
			<v-card-subtitle v-if="skill.subtitle">
				{{ skill.subtitle }}
			</v-card-subtitle>
			<v-card-text v-if="skill.notes">
				<ul>
					<li
						v-for="(note, index) in skill.notes"
						:key="`${skill.title}-note-${index}`"
					>
						{{ note }}
					</li>
				</ul>
			</v-card-text>
			<v-card-actions>
				<v-btn text plain @click="closeDialog">
					{{ $t('$vuetify.close') }}
				</v-btn>
				<v-spacer />
				<v-btn
					v-if="skill.link"
					text
					link
					:href="skill.link"
					target="_blank"
					rel="noopener noreferrer"
				>
					<v-icon left>$icon.link</v-icon>
					{{ $t('Learn More') }}
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script lang="ts">
import { Component, On, Vue } from 'nuxt-property-decorator'
import type { Skill } from '~/plugins/resume/models'

@Component
export default class ResumeDialogSkill extends Vue {
	dialog: boolean = false
	skill: Skill | null = null

	@On('pass-and-open-dialog')
	passAndOpenDialog(skill: Skill): void {
		this.skill = skill
		this.openDialog()
	}

	openDialog(): void {
		this.dialog = true
	}

	closeDialog() {
		this.dialog = false
	}
}
</script>
