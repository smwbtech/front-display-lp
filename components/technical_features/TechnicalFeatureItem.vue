<template lang="html">
	<div class="feature-item">
		<slot />
		<div
			:class="[
				'feature-item__background',
				`${transitionName}`,
				isObserved ? 'active' : ''
			]"
			:style="styleObj"
		/>
	</div>
</template>

<script>
export default {
	props: {
		bg: {
			type: String
		},
		transitionName: {
			type: String
		},
		blockName: {
			type: String
		},
		delay: {
			type: Number
		}
	},

	data() {
		return {
			isObserved: false
		}
	},

	computed: {
		styleObj() {
			return {
				backgroundColor: this.bg
			}
		}
	},

	mounted() {
		// После того, как компонент был монтирован, мониторим его попадание во вьюпорт
		this.observeScroll(this.$el)
	},

	methods: {
		/**
		 * Отслеживаем, когда последний элемент
		 *
		 * @param  {Object} el - последний элемент текущего списка
		 * @return {undefined}
		 */
		observeScroll(el) {
			const options = {
				threshold: 0.7
			}

			const callback = (entries, observer) => {
				for (const entry of entries) {
					const { isIntersecting } = entry
					if (isIntersecting) {
						this.isObserved = true
						const delay = window.innerWidth < 1024 ? 0 : this.delay
						this.$emit('observed', {
							name: this.blockName,
							delay
						})
						observer.disconnect()
					}
				}
			}
			const observer = new IntersectionObserver(callback, options)
			observer.observe(el)
		}
	}
}
</script>

<style lang="css" scoped>
.feature-item {
    position: relative;
    z-index: 9;
    min-width: 33.4%;
    min-height: 100%;

    & .feature-item__background {
		position: absolute;
		z-index: 25;
		top: 0;
		width: 100%;
        height: 100%;
        transition: transform .6s ease-out;

        &.bottom {
            transform: translateY(100%);
        }

        &.top {
            transform: translateY(-100%);
        }

        &.active {
            transform: translateY(0%);
        }
    }

}

.top-enter-active,
.bottom-enter-active {
    transition: transform .4s ease-out;
}

/* Верстка для мобильных */
@media (320px <= width < 1024px) {
	.feature-item  {
		width: 100%;
		height: 80vh;

		& .feature-item__background {
			&.bottom {
				transform: translateY(0%);
				transform: translateX(100%);
			}
			&.top {
				transform: translateY(0);
				transform: translateX(-100%);
			}
			&.active {
				transform: translateX(0%);
			}
		}
	}
}

@media (320px <= width < 1024px) and (orientation: landscape) {
	.feature-item  {
		width: 100%;
		height: 140vh;

		/* & .feature-item__background {
			&.bottom {
				transform: translateY(0%);
				transform: translateX(100%);
			}
			&.top {
				transform: translateY(0);
				transform: translateX(-100%);
			}
			&.active {
				transform: translateX(0%);
			}
		} */
	}
}
</style>
