import Vue from 'vue'

const formatDate = (value: string, options: Intl.DateTimeFormatOptions): string => {
	const defaultOptions: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
	}
	const date = new Date(value)
	let string = date.toLocaleDateString('en-gb', options || defaultOptions)
	const now = new Date()
	if (date > now) string = `expected ${string}`

	return string
}

Vue.filter('formatDate', formatDate)
