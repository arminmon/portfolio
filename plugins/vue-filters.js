import Vue from 'vue'

const formatDate = (value, format) => {
	const fallback = {
		year: 'numeric',
		month: 'long',
	}
	const date = new Date(value)
	let string = date.toLocaleDateString('en-gb', { ...fallback, ...format })
	const now = new Date()
	if (date > now) string = `expected ${string}`

	return string
}

Vue.filter('formatDate', formatDate)
