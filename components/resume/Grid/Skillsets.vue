<template>
	<client-only>
		<v-container>
			<v-toolbar flat color="transparent" class="align-items-center">
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
				<span aria-hidden="true" class="text-caption font-italic">
					<v-badge inline dot bordered color="primary" />
					{{ $t('is preferred.') }}
				</span>
			</v-toolbar>
			<v-toolbar dense flat color="transparent">
				<v-text-field
					v-model="search"
					:placeholder="$t('Search for a skill')"
					dense
					solo
					hide-details
					clearable
				/>
			</v-toolbar>
			<v-data-iterator
				:items="items"
				item-key="slug"
				group-by="group"
				:search="search"
				:custom-filter="searchItems"
				disable-pagination
				hide-default-footer
			>
				<template #default="{ groupedItems }">
					<v-row
						v-for="group in groupedItems.sort(
							(a, b) => groupOrders[a.name] - groupOrders[b.name]
						)"
						:key="group.name"
					>
						<v-col cols="12" class="pb-0">
							<v-subheader>
								<h3 class="text-subtitle-2">{{ $t(group.name) }}</h3>
							</v-subheader>
						</v-col>
						<v-col v-for="item in group.items" :key="item.slug" cols="auto">
							<v-badge :value="item.isPreferred" dot overlap bordered>
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
				</template>
				<template #no-results>
					<v-row justify="center" class="mt-1">
						<v-col cols="auto" class="text-center">
							<div class="text-caption">Nothing was found.</div>
							<v-btn plain text @click="clearSearch">Clear Search</v-btn>
						</v-col>
					</v-row>
				</template>
			</v-data-iterator>
			<v-dialog
				v-if="skill"
				v-model="dialog"
				max-width="320px"
				width="300px"
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
							left: !$vuetify.rtl ? 'unset' : '-8px',
							right: $vuetify.rtl ? 'unset' : '-8px',
							top: '-8px',
							opacity: '.075',
						}"
					>
						{{ skill.icon }}
					</v-icon>
					<v-card-title>
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
		</v-container>
	</client-only>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import type { Skill } from '~/plugins/resume/models'

@Component
export default class ResumeGridSkillsets extends Vue {
	dialog: boolean = false
	skill: Skill | null = null
	search: string | null = null
	groupOrders = {
		'frontend-dev': 0,
		'backend-dev': 1,
		'deployment': 2,
		'dev-tools': 3,
		'project-tools': 4,
		'principles': 5,
		'graphic-design': 6,
		'operating-systems': 7,
	}

	@Prop({ required: true })
	items!: Skill[]

	searchItems(items: any[], search: string) {
		return search === '' || search === null
			? items
			: items.filter((i: Skill) => {
					if (i.title.toLowerCase().includes(search.toLowerCase())) return true
					if (i.group.toLowerCase().includes(search.toLowerCase())) return true
					if (i.keywords)
						return i.keywords!.some((k) =>
							k.toLowerCase().includes(search.toLowerCase())
						)
					else return false
			  })
	}

	clearSearch() {
		this.search = null
	}

	openDialog(skill: Skill) {
		this.skill = skill
		this.dialog = true
	}

	closeDialog() {
		this.dialog = false
	}
}
</script>
