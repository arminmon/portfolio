<template>
	<v-app>
		<v-main>
			<nuxt />
		</v-main>
		<app-footer />
	</v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class LayoutDefault extends Vue {
	head() {
		return this.$nuxtI18nHead({ addSeoAttributes: true })
	}
}
</script>
