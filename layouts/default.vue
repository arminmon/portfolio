<template>
	<v-app>
		<app-floating-action-button
			ref="appFab"
			@open-app-drawer="appDrawer.$emit('open-drawer')"
		/>
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
	@Ref()
	readonly appFab!: Vue

	@Ref()
	readonly appDrawer!: Vue

	head() {
		return this.$nuxtI18nHead({ addSeoAttributes: true })
	}
}
</script>
