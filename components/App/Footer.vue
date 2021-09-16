<template>
	<v-footer app absolute>
		<v-container class="pt-12 pb-16 pb-sm-12">
			<v-row :aria-label="buildingBlocksDescription" dense justify="center">
				<v-col cols="auto">
					<span class="text-caption" :style="{ opacity: 0.5 }">this</span>
				</v-col>
				<v-col cols="auto">
					<v-icon x-small :style="{ opacity: 0.5 }">$icon.equal</v-icon>
				</v-col>
				<template v-for="(block, index) in blocks">
					<v-col v-if="index !== 0" :key="`${block.title}-plus`" cols="auto">
						<v-icon x-small :style="{ opacity: 0.5 }">$icon.plus</v-icon>
					</v-col>
					<v-col :key="block.title" cols="auto">
						<v-tooltip top>
							<template #activator="{ on, attrs }">
								<v-icon v-bind="attrs" :style="{ opacity: 0.65 }" v-on="on">
									{{ block.icon }}
								</v-icon>
							</template>
							<span>{{ block.title }}</span>
						</v-tooltip>
					</v-col>
				</template>
			</v-row>
		</v-container>
	</v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { BuildingBlock } from '~/types/models'

@Component
export default class AppFooter extends Vue {
	blocks: BuildingBlock[] = [
		{
			title: 'Nuxt',
			icon: '$icon.nuxt',
		},
		{
			title: 'Vue',
			icon: '$icon.vue_js',
		},
		{
			title: 'Vuetify',
			icon: '$icon.vuetify',
		},
		{
			title: 'TypeScript',
			icon: '$icon.typescript',
		},
		{
			title: 'Google Material Design',
			icon: '$icon.material_design',
		},
		{
			title: 'Material Design Icons',
			icon: '$icon.material_design_icons',
		},
		{
			title: 'Simple Icons',
			icon: '$icon.simple_icons',
		},
		{
			title: 'Noun Project',
			icon: '$icon.noun_project',
		},
		{
			title: 'Vercel',
			icon: '$icon.vercel',
		},
		{
			title: 'Some theine',
			icon: '$icon.tea',
		},
	]

	get buildingBlocksDescription(): string {
		const listFormat = new (Intl as any).ListFormat('en', {
			style: 'long',
			type: 'conjunction',
		})
		const blocksList = listFormat.format(
			this.blocks.map((block) => block.title)
		)

		return `This website was built using ${blocksList}`
	}
}
</script>
