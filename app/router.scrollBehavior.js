import goTo from 'vuetify/lib/services/goto'

export default (to, from, savedPosition) => {
	const target = to.hash || 0
	const offset = target === 0 ? 0 : 24

	return new Promise((resolve) => {
		resolve(goTo(target, { offset }))
	})
}
