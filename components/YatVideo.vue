<template>
	<v-tooltip
		top
		:color="copyYatToClipboardLabelText === 'Copied!' ? 'success' : undefined"
	>
		<template #activator="{ on, attrs }">
			<v-card
				v-bind="attrs"
				class="yat-video"
				elevation="6"
				v-on="on"
				@click="copyYatToClipboard"
			>
				<v-responsive aspect-ratio="1">
					<video autoplay muted loop class="video-player">
						<source src="/videos/visualised-yat.mp4" type="video/mp4" />
					</video>
				</v-responsive>
			</v-card>
		</template>
		<span>{{ copyYatToClipboardLabelText }}</span>
	</v-tooltip>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class AppFloatingActionButton extends Vue {
	yatEmojis = '🐙🕸️🐋🦀'
	copyYatToClipboardLabelText = '🐙🕸️🐋🦀'

	copyYatToClipboard() {
		navigator.clipboard.writeText(this.yatEmojis)
		this.copyYatToClipboardLabelText = 'Copied!'
		setTimeout(() => {
			this.copyYatToClipboardLabelText = this.yatEmojis
		}, 1000)
	}
}
</script>

<style scoped>
.yat-video {
	overflow: hidden;
	transform: translateZ(0);
}

.video-player {
	height: 100%;
	max-height: 100%;
	max-width: 100%;
	position: absolute;
	width: 100%;
}
</style>
