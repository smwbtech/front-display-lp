<template>
	<!-- Комплнент потов -->
	<transition name="images-appear" type="transition" mode="out-in">
		<div v-if="show" class="images">
			<transition name="title">
				<h2 v-show="isTransitionend" class="title">
					Кастомизация управления
				</h2>
			</transition>
			<!-- Передняя сторона -->
			<picture>
				<source
					media="(min-width: 1600px)"
					srcset="/img/technical-features/front_large_desktop.png"
				/>
				<source
					media="(min-width: 1201px)"
					srcset="/img/technical-features/front_mid_desktop.png"
				/>
				<source
					media="(min-width: 320px)"
					srcset="/img/technical-features/front_mobile.png"
				/>
				<img
					src="/img/technical-features/front.jpg"
					alt
					:class="[
						'image__item',
						'front',
						isTransitionend ? 'move' : ''
					]"
				/>
			</picture>
			<!-- Управление  -->
			<picture>
				<source
					media="(min-width: 1600px)"
					srcset="/img/technical-features/controlls_large_desktop.png"
				/>
				<source
					media="(min-width: 1201px)"
					srcset="/img/technical-features/controlls_mid_desktop.png"
				/>
				<source
					media="(min-width: 320px)"
					srcset="/img/technical-features/controlls_mobile.png"
				/>
				<img
					src="/img/technical-features/controlls.png"
					:class="['controlls_image', isTransitionend ? 'move' : '']"
					alt
				/>
			</picture>
			<!-- Тыльная сторона -->
			<picture>
				<source
					media="(min-width: 1600px)"
					srcset="/img/technical-features/back_large_desktop.png"
				/>
				<source
					media="(min-width: 1201px)"
					srcset="/img/technical-features/back_mid_desktop.png"
				/>
				<source
					media="(min-width: 320px)"
					srcset="/img/technical-features/back_mobile.png"
				/>
				<img
					src="/img/technical-features/back.jpg"
					alt
					:class="[
						'image__item',
						'back',
						isTransitionend ? 'move' : ''
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
			isTransitionend: false
		}
	},

	watch: {
		show(val, oldVal) {
			if (val) setTimeout(() => (this.isTransitionend = true), 2000)
		}
	}
}
</script>

<style media="screen">
.images {
	position: relative;
	z-index: 102;
	height: 100%;
	width: 100%;

	& .title {
		position: absolute;
		z-index: 102;
		bottom: 10%;
		width: 100%;
		text-align: center;
		letter-spacing: 5px;
	}

	& .controlls_image {
		position: absolute;
		bottom: calc(50% - (549px / 2) + 13px);
		right: 89px;
		z-index: 105;
		box-shadow: 0px 0px 19px rgba(255, 255, 255, 0.8);
		transition: all 1s ease-out;
		transition-delay: 3s;

		&.move {
			bottom: calc(50% - (549px / 2) + 75px);
			right: 308px;
		}
	}

	& .image__item {
		position: absolute;
		z-index: 102;

		&.front,
		&.back {
			top: calc(50% - (549px / 2));
			right: 0;
			opacity: 0;
		}

		&.front {
			opacity: 1;
			transform: translateY(0px);
			transition: opacity 0.3s ease-in, transform 0.3s ease-out;
			transition-delay: 2.7s;

			&.move {
				opacity: 0;
				transform: translateY(40px);
			}
		}

		&.back {
			opacity: 0;
			transform: translateY(-40px);
			transition: opacity 0.3s ease-in, transform 0.3s ease-out;
			transition-delay: 3s;

			&.move {
				opacity: 1;
				transform: translateY(0px);
			}
		}
	}
}

/* Переходы появления */

.images-appear-enter {
	opacity: 0;
	transform: translateY(-40px);
}

.images-appear-enter-active {
	transition: opacity 0.7s ease-in, transform 0.7s ease-out;
}

@media (1200px < width < 1600px) {
	.images {
		& .controlls_image {
			bottom: calc(50% - (400px / 2) + 10px);
			right: 69px;

			&.move {
				bottom: calc(50% - (400px / 2) + 50px);
				right: 224px;
			}
		}
		& .image__item {
			&.front,
			&.back {
				top: calc(50% - (400px / 2));
				right: 0;
			}
		}
	}
}

/* Мобильные устройства */
@media (320px <= width < 1024px), (1024px <= width <= 1200px) {
	.images {
		& .controlls_image {
			bottom: calc(50% - (400px / 2) + 46px);
			right: 49px;

			&.move {
				bottom: calc(50% - (400px / 2) + 80px);
				right: 160px;
			}
		}

		& .image__item {
			&.front,
			&.back {
				top: calc(50% - (320px / 2));
				right: -20px;
			}
		}
	}
}

@media (320px <= width < 1024px) {
	.images {
		& .title {
			font-size: 0.8em;
			top: 10px;
		}
	}
}

.title-enter {
	opacity: 0;
	transform: translateY(-30px);
}

.title-enter-active {
	transition: opacity 0.3s ease-in, transform 0.3s ease-out;
}
</style>
