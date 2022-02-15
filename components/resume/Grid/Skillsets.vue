<template>
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
						<v-dialog
							v-model="item.dialogIsShown"
							max-width="320px"
							width="300px"
							:dark="!$colour.isReadableInBlack(item.color)"
							:light="$colour.isReadableInBlack(item.color)"
							:overlay-color="
								$colour.setLightness(item.color, item.light ? 0.15 : 0.85)
							"
							overlay-opacity=".5"
							aria-labelledby="test"
						>
							<template #activator="{ on, attrs }">
								<v-badge :value="item.isPreferred" dot overlap bordered>
									<v-chip
										v-bind="attrs"
										pill
										:color="item.color"
										:dark="!$colour.isReadableInBlack(item.color)"
										:light="$colour.isReadableInBlack(item.color)"
										v-on="on"
									>
										<v-avatar v-if="item.icon" left>
											<v-icon class="rounded-0 pa-1">
												{{ item.icon }}
											</v-icon>
										</v-avatar>
										<span>{{ item.title }}</span>
									</v-chip>
								</v-badge>
							</template>
							<v-card
								:color="item.color"
								:dark="!$colour.isReadableInBlack(item.color)"
								:light="$colour.isReadableInBlack(item.color)"
								:style="{ position: 'relative', overflow: 'hidden' }"
							>
								<v-icon
									v-if="item.icon"
									size="200"
									:style="{
										position: 'absolute',
										left: !$vuetify.rtl ? 'unset' : '-8px',
										right: $vuetify.rtl ? 'unset' : '-8px',
										top: '-8px',
										opacity: '.075',
									}"
								>
									{{ item.icon }}
								</v-icon>
								<v-card-title>
									<h1 class="text-h6 font-weight-black">{{ item.title }}</h1>
									<v-spacer />
									<v-badge
										v-if="item.isPreferred"
										aria-hidden="true"
										dot
										bordered
										:dark="$colour.isReadableInBlack(item.color)"
										:light="!$colour.isReadableInBlack(item.color)"
										color="primary"
										class="ma-4"
										:style="{ position: 'absolute', top: 0, right: 0 }"
									/>
								</v-card-title>
								<v-card-subtitle v-if="item.subtitle" tag="p">
									{{ item.subtitle }}
								</v-card-subtitle>
								<v-card-text v-if="item.notes">
									<ul>
										<li
											v-for="(note, index) in item.notes"
											:key="`${item.title}-note-${index}`"
										>
											{{ note }}
										</li>
									</ul>
								</v-card-text>
								<v-card-actions>
									<v-btn
										text
										plain
										@click="item.dialogIsShown = !item.dialogIsShown"
									>
										{{ $t('$vuetify.close') }}
									</v-btn>
									<v-spacer />
									<v-btn
										v-if="item.link"
										text
										link
										:href="item.link"
										target="_blank"
										rel="noopener noreferrer"
									>
										<v-icon left>$icon.link</v-icon>
										{{ $t('Learn More') }}
									</v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>
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
	</v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import type { Skill } from '~/plugins/resume/models'

@Component
export default class ResumeGridSkillsets extends Vue {
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
}
</script>
