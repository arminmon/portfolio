<template>
	<v-footer app absolute>
		<v-container class="pt-12 pb-16 pb-sm-12">
			<v-row
				:aria-label="buildingBlocksDescription"
				dense
				justify="center"
				align="center"
			>
				<v-col cols="auto">
					<v-tooltip top>
						<template #activator="{ on, attrs }">
							<v-btn
								v-bind="attrs"
								x-small
								class="text-caption text-lowercase"
								plain
								href="https://github.com/arminmon/portfolio"
								target="_blank"
								v-on="on"
							>
								this
							</v-btn>
						</template>
						<span>{{ $t('Source Code') }}</span>
					</v-tooltip>
				</v-col>
				<v-col cols="auto">
					<v-btn tag="span" icon x-small disabled aria-hidden="true">
						<v-icon x-small>$icon.equal</v-icon>
					</v-btn>
				</v-col>
				<template v-for="(block, index) in blocks">
					<v-col v-if="index !== 0" :key="`${block.title}-plus`" cols="auto">
						<v-btn tag="span" icon x-small disabled aria-hidden="true">
							<v-icon x-small>$icon.plus</v-icon>
						</v-btn>
					</v-col>
					<v-col :key="block.title" cols="auto">
						<v-tooltip top>
							<template #activator="{ on, attrs }">
								<v-btn
									v-bind="attrs"
									icon
									plain
									target="_blank"
									:href="block.href"
									v-on="on"
								>
									<v-icon>
										{{ block.icon }}
									</v-icon>
								</v-btn>
							</template>
							<span>{{ block.title }}</span>
						</v-tooltip>
					</v-col>
				</template>
			</v-row>
			<v-divider class="my-12" />
			<v-row justify="space-around">
				<v-col cols="12" md="4">
					<v-subheader class="text-caption">
						{{ $t('on this page') }}
					</v-subheader>
					<v-list nav dense color="transparent">
						<v-list-item
							v-for="(navLink, index) in navLinks"
							:key="`footer-navLink-${index}`"
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
				</v-col>
				<v-col cols="12" md="4">
					<v-subheader class="text-caption">
						{{ $t('externals') }}
					</v-subheader>
					<v-list nav dense color="transparent">
						<v-list-item
							v-for="(socialLink, index) in socialLinks"
							:key="`footer-socialLink-${index}`"
							target="_blank"
							:href="socialLink.href"
						>
							<v-list-item-icon>
								<v-icon :color="socialLink.color">{{ socialLink.icon }}</v-icon>
							</v-list-item-icon>
							<v-list-item-content>
								<v-list-item-title>{{ socialLink.title }}</v-list-item-title>
							</v-list-item-content>
							<v-list-item-icon class="align-center">
								<v-icon small> $icon.external_link </v-icon>
							</v-list-item-icon>
						</v-list-item>
					</v-list>
				</v-col>
				<v-col cols="12" md="4">
					<v-subheader class="text-caption">
						{{ $t('get in touch') }}
					</v-subheader>
					<v-text-field v-model="email" :label="$t('E-mail')" readonly>
						<template #append>
							<v-tooltip
								top
								:color="
									copyEmailToClipboardLabelText === 'Copied!'
										? 'success'
										: undefined
								"
							>
								<template #activator="{ on, attrs }">
									<v-btn
										v-bind="attrs"
										icon
										v-on="on"
										@click="copyEmailToClipboard"
									>
										<v-icon>$icon.copy</v-icon>
									</v-btn>
								</template>
								<span>{{ $t(copyEmailToClipboardLabelText) }}</span>
							</v-tooltip>
						</template>
					</v-text-field>
				</v-col>
			</v-row>
		</v-container>
	</v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import buildingBlocks from '~/content/app/building-blocks.json'
import socialLinks from '~/content/socials.json'
import type { NavLink } from '~/types/elements'
import type { BuildingBlock, SocialLink } from '~/types/content'

@Component
export default class AppFooter extends Vue {
	blocks: BuildingBlock[] = buildingBlocks
	email: string = socialLinks.find((item) => item.slug === 'email')!.title
	copyEmailToClipboardLabelText: string = 'Copy '
	copyToClipboardLabelText: string = 'Copy'
	socialLinks: SocialLink[] = socialLinks.filter(
		(item) => item.slug !== 'email'
	)

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
			to: '/#professional_memberships',
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

	get buildingBlocksDescription(): string {
		const listFormat = new (Intl as any).ListFormat('en', {
			style: 'long',
			type: 'conjunction',
		})
		const blocksList = listFormat.format(
			this.blocks.map((block) => block.title)
		)

		return `This website is built with ${blocksList}`
	}

	copyEmailToClipboard() {
		navigator.clipboard.writeText(this.email)
		this.copyEmailToClipboardLabelText = 'Copied!'
		setTimeout(() => {
			this.copyEmailToClipboardLabelText = this.copyToClipboardLabelText
		}, 1000)
	}
}
</script>
