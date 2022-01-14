import { Plugin } from '@nuxt/types'
import { parseToHsla, hsla, hasBadContrast } from 'color2k'

const colour = {
	setLightness: (hex: string, lightness: number) => {
		const [hue, saturation] = parseToHsla(hex)

		return hsla(hue, saturation, lightness, 1)
	},
	isReadableInBlack: (color: string) => hasBadContrast(color, 'readable'),
}

declare module 'vue/types/vue' {
	interface Vue {
		$colour: typeof colour
	}
}

declare module '@nuxt/types' {
	interface NuxtAppOptions {
		$colour: typeof colour
	}
	interface Context {
		$colour: typeof colour
	}
}

const colourPlugin: Plugin = (_context, inject) => {
	inject('colour', colour)
}

export default colourPlugin
