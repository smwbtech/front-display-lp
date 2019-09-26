<template>
	<!-- Комплнент потов -->
	<div class="image">
		<!-- Дисплей -->
		<div class="display-wrapper">
			<transition name="display" type="transition" mode="out-in">
				<img
					v-show="showDevice"
					src="/img/technical-features/display_touch.png"
					alt
					class="device"
					@transitionend="transitionHanler('deviceIsAnimated')"
				/>
			</transition>
			<!-- Картинки на экране -->
			<transition name="images" type="transition" mode="out-in">
				<img
					v-show="deviceIsAnimated"
					src="/img/technical-features/touch_images.jpg"
					alt
					:class="['images__item', moveImages ? 'move' : '']"
					@transitionend="transitionHanler('imageIsTransitionend')"
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
				@animationend="transitionHanler('handIsAnimated')"
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
		},

		transitionHanler(prop) {
			this[prop] = true
			// Не срабатывает transitionend на .imgaes__item
			if (prop === 'deviceIsAnimated') {
				setTimeout(() => (this.imageIsTransitionend = true), 700)
			}
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
				transform: translateX(0%);
			}
		}
	}

    & .hand {
        z-index: 103;
        position: absolute;
        bottom: 0;
		width: 40%;

        &.hidden {
            opacity: 0;
            transform: translateY(50%) translateX(0);
        }
    }
}

/* Дисплей */
.display-enter {
transform: translateX(80%);
}

.display-enter-active {
transition: transform 0.7s ease-in;
}

/* Рука */

.hand-enter-active {
animation: hand 2s linear forwards;
animation-delay: 0.7s;
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
</style>
