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
				<v-chip pill :color="item.color" :dark="item.dark" :light="item.light">
					<v-avatar v-if="item.icon" left color="rgba(255,255,255,.2)">
						<v-icon size="18" class="rounded-0">
							{{ item.icon }}
						</v-icon>
					</v-avatar>
					<span>{{ item.title }}</span>
				</v-chip>
			</v-col>
		</v-row>
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
}
</script>
