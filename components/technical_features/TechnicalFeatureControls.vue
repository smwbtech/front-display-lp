<template>
	<!-- Комплнент потов -->
	<transition name="images">
		<div
			v-show="show"
			class="images"
			@transitionend="IsTransitionend = true"
		>
			<!-- Передняя сторона -->
			<picture>
				<source
					media="(min-width: 1600px)"
					srcset="
							`img/technical-features/front_large_desktop.png`
						"
				/>
				<source
					media="(min-width: 1024px)"
					srcset="
							`img/technical-features/front_mid_desktop.png`
						"
				/>
				<source
					media="(min-width: 320px)"
					srcset="
							`img/technical-features/front_mobile.png`
						"
				/>
				<img
					src="/img/technical-features/front.jpg"
					alt
					:class="[
						'image__item',
						'front',
						IsTransitionend ? 'move' : ''
					]"
				/>
			</picture>
			<!-- Управление  -->
			<picture>
				<source
					media="(min-width: 1600px)"
					srcset="
							`img/technical-features/controlls_large_desktop.png`
						"
				/>
				<source
					media="(min-width: 1024px)"
					srcset="
							`img/technical-features/controlls_mid_desktop.png`
						"
				/>
				<source
					media="(min-width: 320px)"
					srcset="
							`img/technical-features/controlls_mobile.png`
						"
				/>
				<img
					src="/img/technical-features/controlls.png"
					:class="['controlls_image', IsTransitionend ? 'move' : '']"
					alt
				/>
			</picture>
			<!-- Тыльная сторона -->
			<!-- Управление  -->
			<picture>
				<source
					media="(min-width: 1600px)"
					srcset="
							`img/technical-features/back_large_desktop.png`
						"
				/>
				<source
					media="(min-width: 1024px)"
					srcset="
							`img/technical-features/back_mid_desktop.png`
						"
				/>
				<source
					media="(min-width: 320px)"
					srcset="
							`img/technical-features/back_mobile.png`
						"
				/>
				<img
					src="/img/technical-features/back.jpg"
					alt
					:class="[
						'image__item',
						'back',
						IsTransitionend ? 'move' : ''
					]"
				/>
			</picture>
		</div>
	</transition>
</template>

<script>
export default {
	props: {
		show: {
			type: Boolean
		}
	},

	data() {
		return {
			IsTransitionend: false
		}
	}
}
</script>
