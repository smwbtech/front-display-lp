<template lang="html">
	<div class="content">
		<!-- Первый экран -->
		<PageBlock>
			<FirstDisplay />
		</PageBlock>
		<!-- Экран с подробной информацией о мониторе -->
		<PageBlock>
			<DisplayBlock />
		</PageBlock>
	</div>
</template>

<script>
import PageBlock from '@/components/PageBlock.vue'
import FirstDisplay from '@/components/blocks/FirstDisplay.vue'
import DisplayBlock from '@/components/blocks/DisplayBlock.vue'

export default {
	components: {
		PageBlock,
		FirstDisplay,
		DisplayBlock
	}
}
</script>

<style lang="css" scoped></style>
