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
		<!-- Список моделей -->
		<PageBlock><ModelsBlock :items="items"/></PageBlock>
	</div>
</template>

<script>
import PageBlock from '@/components/PageBlock.vue'
import FirstDisplay from '@/components/blocks/FirstDisplay.vue'
import DisplayBlock from '@/components/blocks/DisplayBlock.vue'
import FeaturesBlock from '@/components/blocks/FeaturesBlock.vue'
import ModelsBlock from '@/components/blocks/ModelsBlock.vue'

import { getToken } from '@/assets/js/getToken.js'
import { getItems } from '@/assets/js/getItems.js'

export default {
	components: {
		PageBlock,
		FirstDisplay,
		DisplayBlock,
		FeaturesBlock,
		ModelsBlock
	},

	data() {
		return {
			tokenReceived: false,
			dataLoaded: false,
			sectionId: 297677,
			items: []
		}
	},

	async asyncData() {
		const token = await getToken()
		const items = await getItems(token)
		return { items }
	}
}
</script>

<style lang="css" scoped></style>
