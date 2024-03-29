<template>
	<client-only>
		<v-timeline :dense="$vuetify.breakpoint.smAndDown">
			<v-data-iterator
				:items="items"
				item-key="slug"
				sort-by="joinDate"
				:sort-desc="options.includes('sortDesc')"
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
									{{ $t('Professional Memberships') }}
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
						<v-card color="transparent" flat>
							<v-card-text
								v-if="$vuetify.breakpoint.smAndDown"
								class="text-caption font-weight-black"
							>
								<span>Since {{ $d(item.joinDate, 'long YMD') }}</span>
							</v-card-text>
							<v-card-title>{{ item.title }}</v-card-title>
							<v-card-subtitle v-if="item.subtitle">
								{{ item.subtitle }}
							</v-card-subtitle>
							<v-card-text>{{ $t(item.institution) }}</v-card-text>
						</v-card>
						<template #opposite>
							<v-card flat>
								<v-card-text class="text-caption font-weight-black">
									<div>Since {{ $d(item.joinDate, 'long YMD') }}</div>
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
import type { ProfessionalMembership } from '~/plugins/resume/models'

@Component
export default class ResumeTimelineProfessionalMembership extends Vue {
	options: string[] = ['sortDesc']

	@Prop({ required: true })
	items!: ProfessionalMembership[]
}
</script>
