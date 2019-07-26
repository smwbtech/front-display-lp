<template lang="html">
	<section class="models-display">
		<h2 class="title">модельный ряд промышленных мониторов DNA</h2>
		<div class="models">
			<ArrowLeft
				:class="[
					slide === 0 ? 'models__controls_inactive' : '',
					'models__controls'
				]"
				@click="moveCarousel(-1)"
			></ArrowLeft>
			<div class="wrapper">
				<div class="models-list" :style="styleObj">
					<ModelListItem
						v-for="(model, index) in items"
						:key="model.name"
						:model="model"
						:index="index"
						@more-info="(index) => $emit('show-modal', index)"
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
	props: {
		items: {
			type: Array,
			required: true
		}
	},

	components: {
		ModelListItem
	},

	data() {
		return {
			slide: 0,
			left: 0,
			marginSides: 80,
			window: null
		}
	},

	computed: {
		column() {
			return this.window ? (window.innerWidth - 20 * 23) / 24 : 0
		},

		styleObj() {
			return {
				width: `${this.items.length * 100}%`,
				left: `${this.left}px`
			}
		}
	},

	methods: {
		moveCarousel(i) {
			if (i > 0 && this.slide + 3 < this.items.length) {
				this.slide++
				this.left -= this.column * 5 + 20 * 4 + this.marginSides
			} else if (i < 0 && this.slide > 0) {
				this.slide--
				this.left += this.column * 5 + 20 * 4 + this.marginSides
			}
		}
	},

	mounted() {
		this.window = window
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
			width: calc(var(--column) * 18 + var(--gutter) * 17);
			min-height: calc(var(--row) * 6 + var(--column) * 5);
			overflow: hidden;
			position: relative;

			& .models-list {
				position: absolute;
				left: 0%;
				top: 0;
				width: 100%;
				display: flex;
				overflow: hidden;
				transition: all .8s linear;
			}
		}
	}

}
</style>
