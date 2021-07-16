<template>
	<v-data-iterator
		:items="educations"
		sort-by="start_date"
		:sort-desc="options.includes('sortDesc')"
		disable-pagination
		hide-default-footer
	>
		<template #default="{ items }">
			<v-timeline :dense="$vuetify.breakpoint.smAndDown">
				<v-timeline-item hide-dot>
					<v-toolbar dense flat color="transparent">
						<v-toolbar-title class="primary--text text-wrap">
							Education History
						</v-toolbar-title>
						<v-spacer />
						<v-btn-toggle
							v-if="$vuetify.breakpoint.smAndDown"
							v-model="options"
							multiple
							color="primary"
							borderless
							dense
						>
							<v-btn value="sortDesc">
								<v-icon>$mdiSortCalendarDescending</v-icon>
							</v-btn>
						</v-btn-toggle>
					</v-toolbar>
					<template #opposite>
						<v-toolbar dense flat color="transparent">
							<v-spacer />
							<v-btn-toggle
								v-model="options"
								multiple
								color="primary"
								borderless
								dense
							>
								<v-btn value="sortDesc">Latest First</v-btn>
							</v-btn-toggle>
						</v-toolbar>
					</template>
				</v-timeline-item>
				<v-timeline-item
					v-for="item in items"
					:key="item.slug"
					:color="item.color"
					fill-dot
					right
				>
					<v-card flat>
						<v-card-text
							v-if="$vuetify.breakpoint.smAndDown"
							class="text-caption"
						>
							<span>
								{{ item.start_date | formatDate }}
							</span>
							<span class="font-weight-black">
								— {{ item.graduation_date | formatDate }}
							</span>
						</v-card-text>
						<v-card-title>{{ item.title }}</v-card-title>
						<v-card-subtitle v-if="item.subtitle">
							{{ item.subtitle }}
						</v-card-subtitle>
						<v-card-text>{{ item.institution }}</v-card-text>
						<v-card-text>
							<v-expansion-panels v-if="item.details" multiple hover>
								<v-expansion-panel
									v-for="detail in item.details"
									:key="detail.title"
								>
									<v-expansion-panel-header>
										{{ detail.title }}
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
									{{ item.graduation_date | formatDate }}
								</div>
								<div>
									{{ item.start_date | formatDate }}
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
			</v-timeline>
		</template>
	</v-data-iterator>
</template>

<script>
export default {
	props: {
		educations: {
			type: Array,
			required: true,
		},
	},
	data: () => ({
		options: ['sortDesc'],
	}),
}
</script>
