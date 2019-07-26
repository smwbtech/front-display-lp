<template lang="html">
	<section class="full-view">
		<CloseButton class="close" @click="$emit('close-modal')"></CloseButton>
		<div class="content">
			<!-- Фото девайсов -->
			<div class="illustration">
				<div class="main-image-container">
					<img :src="currentIllustration" alt="" class="main-img" />
				</div>
				<img
					v-for="(photo, index) in images"
					:key="`${index}-img`"
					:src="photo"
					alt=""
					class="small"
					:style="smallImageStyle"
					@click="changeImage(index)"
				/>
			</div>
			<!-- Текстовый контент -->
			<div class="text">
				<RombLine class="romb-line"></RombLine>
				<div class="header">
					<h1 class="title">{{ model.name }}</h1>
					<ActionButton>
						<a :href="model.url" target="_blank" class="order">
							заказать</a
						>
					</ActionButton>
				</div>
				<p v-html="model.description.value"></p>
				<div class="features">
					<ul class="features-list">
						<li
							v-for="(feature, index) in features"
							:key="`${index}-feature`"
							class="features-list-item"
						>
							<span class="name">{{ feature.name }}</span>
							<span class="value">{{ feature.value }}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		model: {
			type: Object,
			required: true
		}
	},

	mounted() {
		this.currentIllustration = this.model.previewPhoto.value
	},

	data() {
		return {
			currentIllustration: ''
		}
	},

	computed: {
		images() {
			const photos = this.model.photos
				? this.model.photos.value.slice(0, 3)
				: []
			const total = [this.model.previewPhoto.value, ...photos]
			return total.length > 1 ? total : []
		},

		smallImageStyle() {
			return {
				width: `${100 / this.images.length}%`
			}
		},

		features() {
			const engFields = {
				'i18n::field-brightness': 'Яркость',
				'i18n::field-cvet_korpusa': 'Цвет корпуса'
			}
			const features = Object.entries(this.model.features).map((v) => {
				if (v[0] !== 'photos') {
					const name = engFields[v[1].name]
						? engFields[v[1].name]
						: v[1].name
					const value = Array.isArray(v[1].value)
						? v[1].value.join(',').trim()
						: v[1].value.trim()
					return { name, value }
				}
			})
			return features
		}
	},

	methods: {
		changeImage(i) {
			this.currentIllustration = this.images[i]
		}
	}
}
</script>

<style lang="css" scoped>

.full-view {
	display: flex;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
	padding-top: calc(var(--row) + var(--gutter));
    background-color: #fff;

    & .close {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
		cursor: pointer;
		opacity: .5;
		transition: opacity .3s ease-in;

		&:hover {
			opacity: 1;
		}
    }

	& .content {
		display: flex;

		& .illustration {

			width: calc(var(--column) * 12 + var(--gutter) * 11);
			padding: 0 calc(var(--column) + var(--gutter));
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;

			& .main-image-container {
				min-height: calc(var(--row) * 6 + var(--gutter) * 5);

				& .main-img {
					width: 100%;
					display: block;
				}
			}

			& .small {
				display: block;
				cursor: pointer;
			}
		}

		& .text {
			width: calc(var(--column) * 9 + var(--gutter) * 9);
			padding-left: calc(var(--column) + var(--gutter));
			position: relative;

			& .romb-line {
				position: absolute;
				left: calc(var(--gutter) * -1);
				height: calc(var(--row) * 6 + var(--gutter) * 6);
			}

			& .header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 60px;

				& .title {
					position: relative;

					&:after {
						content: "";
						display: block;
						position: absolute;
						z-index: 20;
						bottom: -40px;
						left: 0;
						width: calc(var(--column) * 3 + var(--gutter) * 2);
						height: 20px;
						background-color: #000;
					}
				}

				& .order {
					padding: 10px;
					display: block;
					text-decoration: none;
				}
			}

			& .features {

				& .features-list {
					list-style: none;
					font-size: .8em;

					& .features-list-item {
						display: block;
						width: 100%;
						margin-bottom: 5px;
						display: flex;
						justify-content: space-between;

						& .name {
							font-family: 'Orpheus', serif;
						}

						& .value {
							font-weight: 100;
						}
					}
				}

			}
		}

	}

}
</style>