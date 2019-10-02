const postcssCalc = require('postcss-calc')

module.exports = {
	mode: 'universal',
	server: {
		port: 3005
	},
	/*
	 ** Headers of the page
	 */
	head: {
		title: 'Промышленные мониторы Front Display',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content:
					'Промышленные мониторы Front Display DNA-17 и DNA-19 российского производства. Собственная торговая марка компании "Ниеншанц-Автоматика"'
			},
			{
				hid: 'keywords',
				name: 'keywords',
				content:
					'промышленный монитор, защищенный монитор, российский монитор, промышленный монитор 17, промышленный монитор 19, сенсорный промышленный монитор'
			},
			{
				hid: 'yandex-verification',
				name: 'yandex-verification',
				content: 'cc4966782a9065a8'
			}
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		script: [
			{
				src:
					'https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver'
			}
		]
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
		{ src: '~plugins/smooth-scroll.js', ssr: false },
		{ src: '~/plugins/vue-scroll.js', ssr: false }
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/eslint-module',
		'nuxt-svg-loader',
		[
			'@nuxtjs/yandex-metrika',
			{
				id: '55589356',
				webvisor: true,
				clickmap: true,
				useCDN: false,
				trackLinks: true,
				accurateTrackBounce: true
			}
		]
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
		transpile: ['vue-particles', 'vue-svg-loader'],
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
				},
				insertAfter: {
					'custom-properties': postcssCalc
				}
			}
		},
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {
			const svgRule = config.module.rules.find((rule) =>
				rule.test.test('.svg')
			)
			svgRule.test = /\.(png|jpe?g|gif|webp)$/
			config.module.rules.push({
				test: /\.svg$/,
				use: 'babel-loader',
				oneOf: [
					{
						resourceQuery: /inline/, // foo.svg?inline
						loader: 'vue-svg-loader',
						options: {
							svgo: {
								plugins: [
									{ removeDoctype: true },
									{ removeComments: true },
									{ removeViewBox: false }
								]
							}
						}
					},
					{
						loader: 'url-loader',
						options: {
							limit: 1000, // 1KO
							name: 'img/[name].[hash:7].[ext]'
						}
					}
				],
				exclude: /(node_modules)/
			})

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
