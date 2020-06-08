
export default {
	mode: 'universal',
	head: {
		title: 'ARMINmon',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: "Armin Monirzadeh's Portfolio" }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	loading: { color: '#000' },

	css: ['~assets/base.scss'],

	build: {
		extend(config, ctx) {
		}
	}
}
