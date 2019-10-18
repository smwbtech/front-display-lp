<template lang="html">
	<section class="models-display">
		<h2 class="title">
			модельный ряд промышленных мониторов DNA
		</h2>
		<div v-touch:swipe="swipeHandler" class="models">
			<ArrowLeft
				:class="[
					slide === 0 ? 'models__controls_inactive' : '',
					'models__controls'
				]"
				@click="moveCarousel(-1)"
			></ArrowLeft>
			<div class="wrapper" :style="wrapperStyle">
				<div class="models-list" :style="styleObj">
					<ModelListItem
						v-for="(model, index) in items"
						:key="model.name"
						:model="model"
						:index="index"
						:usdCurrency="usdCurrency"
						@more-info="(index) => $emit('show-modal', index)"
						@set-height="setHeight"
					></ModelListItem>
				</div>
			</div>
			<ArrowRight
				:class="[
					slide === this.items.length - 3
						? 'models__controls_inactive'
						: '',
					'models__controls'
				]"
				@click="moveCarousel(1)"
			></ArrowRight>
		</div>
	</section>
</template>

<script>
import ModelListItem from '@/components/ModelListItem.vue'
export default {
	components: {
		ModelListItem
	},
	props: {
		items: {
			type: Array,
			required: true
		},
		currency: {
			type: Object,
			default: null
		}
	},
	data() {
		return {
			slide: 0,
			left: 0,
			height: 0,
			window: null
		}
	},
	computed: {
		column() {
			if (this.window) {
				return this.window.innerWidth >= 1024
					? (window.innerWidth - 20 * 23) / 24
					: (window.innerWidth - 10 * 11) / 12
			}
			return 0
		},
		marginSides() {
			if (this.window) {
				return this.window.innerWidth >= 1024 ? 80 : 20
			}
			return 0
		},
		styleObj() {
			return {
				width: `${this.items.length * 100 +
					this.items.length * this.marginSides}%`,
				transform: `translateX(${this.left}px)`
			}
		},
		wrapperStyle() {
			return {
				height: `${this.height + 40}px`
			}
		},

		usdCurrency() {
			return this.currency ? this.currency.Valute.USD.Value : null
		}
	},
	mounted() {
		this.window = window
	},
	methods: {
		moveCarousel(i) {
			if (i > 0 && this.slide + 3 < this.items.length) {
				this.slide++
				this.left -=
					this.window.innerWidth >= 1024
						? this.column * 5 + 20 * 4 + this.marginSides
						: this.column * 8 + 10 * 7 + this.marginSides
			} else if (i < 0 && this.slide > 0) {
				this.slide--
				this.left +=
					this.window.innerWidth >= 1024
						? this.column * 5 + 20 * 4 + this.marginSides
						: this.column * 8 + 10 * 7 + this.marginSides
			}
		},
		setHeight(h) {
			if (this.height < h) this.height = h
		},
		swipeHandler(direction) {
			if (direction === 'right') {
				this.moveCarousel(-1)
			} else if (direction === 'left') {
				this.moveCarousel(1)
			}
			return false
		}
	}
}
</script>

<style lang="css" scoped>
.models-display {
    min-height: 100vh;
	background-image: url('/img/models-display/bg.jpg');
	padding-top: calc(var(--row) + var(--gutter));
	padding-left: calc(var(--column) + var(--gutter));
	padding-right: calc(var(--column) + var(--gutter));
	& .title {
		font-family: 'Clear Sans', sans-serif;
		font-weight: 100;
		font-size: 1.2em;
		margin-bottom: calc(var(--row) + var(--gutter));
	}
	& .models {
		display: flex;
		justify-content: space-between;
		align-items: center;
		& .models__controls {
			width: calc(var(--column) * 2 + var(--gutter) * 1);
			fill: var(--blue);
			cursor: pointer;
			&.models__controls_inactive {
				opacity: .5;
				cursor: not-allowed;
			}
			&:avtive {
				transform: scale(0.9);
			}
		}
		& .wrapper {
			width: calc(var(--column) * 18 + var(--gutter) * 16);
			overflow: hidden;
			position: relative;
			& .models-list {
				position: absolute;
				left: 0%;
				top: 0;
				left: 0;
				width: 100%;
				display: flex;
				overflow: hidden;
				transition: all .8s ease-out;
			}
		}
	}
}
/* Верстка для мобильных */
@media (320px <= width < 1024px) {
	.models-display {
		width: 100vw;
		padding-top: calc(var(--m-row) + var(--m-gutter));
		padding-left: 0;
		padding-right: 0;
		& .title {
			font-size: 1em;
			text-align: center;
		}
		& .models {
			& .models__controls {
				width: calc(var(--m-column) * 2 + var(--m-gutter) * 1);
			}
			& .wrapper {
				min-height: 100vh;
				width: calc(var(--m-column) * 9 + var(--m-gutter) * 8);
			}
		}
	}
}
</style>
