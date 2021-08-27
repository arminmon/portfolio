<template>
	<v-app>
		<app-drawer
			ref="appDrawer"
			@drawer-closed="appFab.$emit('app-drawer-closed')"
		/>
		<v-main>
			<nuxt />
		</v-main>
		<app-footer />
	</v-app>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'nuxt-property-decorator'

@Component
export default class LayoutDefault extends Vue {
	head() {
		return this.$nuxtI18nHead({ addSeoAttributes: true })
	}
}
</script>
