<template>
	<v-slide-x-transition>
		<v-btn
			v-show="fabBtn"
			id="appFab"
			:aria-label="$t('Navigation Drawer')"
			fab
			:small="$vuetify.breakpoint.mobile"
			elevation="8"
			color="primary"
			class="ma-6"
			:style="{
				left: '0',
				top: $vuetify.breakpoint.mobile ? 'unset' : '0',
				bottom: $vuetify.breakpoint.mobile ? '0' : 'unset',
			}"
			@click="openAppDrawer"
		>
			<v-icon :small="$vuetify.breakpoint.mobile">$icon.menu</v-icon>
		</v-btn>
	</v-slide-x-transition>
</template>

<script lang="ts">
import { Component, Emit, On, Vue } from 'nuxt-property-decorator'

@Component
export default class AppFloatingActionButton extends Vue {
	fabBtn: boolean = true
	fabBtnTooltip: boolean = false

	@Emit()
	openAppDrawer() {
		this.fabBtnTooltip = false
		this.fabBtn = false

		return true
	}

	@On('app-drawer-closed')
	showFabBtn(): void {
		this.fabBtn = true
	}
}
</script>

<style lang="scss" scoped>
#appFab {
	position: fixed;
	z-index: 6;
}
</style>
