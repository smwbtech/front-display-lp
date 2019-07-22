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
		<!-- Слайдер с особенностями -->
		<PageBlock><FeaturesBlock /></PageBlock>
	</div>
</template>

<script>
import PageBlock from '@/components/PageBlock.vue'
import FirstDisplay from '@/components/blocks/FirstDisplay.vue'
import DisplayBlock from '@/components/blocks/DisplayBlock.vue'
import FeaturesBlock from '@/components/blocks/FeaturesBlock.vue'

export default {
	components: {
		PageBlock,
		FirstDisplay,
		DisplayBlock,
		FeaturesBlock
	}
}
</script>

<style lang="css" scoped></style>
