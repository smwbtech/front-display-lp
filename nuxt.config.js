module.exports = {
	mode: 'universal',
	/*
	 ** Headers of the page
	 */
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || ''
			}
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#fff' },
	/*
	 ** Global CSS
	 */
	css: [
		'node_modules/normalize.css/normalize.css',
		'@/assets/css/fonts.css',
		'@/assets/css/common.css'
	],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		{ src: '@/plugins/global-components.js' },
		{
			src: '@/plugins/vue-particles',
			ssr: false
		},
		{ src: '~plugins/smooth-scroll.js', ssr: false }
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/eslint-module'
	],
	/*
	 ** Axios module configuration
	 ** See https://axios.nuxtjs.org/options
	 */
	axios: {},
	/*
	 ** Build configuration
	 */
	build: {
		postcss: {
			// Add plugin names as key and arguments as value
			// Install them before as dependencies with npm or yarn
			plugins: {
				autoprefixer: {},
				'postcss-preset-env': {
					stage: 2,
					features: {
						'nesting-rules': true,
						'custom-properties': {
							preserve: false,
							importFrom: './assets/css/variables.css'
						}
					}
				}
			},
			preset: {
				// Change the postcss-preset-env settings
				autoprefixer: {
					grid: true
				}
			}
		},
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {
			if (ctx.dev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
					options: {
						fix: true
					}
				})
			}
		}
	}
}
