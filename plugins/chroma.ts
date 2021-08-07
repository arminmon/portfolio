import { Plugin } from '@nuxt/types'
import chroma from 'chroma-js'

declare module 'vue/types/vue' {
	interface Vue {
		$chroma: typeof chroma
	}
}

declare module '@nuxt/types' {
	interface NuxtAppOptions {
		$chroma: typeof chroma
	}
	interface Context {
		$chroma: typeof chroma
	}
}

const chromaPlugin: Plugin = (_context, inject) => {
	inject('chroma', chroma)
}

export default chromaPlugin
