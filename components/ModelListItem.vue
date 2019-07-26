<template lang="html">
	<div class="model-item">
		<img :src="model.previewPhoto.value" alt="" class="model-item__image" />
		<h4 class="model-item__title">{{ model.name }}</h4>
		<p class="model-titel__desc" v-html="model.description.value"></p>
		<p class="price">{{ this.price }}</p>
		<p
			:class="[
				parseInt(this.model.inStock.value) > 0 ? 'stock_in' : '',
				'stock'
			]"
		>
			{{ this.inStock }}
		</p>
		<div class="controls">
			<ActionButton
				><a
					href="#"
					class="more"
					@click.prevent="$emit('more-info', index)"
					>подробнее</a
				></ActionButton
			>
			<ActionButton>
				<a :href="model.url" target="_blank" class="buy">купить</a>
			</ActionButton>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		model: {
			type: Object,
			required: true
		},
		index: {
			type: Number,
			required: true
		}
	},

	computed: {
		price() {
			const price = parseFloat(this.model.price.value)
			return price > 0 ? price : ' по запросу'
		},

		inStock() {
			return parseInt(this.model.inStock.value) > 0
				? 'в наличии'
				: 'под заказ'
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

	& .model-titel__desc {
		font-size: .8em;
		font-weight: 100;
		line-height: 1.4;
		text-align: justify;
	}

	& .price,
	& .stock {
		position: relative;
		margin: 0;
		padding: 0;
		font-family: 'Orpheus', serif;
		font-size: .8em;

		&:before {
			content: "";
			position: absolute;
			left: -30px;
			top: -2px;
			display: block;
			width: 20px;
			height: 20px;
			background-position: center;
			background-size: 90%;
			background-repeat: no-repeat;
		}
	}

	& .price {
		margin-bottom: 5px;
		&:before {
			background-image: url('/img/models-display/dollar-symbol.svg');
		}
	}

	& .stock {
		margin-bottom: 20px;
		color: rgba(0,0,0,.5);
		&:before {
			background-image: url('/img/models-display/storage.svg');
			left: -32px;
		}

		&.stock_in {
			color: var(--green);
		}
	}

    & .controls {
        display: flex;
		width: 100%;
        justify-content: space-between;

        & > * {
            width: calc(var(--column) * 2 + var(--gutter));
			font-size: .8em;
        }

		& .buy,
		& .more {
			display: block;
			width: 100%;
			height: 100%;
			padding: 10px;
			text-decoration: none;
		}
    }
}
</style>
