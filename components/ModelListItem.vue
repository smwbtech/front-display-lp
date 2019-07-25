<template lang="html">
	<div class="model-item">
		<img :src="model.previewPhoto.value" alt="" class="model-item__image" />
		<h4 class="model-item__title">{{ model.name }}</h4>
		<p class="model-titel__desc">{{ model.description.value }}</p>
		<div class="controls">
			<ActionButton>Подробнее</ActionButton>
			<ActionButton>Купить</ActionButton>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		model: {
			type: Object
		}
	}
}
</script>

<style lang="css" scoped>

.model-item {
	display: flex;
	flex-flow: column;
	justify-content: space-between;
	align-items: center;
    width: calc(var(--column) * 5 + var(--gutter) * 4);
	margin: 20px 40px;
    padding: 10px;
    background-color: #fff;
    box-shadow: 3px 3px 12px rgba(0,0,0,.1);
	text-align: center;

    & .model-item__image {
        max-width: 90%;
    }

    & .controls {
        display: flex;
		width: 100%;
        justify-content: space-between;

        & > * {
            width: calc(var(--column) * 2 + var(--gutter));
        }
    }
}
</style>
