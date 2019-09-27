<template lang="html">
	<section class="full-view">
		<CloseButton class="close" @click="$emit('close-modal')" />
		<div class="content">
			<!-- Фото девайсов -->
			<div class="illustration">
				<!-- Активное фото -->
				<div class="main-image-container">
					<img :src="currentIllustration" alt="" class="main-img" />
				</div>
				<!-- Превью фотографий -->
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
				<!-- Декторативный разделитель -->
				<RombLine class="romb-line" />
				<!-- Название модели и кнопка купить -->
				<div class="header">
					<h1 class="title">
						{{ model.name }}
					</h1>
					<ActionButton>
						<a :href="model.url" target="_blank" class="order">
							заказать</a
						>
					</ActionButton>
				</div>
				<!-- Описание модели -->
				<p v-html="model.description.value" />
				<!-- Характеристики модели -->
				<div class="features">
					<vue-scroll>
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
					</vue-scroll>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		// Объек модели дисплея
		model: {
			type: Object,
			required: true
		}
	},

	data() {
		return {
			// Текущая активная иллюстрация
			currentIllustration: ''
		}
	},

	computed: {
		/**
		 * Объеденяет в массив превью и
		 * остальные фото в один массив
		 * @return {array} - массив содержащий строки со ссылками на фото модели
		 */
		images() {
			const photos = this.model.photos
				? this.model.photos.value.slice(0, 3)
				: []
			const total = [this.model.previewPhoto.value, ...photos]
			return total.length > 1 ? total : []
		},

		/**
		 * Определения, является ли устройство
		 * мобильным или нет (в зависимости от ширины экрана)
		 * @return {Boolean} - true - мобильное, false - не мобильное
		 */
		isMobile() {
			return window && window.innerWidth < 1024
		},

		/**
		 * Возвращает объект стилей для превью фотографий в зависимости
		 * от количество изображений в this.images
		 * @return {object} - объект стилей превью
		 */
		smallImageStyle() {
			return {
				width: `${100 / this.images.length}%`
			}
		},

		/**
		 * Форматирование и приведение характеристик
		 * к одному виду.
		 * @return {array} - массив характеристик, содержащий объект
		 * 					 @property {string} name 	- название характеристики
		 * 					 @property {string} value	- значение характеристики для данной модели
		 */
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

	mounted() {
		// Устанавливаем фото, которое выбрано как превью для сайта nnz-ipc.ru, как активное
		this.currentIllustration = this.model.previewPhoto.value
	},

	methods: {
		/**
		 * Изменяем активное изображение
		 * @param  {number} i - индекс изображения в массиве this.images
		 * @return {undefined}
		 */
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

	/* Кнопка закрыть */
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

	/* Контент модального окна */
	& .content {
		display: flex;

		/* Блок фотографий */
		& .illustration {

			width: calc(var(--column) * 12 + var(--gutter) * 11);
			padding: 0 calc(var(--column) + var(--gutter));
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;

			/* Главное изображение */
			& .main-image-container {
				min-height: calc(var(--row) * 6 + var(--gutter) * 5);

				& .main-img {
					width: 100%;
					display: block;
				}
			}

			/* Превью */
			& .small {
				display: block;
				cursor: pointer;
			}
		} /* end Блок фотографий */

		/* Блок текстового контента */
		& .text {
			width: calc(var(--column) * 11 + var(--gutter) * 10);
			padding-left: calc(var(--column) + var(--gutter));
			position: relative;

			& .romb-line {
				position: absolute;
				left: calc(-1 * var(--gutter));
				height: 80%;
				top: 10%;
			}

			/* Заголовок */
			& .header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 60px;

				/* Название модели */
				& .title {
					position: relative;

					&:after {
						content: "";
						display: block;
						position: absolute;
						z-index: 20;
						bottom: -10px;
						left: 0;
						width: calc(var(--column) * 3 + var(--gutter) * 2);
						height: 5px;
						background-color: #000;
					}
				}

				/* Кнопка купить */
				& .order {
					padding: 10px;
					display: block;
					text-decoration: none;
				}
			} /* end Заголовок */

			/* Характеристики */
			& .features {

				height: calc(var(--row) * 6 + var(--gutter) * 5);
				overflow-y: hidden;

				/* Список характеристик */
				& .features-list {
					list-style: none;
					font-size: .8em;
					padding-bottom: 40px;

					/* Блок характеристики */
					& .features-list-item {
						display: block;
						width: 100%;
						margin-bottom: 20px;
						display: flex;
						justify-content: space-between;
						border: 2px solid rgba(0, 149, 218, 0);
						transition: border .2s ease-in;

						&:hover {
							border: 2px solid rgba(0, 149, 218, 1);
						}

						/* Название характеристики */
						& .name {
							font-family: 'Orpheus', serif;
						}

						/* Значение характеристики */
						& .value {
							font-weight: 100;
							padding-right: 20px;
						}
					} /* end Блок характеристики */
				}

			} /* end Характеристики */

		} /* end Блок текстового контента */

	} /* end Контент модального окна */

}

@media (320px <= width < 1024px) {
	.full-view {
		flex-flow: column;
		overflow-y: scroll;

		& .close {
			width: 20px;
			height: 20px;
		}

		& .content {
			flex-flow: column;

			& .illustration {
				width: 100vw;
				min-height: 80vh;
				padding: 0 calc(var(--m-column) + var(--m-gutter));

				& .main-image-container {
					width: 100%;
				}

				& .small {
					margin: 10px 5px;
				}
			}

			& .text {
				width: 100%;
				padding: 10px calc(var(--m-column) + var(--m-gutter));

				& .romb-line {
					display: none;
				}

				& .header {

					& .title {
						font-size: 1em;

						&:after {
							width: calc(var(--m-column) * 4 + var(--m-gutter));
						}
					}
				}

				& .features {
					width: 100%;

					& .features-list {
						font-size: .7em;
					}
				}
			}
		}
	}
}
</style>
