<template lang="html">
	<transition name="romb-appear" appear>
		<div v-show="showCondition" class="romb" :style="styleObj" />
	</transition>
</template>

<script>
export default {
	props: {
		showCondition: {
			type: Boolean,
			default: false
		},
		styleObj: {
			type: Object,
			default() {
				return {
					width: '100px',
					height: '100px'
				}
			}
		}
	}
}
</script>

<style lang="css" scoped>
.romb {
    position: absolute;
    z-index: 5;
    transform-origin: top center;
    transform: rotate(45deg)  translateX(0px);
    background-color: #0095da;
}

/* Анимации и переходы */

.romb-appear-enter,
.romb-appear-leave-to {
    opacity: 0;
    transform: translateX(300px);
}

.romb-appear-enter-active,
.romb-appear-leave-active {
    transition:  opacity .1s ease-in, transform .5s ease-in;
}
</style>
