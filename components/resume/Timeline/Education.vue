<template>
	<client-only>
		<v-timeline :dense="$vuetify.breakpoint.smAndDown">
			<v-data-iterator
				:items="items"
				item-key="slug"
				sort-by="startDate"
				:sort-desc="sortDesc"
				disable-pagination
				hide-default-footer
			>
				<template #header="{ items }">
					<v-timeline-item hide-dot>
						<v-toolbar dense flat color="transparent">
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
									{{ $t('Education History') }}
								</h2>
							</v-toolbar-title>
							<v-spacer />
							<v-btn-toggle
								v-if="items.length > 1"
								v-show="$vuetify.breakpoint.smAndDown"
								v-model="options"
								multiple
								color="primary"
								borderless
								dense
							>
								<v-btn value="sortDesc" :aria-label="$t('Latest First')">
									<v-icon>$icon.sort_calendar_desc</v-icon>
								</v-btn>
							</v-btn-toggle>
						</v-toolbar>
						<template #opposite>
							<v-toolbar dense flat color="transparent">
								<v-spacer />
								<v-btn-toggle
									v-if="items.length > 1"
									v-model="options"
									multiple
									color="primary"
									borderless
									dense
								>
									<v-btn value="sortDesc">{{ $t('Latest First') }}</v-btn>
								</v-btn-toggle>
							</v-toolbar>
						</template>
					</v-timeline-item>
				</template>
				<template #item="{ item }">
					<v-timeline-item :color="item.color" fill-dot right>
						<v-card flat>
							<v-card-text
								v-if="$vuetify.breakpoint.smAndDown"
								class="text-caption"
							>
								<span>
									{{ $d(item.startDate, 'long YM') }}
								</span>
								<span class="font-weight-black">
									— {{ $d(item.graduationDate, 'long YM') }}
								</span>
							</v-card-text>
							<v-card-title>{{ $t(item.title) }}</v-card-title>
							<v-card-subtitle v-if="item.subtitle">
								{{ $t(item.subtitle) }}
							</v-card-subtitle>
							<v-card-text>{{ $t(item.institution) }}</v-card-text>
							<v-card-text>
								<v-expansion-panels v-if="item.hasDetails" multiple hover>
									<v-expansion-panel
										v-for="detail in item.details"
										:key="detail.title"
									>
										<v-expansion-panel-header>
											{{ $t(detail.title) }}
										</v-expansion-panel-header>
										<v-expansion-panel-content>
											<ul>
												<li
													v-for="(detailItem, index) in detail.items.filter(
														(i) => i !== ''
													)"
													:key="`${item.slug}-${detail.title}-${index}`"
												>
													{{ detailItem }}
												</li>
											</ul>
										</v-expansion-panel-content>
									</v-expansion-panel>
								</v-expansion-panels>
							</v-card-text>
						</v-card>
						<template #opposite>
							<v-card flat>
								<v-card-text
									:class="{
										'd-flex': true,
										'flex-column-reverse': !sortDesc,
										'flex-column': sortDesc,
										'text-caption': true,
									}"
								>
									<div class="font-weight-black">
										{{ $d(item.graduationDate, 'long YM') }}
									</div>
									<div>
										{{ $d(item.startDate, 'long YM') }}
									</div>
								</v-card-text>
							</v-card>
						</template>
						<template #icon>
							<v-avatar size="38">
								<v-img v-if="item.hasAvatar" :src="item.avatarUrl" />
								<span v-else class="white--text text-h6 text-center">
									{{ item.initials }}
								</span>
							</v-avatar>
						</template>
					</v-timeline-item>
				</template>
			</v-data-iterator>
		</v-timeline>
	</client-only>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import type { Education } from '~/plugins/resume/models'

@Component
export default class ResumeTimelineEducation extends Vue {
	options: string[] = ['sortDesc']

	@Prop({ required: true })
	items!: Education[]

	get sortDesc(): boolean {
		return this.options.includes('sortDesc')
	}
}
</script>
