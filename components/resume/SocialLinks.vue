<template>
	<v-row justify="center">
		<v-col v-for="link in items" :key="link.slug" cols="12" md="auto">
			<v-hover #default="{ hover }">
				<v-chip
					:color="link.color"
					dark
					large
					:outlined="!$vuetify.theme.dark"
					:href="link.href"
					target="_blank"
					rel="noopener noreferrer"
					:class="{
						'px-6': true,
						'justify-center': true,
						'transition-swing': true,
						'elevation-8': hover,
						'elevation-4': !hover,
					}"
					:style="{ width: '100%' }"
				>
					<v-icon :size="$vuetify.breakpoint.mobile ? 18 : 24" left>
						{{ link.icon }}
					</v-icon>
					<span>{{ link.title }}</span>
				</v-chip>
			</v-hover>
		</v-col>
	</v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import type { SocialLink } from '~/types/models'

@Component
export default class ResumeSocialLinks extends Vue {
	@Prop({ required: true })
	items!: SocialLink[]
}
</script>
