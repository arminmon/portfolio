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
		overlay-color="primary"
		overlay-opacity="0.5"
		class="ma-6 rounded"
		:style="{
			top: $vuetify.breakpoint.mobile ? 'unset' : '0',
			bottom: $vuetify.breakpoint.mobile ? '0' : 'unset',
			transform: drawer ? 'translateX(0)' : 'translateX(-125%)',
		}"
	>
		<v-toolbar flat dense color="transparent" class="px-2">
			<v-tooltip v-model="darkModeBtnTooltip" right>
				<template #activator="{ on, attrs }">
					<v-btn v-bind="attrs" small icon v-on="on" @click="toggleDarkMode">
						<v-icon small>
							{{ isDark ? '$icon.lightbulb_on' : '$icon.lightbulb_off' }}
						</v-icon>
					</v-btn>
				</template>
				<span>{{ $t(`Switch lights ${isDark ? 'on' : 'off'}`) }}</span>
			</v-tooltip>
			<v-spacer />
			<v-tooltip v-model="closeBtnTooltip" right>
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
	closeBtnTooltip: boolean = false
	darkModeBtnTooltip: boolean = false
	isDark: boolean = false
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

	@Watch('drawer')
	onDrawerToggled(value: boolean) {
		if (!value) this.drawerClosed()
	}

	@Watch('isDark')
	onIsDarkToggled(value: boolean) {
		this.$vuetify.theme.dark = value
	}

	@On('open-drawer')
	openDrawer(): void {
		this.drawer = true
	}

	toggleDarkMode(): void {
		this.isDark = !this.isDark
		this.closeDrawer()
	}

	closeDrawer(): void {
		this.drawer = false
		this.closeBtnTooltip = false
		this.darkModeBtnTooltip = false
	}
}
</script>

<style lang="scss" scoped>
#appDrawer {
	height: auto !important;
	max-height: calc(100vh - 48px);
}
</style>
