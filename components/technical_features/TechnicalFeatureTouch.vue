<template>
	<!-- Комплнент потов -->
	<div class="image">
		<!-- Дисплей -->
		<transition name="title">
			<h2 v-show="moveImages" class="title">Сенсорный экран</h2>
		</transition>
		<div class="display-wrapper">
			<transition name="display" type="transition" mode="out-in">
				<img
					v-show="showDevice"
					src="/img/technical-features/display_touch.png"
					alt
					class="device"
				/>
			</transition>
			<!-- Картинки на экране -->
			<transition name="images" type="transition" mode="out-in">
				<img
					v-show="deviceIsAnimated"
					src="/img/technical-features/touch_images.jpg"
					alt
					:class="['images__item', moveImages ? 'move' : '']"
				/>
			</transition>
		</div>
		<!-- Рука -->
		<transition name="hand" type="animation" mode="out-in">
			<img
				v-show="showHand"
				src="/img/technical-features/hand.png"
				alt
				:class="['hand', !handIsAnimated ? 'hidden' : '']"
				@animationend="handIsAnimated = true"
			/>
		</transition>
	</div>
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
			showDevice: false,
			showHand: false,
			handIsAnimated: false,
			deviceIsAnimated: false,
			imageIsTransitionend: false
		}
	},

	computed: {
		moveImages() {
			return this.imageIsTransitionend
		}
	},

	watch: {
		show(val, oldVal) {
			if (val) {
				this.animate()
			}
		}
	},

	methods: {
		animate() {
			this.showDevice = true
			this.showHand = true
			setTimeout(() => {
				this.deviceIsAnimated = true
			}, 700)
			setTimeout(() => {
				this.imageIsTransitionend = true
			}, 1100)
		}
	}
}
</script>

<style lang="css" scoped>

/* Переходы появления */
.image {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 149, 218, 0);
    height: 100%;
    overflow: hidden;

	& .title {
		position: absolute;
		z-index: 102;
		top: 20%;
		width: 100%;
		text-align: center;
		letter-spacing: 5px;
	}

	& .display-wrapper {
		position: relative;
		width: 90%;
		overflow: hidden;

		& .device {
			position: relative;
			width: 100%;
			z-index: 101;
		}

		& .images__item {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 100;
			width: 200%;
			height: 97%;
			border-radius: 5px;
			overflow: hidden;
			transform: translateX(-50%);
			transition: transform 2s ease-out .4s;

			&.images-enter {
				opacity: 0;
			}

			&.images-enter-active {
				transition: opacity 0.4s ease-in;
			}

			&.move {
				transition: transform 2s ease-out .7s;
				transform: translateX(0%);
			}
		}
	}

    & .hand {
        z-index: 103;
        position: absolute;
        bottom: 0;
		left: 30%;
		width: 40%;

        &.hidden {
            opacity: 0;
            transform: translateY(50%) translateX(0);
        }
    }
}

/* Дисплей */
.display-enter {
transform: scale(0);
opacity: 0;
}

.display-enter-active {
transition: transform 0.7s ease-in, opacity .7s ease-out;
}

/* Рука */

.hand-enter-active {
animation: hand 2s linear forwards;
animation-delay: 0.7s;
}

.title-enter {
	opacity: 0;
	transform: translateX(-100%);
}

.title-enter-active {
	transition: transform 2s ease-out, opacity .7s ease-in;
}

/* Картинки */

@keyframes hand {
0% {
opacity: 1;
transform: translateY(50%) translateX(0);
}

50% {
opacity: 1;
transform: translateY(0%) translateX(0);
}

75% {
opacity: 1;
transform: translateY(0%) translateX(60px);
}

100% {
opacity: 1;
transform: translateY(0%) translateX(0);
}
}

@media (width: 1680px), (width: 1440px) {

	.image {
		& .hand {
			width: 45%;
			bottom: 3%;
		}
	}
}

@media (width: 1024px) {

	.image {
		& .hand {
			width: 45%;
			bottom: 10%;
		}
	}
}

/* Мобильные устройства */
@media ( 320px <= width < 1024px) {
	.image {
		& .title {
			top: 20px;
			font-size: .8em;
		}
	}
}
</style>
