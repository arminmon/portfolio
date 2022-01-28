<template>
	<v-card tag="header" role="banner" elevation="18" class="rounded-t-0">
		<v-card-title
			:class="[
				'text-h4',
				'text-center',
				'justify-center',
				'pa-6',
				'pa-md-8',
				'pa-lg-10',
				'pa-xl-12',
			]"
		>
			{{ $vuetify.breakpoint.smAndDown ? $t('Hi') : $t('Hello') }}
			👋,&nbsp;
			<span class="text-nowrap">{{ $t("I'm Armin") }}.</span>
			<v-avatar size="64" class="ms-2 ms-md-4">
				<v-img
					src="https://secure.gravatar.com/avatar/14b8d65cfe37e16e124d3d37106e3cab?s=300"
				/>
			</v-avatar>
		</v-card-title>
	</v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class LandingHeaderBanner extends Vue {}
</script>
