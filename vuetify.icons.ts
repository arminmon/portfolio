import SvgPath from 'svgpath'

import {
	mdiApi,
	mdiChevronUp,
	mdiConsole,
	mdiContentCopy,
	mdiDatabase,
	mdiDomain,
	mdiDotsVertical,
	mdiEmail,
	mdiEqual,
	mdiHandshake,
	mdiHomeAssistant,
	mdiHuman,
	mdiHumanGreeting,
	mdiLightbulb,
	mdiLightbulbOutline,
	mdiLinkVariant,
	mdiOpenInNew,
	mdiPencilRuler,
	mdiPlus,
	mdiSchool,
	mdiSortCalendarAscending,
	mdiSortCalendarDescending,
	mdiTea,
} from '@mdi/js'

import AffinityDesigner from 'simple-icons/icons/affinitydesigner'
import AffinityPhoto from 'simple-icons/icons/affinityphoto'
import Angular from 'simple-icons/icons/angular'
import AppleIos from 'simple-icons/icons/ios'
import AppleMacos from 'simple-icons/icons/macos'
import AWS from 'simple-icons/icons/amazonaws'
import AWSS3 from 'simple-icons/icons/amazons3'
import Bootstrap from 'simple-icons/icons/bootstrap'
import Bulma from 'simple-icons/icons/bulma'
import CoffeeScript from 'simple-icons/icons/coffeescript'
import Confluence from 'simple-icons/icons/confluence'
import CSS3 from 'simple-icons/icons/css3'
import Cypress from 'simple-icons/icons/cypress'
import Dribbble from 'simple-icons/icons/dribbble'
import ElementaryOS from 'simple-icons/icons/elementary'
import Eslint from 'simple-icons/icons/eslint'
import Express from 'simple-icons/icons/express'
import Fastify from 'simple-icons/icons/fastify'
import Figma from 'simple-icons/icons/figma'
import Git from 'simple-icons/icons/git'
import Github from 'simple-icons/icons/github'
import GithubActions from 'simple-icons/icons/githubactions'
import Heroku from 'simple-icons/icons/heroku'
import HTML5 from 'simple-icons/icons/html5'
import iTerm2 from 'simple-icons/icons/iterm2'
import JAMStack from 'simple-icons/icons/jamstack'
import Jasmine from 'simple-icons/icons/jasmine'
import JavaScript from 'simple-icons/icons/javascript'
import Jest from 'simple-icons/icons/jest'
import Jira from 'simple-icons/icons/jira'
import JWT from 'simple-icons/icons/jsonwebtokens'
import Linkedin from 'simple-icons/icons/linkedin'
import Markdown from 'simple-icons/icons/markdown'
import MaterialDesign from 'simple-icons/icons/materialdesign'
import MaterialDesignIcons from 'simple-icons/icons/materialdesignicons'
import Miro from 'simple-icons/icons/miro'
import MySQL from 'simple-icons/icons/mysql'
import Netlify from 'simple-icons/icons/netlify'
import NextJS from 'simple-icons/icons/nextdotjs'
import NodeJS from 'simple-icons/icons/nodedotjs'
import NounProject from 'simple-icons/icons/nounproject'
import NuxtJS from 'simple-icons/icons/nuxtdotjs'
import PostCss from 'simple-icons/icons/postcss'
import PostgreSQL from 'simple-icons/icons/postgresql'
import Prettier from 'simple-icons/icons/prettier'
import Pug from 'simple-icons/icons/pug'
import React from 'simple-icons/icons/react'
import Sass from 'simple-icons/icons/sass'
import Sharp from 'simple-icons/icons/sharp'
import SimpleIcons from 'simple-icons/icons/simpleicons'
import Slack from 'simple-icons/icons/slack'
import SourcetreeIcon from 'simple-icons/icons/sourcetree'
import Stylelint from 'simple-icons/icons/stylelint'
import SVG from 'simple-icons/icons/svg'
import TailwindCSS from 'simple-icons/icons/tailwindcss'
import Trello from 'simple-icons/icons/trello'
import Twitter from 'simple-icons/icons/twitter'
import TypeScript from 'simple-icons/icons/typescript'
import Ubuntu from 'simple-icons/icons/ubuntu'
import UIKit from 'simple-icons/icons/uikit'
import Vercel from 'simple-icons/icons/vercel'
import VSCode from 'simple-icons/icons/visualstudiocode'
import VueJS from 'simple-icons/icons/vuedotjs'
import Vuetify from 'simple-icons/icons/vuetify'
import WindiCSS from 'simple-icons/icons/windicss'
import Windows from 'simple-icons/icons/windows'
import Yarn from 'simple-icons/icons/yarn'

import adonisJS from '~/assets/icons/adonisJS'
import axios from '~/assets/icons/axios'
import crayon from '~/assets/icons/crayon'
import knexJS from '~/assets/icons/knexJS'
import surge from '~/assets/icons/surge'

declare interface IconValues {
	[key: string]: string
}

const materialDesignIcons: IconValues = {
	api: mdiApi,
	chevron_up: mdiChevronUp,
	console: mdiConsole,
	copy: mdiContentCopy,
	database: mdiDatabase,
	domain: mdiDomain,
	dots_vertical: mdiDotsVertical,
	email: mdiEmail,
	equal: mdiEqual,
	external_link: mdiOpenInNew,
	handshake: mdiHandshake,
	home: mdiHomeAssistant,
	human_greeting: mdiHumanGreeting,
	human: mdiHuman,
	lightbulb_off: mdiLightbulbOutline,
	lightbulb_on: mdiLightbulb,
	link: mdiLinkVariant,
	pencil_ruler: mdiPencilRuler,
	plus: mdiPlus,
	school: mdiSchool,
	sort_calendar_asc: mdiSortCalendarAscending,
	sort_calendar_desc: mdiSortCalendarDescending,
	tea: mdiTea,
}

const simpleIcons: IconValues = {
	affinity_designer: AffinityDesigner.path,
	affinity_photo: AffinityPhoto.path,
	angular: Angular.path,
	apple_ios: AppleIos.path,
	apple_macos: AppleMacos.path,
	aws_s3: AWSS3.path,
	aws: AWS.path,
	bootstrap: Bootstrap.path,
	bulma: Bulma.path,
	coffeescript: CoffeeScript.path,
	confluence: Confluence.path,
	css3: CSS3.path,
	cypress: Cypress.path,
	dribbble: Dribbble.path,
	elementary_os: ElementaryOS.path,
	eslint: Eslint.path,
	express_js: Express.path,
	fastify: Fastify.path,
	figma: Figma.path,
	git: Git.path,
	github_actions: GithubActions.path,
	github: Github.path,
	heroku: Heroku.path,
	html5: HTML5.path,
	iterm2: iTerm2.path,
	jamstack: JAMStack.path,
	jasmine: Jasmine.path,
	javascript: JavaScript.path,
	jest: Jest.path,
	jira: Jira.path,
	jwt: JWT.path,
	linkedin: Linkedin.path,
	markdown: Markdown.path,
	material_design_icons: MaterialDesignIcons.path,
	material_design: MaterialDesign.path,
	miro: Miro.path,
	ms_windows: Windows.path,
	mysql: MySQL.path,
	netlify: Netlify.path,
	next_js: NextJS.path,
	node_js: NodeJS.path,
	noun_project: NounProject.path,
	nuxt: NuxtJS.path,
	postcss: PostCss.path,
	postgresql: PostgreSQL.path,
	prettier: Prettier.path,
	pug: Pug.path,
	react: React.path,
	sass: Sass.path,
	sharp: Sharp.path,
	simple_icons: SimpleIcons.path,
	slack: Slack.path,
	sourcetree: SourcetreeIcon.path,
	stylelint: Stylelint.path,
	svg: SVG.path,
	tailwind_css: TailwindCSS.path,
	trello: Trello.path,
	twitter: Twitter.path,
	typescript: TypeScript.path,
	ubuntu: Ubuntu.path,
	uikit: UIKit.path,
	vercel: Vercel.path,
	vscode: VSCode.path,
	vue_js: VueJS.path,
	vuetify: Vuetify.path,
	windi_css: WindiCSS.path,
	yarn: Yarn.path,
}

const customIcons: IconValues = {
	adonis_js: adonisJS,
	axios,
	crayon,
	knex_js: knexJS,
	surge,
}

// Transform Simple Icons to align with MDI principles
Object.keys(simpleIcons).forEach((key) => {
	simpleIcons[key] = SvgPath(simpleIcons[key])
		.scale(18 / 24)
		.translate(3, 3)
		.rel()
		.round(1)
		.toString()
})

// Transform custom Icons to align with MDI principles
Object.keys(customIcons).forEach((key) => {
	customIcons[key] = SvgPath(customIcons[key])
		.scale(18 / 24)
		.translate(3, 3)
		.rel()
		.round(1)
		.toString()
})

const values: IconValues = {
	...materialDesignIcons,
	...simpleIcons,
	...customIcons,
}

export default values

const iconNames = Object.keys(values).map((key) => `$icon.${key}`)
export type IconName = typeof iconNames[number]
