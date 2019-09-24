<template lang="html">
	<div class="feature-item" :style="styleObj">
		<slot />
	</div>
</template>

<script>
export default {
	props: {
		bg: {
			type: String
		}
	},

	computed: {
		styleObj() {
			return {
				backgroundColor: this.bg
			}
		}
	}
}
</script>

<style lang="css" scoped>
.feature-item {
    width: 33.33333%;
    min-height: 100%;
}
</style>
