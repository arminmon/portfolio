<template>
	<v-timeline :dense="$vuetify.breakpoint.smAndDown">
		<v-timeline-item hide-dot>
			<v-toolbar dense flat color="transparent">
				<v-toolbar-title class="primary--text text-wrap">
					Professional Memberships
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
		<v-data-iterator
			:items="memberships"
			sort-by="join_date"
			:sort-desc="options.includes('sortDesc')"
			disable-pagination
			hide-default-footer
		>
			<template #default="{ items }">
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
								{{ item.join_date | formatDate }}
							</span>
						</v-card-text>
						<v-card-title>{{ item.title }}</v-card-title>
						<v-card-subtitle v-if="item.subtitle">
							{{ item.subtitle }}
						</v-card-subtitle>
						<v-card-text>{{ item.institution }}</v-card-text>
					</v-card>
					<template #opposite>
						<v-card flat>
							<v-card-text class="text-caption">
								<div>
									Since
									{{
										item.join_date
											| formatDate({
												year: 'numeric',
												month: 'long',
												day: 'numeric',
											})
									}}
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
</template>

<script>
export default {
	props: {
		memberships: {
			type: Array,
			required: true,
		},
	},
	data: () => ({
		options: ['sortDesc'],
	}),
}
</script>
