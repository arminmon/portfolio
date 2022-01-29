<template>
	<v-card tag="header" role="banner" elevation="18" class="rounded-t-0">
		<v-row no-gutters align="center" justify="center">
			<v-col
				cols="12"
				md="auto"
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
				{{ $vuetify.breakpoint.smAndDown ? $t('Hi') : $t('Hello') }},
				<span class="text-nowrap">{{ $t("I'm Armin") }}.</span>
				<div class="text-caption">{{ $t('A Software Engineer') }}</div>
			</v-col>
			<v-col cols="4" md="2" xl="1" class="pt-0 pt-md-6" align-self="end">
				<v-img
					src="/images/memoji/wave.png"
					aspect-ratio="1"
					position="bottom"
					contain
				/>
			</v-col>
		</v-row>
	</v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class LandingHeaderBanner extends Vue {}
</script>
