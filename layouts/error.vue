<template>
	<v-app class="error">
		<v-container class="fill-height">
			<v-row align="center" justify="center">
				<v-col class="shrink">
					<v-card elevation="24">
						<v-card-title class="text-h1 font-weight-bold justify-center">
							{{ error.statusCode }}
						</v-card-title>
						<v-card-text dark>
							<pre>{{ error }}</pre>
						</v-card-text>
						<v-card-actions>
							<v-btn text block link href="/">
								<v-icon left>$icon.mdiHomeAssistant</v-icon>
								Home the root of all
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-app>
</template>

<script>
export default {
	layout: 'empty',
	props: {
		error: {
			type: Object,
			default: null,
		},
	},
	head() {
		return {
			title: this.error.statusCode || 500,
		}
	},
}
</script>
