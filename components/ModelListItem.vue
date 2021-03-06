<template lang="html">
	<div class="model-item">
		<!-- Превью девайса -->
		<img
			:src="model.previewPhoto.value"
			alt=""
			class="model-item__image"
			@click.prevent="$emit('more-info', index)"
		/>
		<!-- Название модели -->
		<h4 class="model-item__title">
			{{ model.name }}
		</h4>
		<!-- Описание -->
		<div class="model-titel__desc" v-html="model.description.value" />
		<!-- Цена -->
		<p class="price">
			{{ this.price }}
		</p>
		<!-- Наличие на складе -->
		<p
			:class="[
				parseInt(this.model.inStock.value) > 0 ? 'stock_in' : '',
				'stock'
			]"
		>
			{{ this.inStock }}
		</p>
		<!-- Кнопки действия -->
		<div class="controls">
			<!-- Подробнее -->
			<ActionButton>
				<a
					href="#"
					class="more"
					@click.prevent="$emit('more-info', index)"
					>подробнее</a
				>
			</ActionButton>
			<!-- Купить -->
			<ActionButton>
				<a :href="model.url" target="_blank" class="buy">купить</a>
			</ActionButton>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		// Объект модели дисплея
		model: {
			type: Object,
			required: true
		},
		// Порядковый индекс в массиве моделей
		index: {
			type: Number,
			required: true
		}
	},

	computed: {
		/**
		 * Возвращает цену модели или строчку
		 * 'по запросу', если цена не указана
		 * @return {string} - цена модели
		 */
		price() {
			const price = parseFloat(this.model.price.value)
			return price > 0 ? Math.round(price) : ' по запросу'
		},

		/**
		 * Возвращает строчку со статусом
		 * наличия модели на складе
		 * @return {string} - 'в наличие' если модель есть на складе, 'под заказ' - если нет
		 */
		inStock() {
			return parseInt(this.model.inStock.value) > 0
				? 'в наличии'
				: 'под заказ'
		}
	},

	mounted() {
		setTimeout(() => this.$emit('set-height', this.$el.offsetHeight), 20)
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
	border: 3px solid rgba(0, 149, 218, 0);
	text-align: center;
	transition: border .2s ease-in;

	&:hover {
		border: 3px solid #0095da;
	}

	/* Превью изображения */
    & .model-item__image {
        max-width: 90%;
		min-height: 1px;
		cursor: pointer;
    }

	/* Описание модели */
	& .model-titel__desc {
		width: 90%;
		margin-bottom: 10px;
		font-size: .8em;
		font-weight: 100;
		line-height: 1.4;
		text-align: justify;
	}

	/* Цена и наличие */
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
	}/* end Цена и наличие */

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

	/* Кнопки действия */
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
    } /* end Кнопки действия */
}

@media (width: 1024px) {
	.model-item {
		& .controls {
			flex-wrap: wrap;
			& > * {
				width: 100%;
				margin-bottom: 20px;
			}
		}
	}
}

@media (320px <= width < 1024px) {
	.model-item {
		width: calc(var(--m-column) * 8 + var(--m-gutter) * 7);
		margin: 10px;
		padding: 5px;

		& .model-titel__desc {
			font-size: .7em;
			text-align: center;
			line-height: 1.2;
		}

		& .controls {

			flex-flow: column;
			justify-content: center;
			align-items: center;

			& > * {
				width: 90%;
				margin-bottom: 10px;
			}
		}
	}
}
</style>
