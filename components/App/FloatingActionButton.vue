<template>
	<v-slide-x-transition>
		<v-btn
			v-show="fabBtn"
			id="appFab"
			:aria-label="$t('Navigation Drawer')"
			fab
			elevation="12"
			color="primary"
			class="ma-6 font-pacifico"
			:style="{
				left: $vuetify.breakpoint.mobile ? 'unset' : '0',
				right: $vuetify.breakpoint.mobile ? '0' : 'unset',
				top: $vuetify.breakpoint.mobile ? 'unset' : '0',
				bottom: $vuetify.breakpoint.mobile ? '0' : 'unset',
			}"
			@click="openAppDrawer"
		>
			Nav
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
