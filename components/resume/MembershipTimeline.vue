<template>
	<v-timeline :dense="$vuetify.breakpoint.smAndDown">
		<v-data-iterator
			:items="memberships"
			item-key="slug"
			sort-by="join_date"
			:sort-desc="options.includes('sortDesc')"
			disable-pagination
			hide-default-footer
		>
			<template #header="{ items }">
				<v-timeline-item hide-dot>
					<v-toolbar dense flat color="transparent">
						<v-toolbar-title class="primary--text text-wrap">
							Professional Memberships
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
							<v-btn value="sortDesc">
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
								<v-btn value="sortDesc">Latest First</v-btn>
							</v-btn-toggle>
						</v-toolbar>
					</template>
				</v-timeline-item>
			</template>
			<template #item="{ item }">
				<v-timeline-item :color="item.color" fill-dot right>
					<v-card color="transparent" flat>
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

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { MembershipModel } from '~/types/models'

@Component
export default class ResumeMembershipTimeline extends Vue {
	options: string[] = ['sortDesc']

	@Prop({ required: true })
	memberships!: MembershipModel[]
}
</script>
