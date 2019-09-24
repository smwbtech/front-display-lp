<template lang="html">
	<section class="features-block">
		<TechnicalFeatureItem
			:transitionName="'top'"
			:bg="'rgba(0, 149, 218, 0.2)'"
		/>
		<TechnicalFeatureItem
			:transitionName="'bottom'"
			:bg="'rgba(0, 149, 218, 0.6)'"
		/>
		<TechnicalFeatureItem
			:transitionName="'top'"
			:bg="'rgba(0, 149, 218, 1)'"
		/>
	</section>
</template>

<script>
import TechnicalFeatureItem from '@/components/technical_features/TechnicalFeatureItem.vue'

export default {
	components: {
		TechnicalFeatureItem
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
