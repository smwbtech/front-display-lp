<template lang="html">
	<section class="features-block">
		<!-- Порты -->
		<TechnicalFeatureItem
			:transitionName="'top'"
			:bg="'rgba(0, 149, 218, 0.2)'"
			:blockName="'showPorts'"
			:delay="600"
			@observed="blockObservedHandler"
		>
			<TechnicalFeaturePorts :show="showPorts" />
		</TechnicalFeatureItem>
		<!-- Сенсорный дисплей -->
		<TechnicalFeatureItem
			:transitionName="'bottom'"
			:bg="'rgba(0, 149, 218, 0.6)'"
			:blockName="'showTouch'"
			:delay="3600"
			@observed="blockObservedHandler"
		>
			<TechnicalFeatureTouch :show="showTouch" />
		</TechnicalFeatureItem>
		<TechnicalFeatureItem
			:transitionName="'top'"
			:bg="'rgba(0, 149, 218, 1)'"
		/>
	</section>
</template>

<script>
import TechnicalFeatureItem from '@/components/technical_features/TechnicalFeatureItem.vue'
import TechnicalFeaturePorts from '@/components/technical_features/TechnicalFeaturePorts.vue'
import TechnicalFeatureTouch from '@/components/technical_features/TechnicalFeatureTouch.vue'

export default {
	components: {
		TechnicalFeatureItem,
		TechnicalFeaturePorts,
		TechnicalFeatureTouch
	},

	data() {
		return {
			showPorts: false,
			showTouch: false
		}
	},

	methods: {
		blockObservedHandler(data) {
			console.log(data)
			setTimeout(() => (this[data.name] = true), data.delay)
		}
	}
}
</script>

<style lang="css" scoped>

.features-block {
    min-height: 100vh;
    position: relative;
    display: flex;
    overflow: hidden;

    &:before,
    &:after {
        position: absolute;
        z-index: 10;
        left: 0;
        content: "";
        display: block;
        height: 97px;
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url('/img/decore.png');
    }

    &:before {
        top: 0px;
    }

    &:after {
        bottom: 0px;
        transform: rotate(180deg);
    }
}

/* Верстка для мобильных */
@media (320px <= width < 1024px) {
	.features-block  {
		flex-flow: column;
	}
}
</style>
