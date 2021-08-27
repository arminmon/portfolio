<template>
	<v-navigation-drawer
		id="appDrawer"
		v-model="drawer"
		app
		temporary
		floating
		width="320"
		color="primary"
		dark
		overlay-color="white"
		overlay-opacity="0.75"
		class="ma-6 rounded"
		:style="{
			top: $vuetify.breakpoint.mobile ? 'unset' : '0',
			bottom: $vuetify.breakpoint.mobile ? '0' : 'unset',
		}"
	>
		<v-toolbar flat dense color="transparent">
			<v-spacer />
			<v-tooltip right>
				<template #activator="{ on, attrs }">
					<v-btn v-bind="attrs" small plain icon v-on="on" @click="closeDrawer">
						<v-icon small>$icon.close</v-icon>
					</v-btn>
				</template>
				<span>{{ $t('$vuetify.close') }}</span>
			</v-tooltip>
		</v-toolbar>
		<v-list nav>
			<v-list-item
				v-for="navLink in navLinks"
				:key="navLink.title"
				:to="navLink.to"
			>
				<v-list-item-icon>
					<v-icon>{{ navLink.icon }}</v-icon>
				</v-list-item-icon>
				<v-list-item-content>
					<v-list-item-title>{{ navLink.title }}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
		<v-toolbar flat dense color="transparent"></v-toolbar>
	</v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Emit, On, Vue, Watch } from 'nuxt-property-decorator'
import type { NavLink } from '~/types/elements'

@Component
export default class AppDrawer extends Vue {
	drawer: boolean = false
	closeBtn: boolean = false
	navLinks: NavLink[] = [
		{
			title: 'Employment History',
			icon: '$icon.domain',
			to: '/#employment_history',
		},
		{
			title: 'Education History',
			icon: '$icon.school',
			to: '/#education_history',
		},
		{
			title: 'Professional Memberships',
			icon: '$icon.handshake',
			to: '/#membership_history',
		},
		{
			title: 'Technical Skillsets',
			icon: '$icon.pencil_ruler',
			to: '/#technical_skillsets',
		},
		{
			title: 'Soft Skills',
			icon: '$icon.human_greeting',
			to: '/#soft_skills',
		},
	]

	@Emit()
	drawerClosed(): void {}

	@Watch('drawer', { immediate: true })
	onDrawerToggled(value: boolean) {
		if (!value) this.drawerClosed()
	}

	@On('open-drawer')
	openDrawer(): void {
		this.drawer = true
	}

	closeDrawer(): void {
		this.drawer = false
	}
}
</script>

<style lang="scss" scoped>
#appDrawer {
	height: auto !important;
	max-height: calc(100vh - 48px);
}
</style>
