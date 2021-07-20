<template>
	<v-container>
		<v-toolbar flat color="transparent">
			<v-toolbar-title class="primary--text text-wrap">
				Technical Skillsets
			</v-toolbar-title>
		</v-toolbar>
		<v-row
			v-for="skillset in skillsets"
			:key="skillset.slug"
			:dense="$vuetify.breakpoint.smAndDown"
		>
			<v-col cols="12" class="pb-0">
				<v-subheader>{{ skillset.title }}</v-subheader>
			</v-col>
			<v-col
				v-for="item in skillset.items"
				:key="`${skillset.slug}-${item.title}`"
				cols="auto"
			>
				<v-chip
					pill
					:color="item.color"
					:dark="item.dark"
					:light="item.light"
					@click="openDialog(item)"
				>
					<v-avatar v-if="item.icon" left color="rgba(255,255,255,.2)">
						<v-icon size="18" class="rounded-0">
							{{ item.icon }}
						</v-icon>
					</v-avatar>
					<span>{{ item.title }}</span>
				</v-chip>
			</v-col>
		</v-row>
		<v-dialog
			v-if="skill"
			v-model="dialog"
			max-width="320px"
			:overlay-color="skill.color"
			overlay-opacity=".2"
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
						top: '-15%',
						right: '-15%',
						opacity: '.1',
					}"
				>
					{{ skill.icon }}
				</v-icon>
				<v-card-title>{{ skill.title }}</v-card-title>
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
					<v-btn text plain @click="closeDialog">Close</v-btn>
					<v-spacer />
					<v-btn text link target="_blank" :href="skill.link">
						<v-icon left>$icon.mdiLinkVariant</v-icon>
						Learn more
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-container>
</template>

<script>
export default {
	props: {
		skillsets: {
			type: Array,
			required: true,
		},
	},
	data: () => ({
		dialog: false,
		skill: null,
	}),
	methods: {
		openDialog(skill) {
			this.skill = skill
			this.dialog = true
		},
		closeDialog() {
			this.dialog = false
		},
	},
}
</script>
