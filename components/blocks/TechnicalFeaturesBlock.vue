<template lang="html">
	<section class="technical-block">
		<!-- Порты -->
		<TechnicalFeatureItem
			:transitionName="'top'"
			:bg="'rgba(0, 149, 218, 0.2)'"
			:blockName="'showTouch'"
			:delay="600"
			@observed="blockObservedHandler"
		>
			<TechnicalFeatureTouch :show="showTouch" />
		</TechnicalFeatureItem>
		<!-- Сенсорный дисплей -->
		<TechnicalFeatureItem
			:transitionName="'bottom'"
			:bg="'rgba(0, 149, 218, 0.6)'"
			:blockName="'showPorts'"
			:delay="3600"
			@observed="blockObservedHandler"
		>
			<TechnicalFeaturePorts :show="showPorts" />
		</TechnicalFeatureItem>
		<TechnicalFeatureItem
			:transitionName="'top'"
			:bg="'rgba(0, 149, 218, 1)'"
			:blockName="'showControls'"
			:delay="5600"
			@observed="blockObservedHandler"
		>
			<TechnicalFeatureControls :show="showControls" />
		</TechnicalFeatureItem>
	</section>
</template>

<script>
import TechnicalFeatureItem from '@/components/technical_features/TechnicalFeatureItem.vue'
import TechnicalFeaturePorts from '@/components/technical_features/TechnicalFeaturePorts.vue'
import TechnicalFeatureTouch from '@/components/technical_features/TechnicalFeatureTouch.vue'
import TechnicalFeatureControls from '@/components/technical_features/TechnicalFeatureControls.vue'

export default {
	components: {
		TechnicalFeatureItem,
		TechnicalFeaturePorts,
		TechnicalFeatureTouch,
		TechnicalFeatureControls
	},

	data() {
		return {
			showPorts: false,
			showTouch: false,
			showControls: false
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

.technical-block {
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
        top: -1px;
    }

    &:after {
        bottom: -1px;
        transform: rotate(180deg);
    }
}

/* Верстка для мобильных */
@media (320px <= width < 1024px) {
	.technical-block  {
		flex-flow: column;
	}
}
</style>
