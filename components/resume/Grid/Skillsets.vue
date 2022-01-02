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
									@click="openInDialog(item)"
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
			<resume-dialog-skill ref="skillDialog" />
		</v-container>
	</client-only>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue } from 'nuxt-property-decorator'
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

	@Ref()
	readonly skillDialog!: Vue

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

	openInDialog(skill: Skill) {
		this.skillDialog.$emit('pass-and-open-dialog', skill)
	}
}
</script>
