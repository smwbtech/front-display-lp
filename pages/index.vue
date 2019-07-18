<template lang="html">
	<!-- Первый экран -->
	<PageBlock>
		<FirstDisplay />
	</PageBlock>
</template>

<script>
import PageBlock from '@/components/PageBlock.vue'
import FirstDisplay from '@/components/blocks/FirstDisplay.vue'

export default {
	components: {
		PageBlock,
		FirstDisplay
	}
}
</script>

<style lang="css" scoped></style>
