<template>
	<client-only>
		<v-timeline :dense="$vuetify.breakpoint.smAndDown">
			<v-data-iterator
				:items="items"
				item-key="slug"
				sort-by="start_date"
				:sort-desc="options.includes('sortDesc')"
				disable-pagination
				hide-default-footer
			>
				<template #header="{ items }">
					<v-timeline-item hide-dot>
						<v-toolbar dense flat color="transparent">
							<v-toolbar-title
								role="heading"
								:class="[
									'text-subtitle-1',
									'text-md-h6',
									'text-uppercase',
									'text-wrap',
									'primary--text',
								]"
							>
								{{ $t('Education History') }}
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
									{{ $d(new Date(item.start_date), 'long YM') }}
								</span>
								<span class="font-weight-black">
									— {{ $d(new Date(item.graduation_date), 'long YM') }}
								</span>
							</v-card-text>
							<v-card-title>{{ $t(item.title) }}</v-card-title>
							<v-card-subtitle v-if="item.subtitle">
								{{ $t(item.subtitle) }}
							</v-card-subtitle>
							<v-card-text>{{ $t(item.institution) }}</v-card-text>
							<v-card-text>
								<v-expansion-panels v-if="item.details" multiple hover>
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
													v-for="(detailItem, index) in detail.items"
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
								<v-card-text class="text-caption">
									<div class="font-weight-black">
										{{ $d(new Date(item.graduation_date), 'long YM') }}
									</div>
									<div>
										{{ $d(new Date(item.start_date), 'long YM') }}
									</div>
								</v-card-text>
							</v-card>
						</template>
						<template #icon>
							<v-avatar size="38">
								<v-img
									v-if="item.avatar"
									:src="require(`~/assets/images/avatars/${item.avatar}`)"
								/>
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
import type { Education } from '~/types/models'

@Component
export default class ResumeEducationTimeline extends Vue {
	options: string[] = ['sortDesc']

	@Prop({ required: true })
	items!: Education[]
}
</script>
