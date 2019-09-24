<template lang="html">
	<section class="features-block">
		<TechnicalFeatureItem
			:show="isObserved"
			:bg="'rgba(0, 149, 218, 0.2)'"
		/>
		<TechnicalFeatureItem
			:show="isObserved"
			:bg="'rgba(0, 149, 218, 0.6)'"
		/>
		<TechnicalFeatureItem :show="isObserved" :bg="'rgba(0, 149, 218, 1)'" />
	</section>
</template>

<script>
import TechnicalFeatureItem from '@/components/technical_features/TechnicalFeatureItem.vue'

export default {
	components: {
		TechnicalFeatureItem
	},

	data() {
		return {
			isObserved: false
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

.features-block {
    min-height: 100vh;
    position: relative;
    padding: 50px 0px;
    display: flex;
    overflow: hidden;

    &:before,
    &:after {
        position: absolute;
        left: 0;
        content: "";
        display: block;
        height: 80px;
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url('/img/decore.png');
    }

    &:before {
        top: -6px;
    }

    &:after {
        bottom: -6px;
        transform: rotate(180deg);
    }
}
</style>
