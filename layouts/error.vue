<template>
	<v-app>
		<v-container>
			<v-row align="center" justify="center">
				<v-col class="shrink">
					<v-card>
						<v-card-title>{{ error.statusCode }}</v-card-title>
						<v-card-text>
							<pre>{{ error }}</pre>
						</v-card-text>
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
			title: this.error.statusCode,
		}
	},
}
</script>
