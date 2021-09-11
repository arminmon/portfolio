<template>
	<client-only>
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
						{{ $t('Technical Skillsets') }}
					</h2>
				</v-toolbar-title>
				<v-spacer />
				<span aria-hidden="true" class="text-caption">
					<v-badge inline dot bordered color="primary" /> is preferred.
				</span>
			</v-toolbar>
			<v-row
				v-for="skillset in items"
				:key="skillset.slug"
				:dense="$vuetify.breakpoint.smAndDown"
			>
				<v-col cols="12" class="pb-0">
					<v-subheader>
						<h3 class="text-subtitle-2">{{ $t(skillset.title) }}</h3>
					</v-subheader>
				</v-col>
				<v-col
					v-for="item in skillset.items"
					:key="`${skillset.slug}-${item.title}`"
					cols="auto"
				>
					<v-badge :value="!!item.is_preferred" dot overlap bordered>
						<v-chip
							pill
							:color="item.color"
							:dark="item.dark"
							:light="item.light"
							@click="openDialog(item)"
						>
							<v-avatar
								v-if="item.icon"
								left
								:color="
									item.light
										? $chroma(item.color).brighten(0.15).hex()
										: $chroma(item.color).darken(0.15).hex()
								"
							>
								<v-icon class="rounded-0">
									{{ item.icon }}
								</v-icon>
							</v-avatar>
							<span>{{ item.title }}</span>
						</v-chip>
					</v-badge>
				</v-col>
			</v-row>
			<v-dialog
				v-if="skill"
				v-model="dialog"
				max-width="320px"
				:overlay-color="
					skill.light
						? $chroma(skill.color).brighten(3).hex()
						: $chroma(skill.color).darken(3).hex()
				"
				overlay-opacity=".3"
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
							left: !$vuetify.rtl ? 'unset' : '-15%',
							right: $vuetify.rtl ? 'unset' : '-15%',
							opacity: '.1',
						}"
					>
						{{ skill.icon }}
					</v-icon>
					<v-card-title>
						{{ skill.title }}
						<v-spacer />
						<v-badge
							v-if="skill.is_preferred"
							aria-hidden="true"
							inline
							dot
							bordered
							color="primary"
							class="mt-n2"
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
		</v-container>
	</client-only>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import type { Skill, Skillset } from '~/types/models'

@Component
export default class ResumeSkillsetsGrid extends Vue {
	dialog: boolean = false
	skill: Skill | null = null

	@Prop({ required: true })
	items!: Skillset[]

	openDialog(skill: Skill) {
		this.skill = skill
		this.dialog = true
	}

	closeDialog() {
		this.dialog = false
	}
}
</script>
