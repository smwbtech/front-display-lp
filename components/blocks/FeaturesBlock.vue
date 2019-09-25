<template lang="html">
	<section class="features-block">
		<!-- Блок иллюстраций -->
		<div class="illustration">
			<div class="image">
				<transition :name="currentFeature.name" mode="out-in">
					<img
						v-if="!isChanging"
						:src="currentFeature.illustration"
						class="condition"
						alt=""
					/>
				</transition>
				<img
					src="img/features-display/display.jpg"
					alt="front display in grey color"
					class="device"
				/>
			</div>
		</div>

		<!-- Текстовый блок -->
		<div class="text">
			<RombLine class="text__decore-line" />
			<h2 class="title">
				условия эксплуатации промышленного монитора DNA
			</h2>
			<div class="feature-text">
				<transition name="title-appear">
					<h3 v-if="!isChanging" class="feature-text__title">
						{{ currentFeature.title }}
					</h3>
				</transition>
				<transition name="text-appear" mode="out-in">
					<p v-if="!isChanging" class="feature-text__text">
						{{ currentFeature.description }}
					</p>
				</transition>
			</div>
			<ul class="nav">
				<li
					v-for="(component, index) in navComponents"
					:key="`${index}-nav`"
					class="nav-item"
					@click="changeByClick(index)"
				>
					<component
						:is="`${component}`"
						:class="[index === current ? 'active' : '']"
					/>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			isObserved: false,
			isChanging: false,
			current: 0,
			timerId: undefined,
			navComponents: ['WaterNav', 'SandNav', 'ColdNav', 'HotNav'],
			features: [
				{
					name: 'water',
					illustration: 'img/features-display/water.png',
					title: 'Высокий класс защиты от влаги',
					description:
						'Защита от влаги,  в особенности по передней панели, является критически важной характеристикой для промышленных дисплеев, поэтому мониторы серии DNA обеспечивают высокий класс защиты IP65 с лицевой стороны, защищающий устройство от влаги и брызг. Техническое решение реализовано за счет герметизации всех соединений передней панели монитора и наличия уплотнителя по контуру.'
				},
				{
					name: 'sand',
					illustration: 'img/features-display/sand.png',
					title: 'Высокий класс защиты от пыли',
					description:
						'Корпус монитора защищен от попадания пыли благодаря продуманной конструкции элементов корпуса, которые полностью перекрывают доступ пыли с лицевой панели монитора, и не допускают ее попадания с тыльной стороны прибора и интерфейсных разъемов. Данная особенность позволяет уберечь промышленный мониторы серии DNA от попадания микрочастиц внутрь, что гарантирует надежную работу устройства в тяжелых условиях производства, в том числе в помещениях с высоким уровнем пыли и загрязнений.'
				},
				{
					name: 'cold',
					illustration: 'img/features-display/cold.png',
					title: 'Работа в холод',
					description:
						'Мониторы серии DNA были специально разработаны для применения в тяжелых условиях эксплуатации, что подразумевает под собой использование в неотапливаемых помещениях. Устройства способны исправно работать при температурах до -20 °C. При этом не происходит ухудшения изображения - возникновения белых пятен и размытия изображения. Условиях низких температур являются рабочим режимом монитора и не приводят к повреждению его внутренних компонентов.'
				},
				{
					name: 'hot',
					illustration: 'img/features-display/hot.png',
					title: 'Работа в жару',
					description:
						'Устройства способны исправно работать при температурах до +60 °C, что характерно для закрытых помещений с плохой вентиляцией, щитов с высокой плотностью компонентов, горячих цехов, а так же шахт вентиляции. Условиях высоких температур являются рабочим режимом монитора и не приводят к повреждению его внутренних компонентов, а стабильность работы дисплея может быть гарантирована.'
				}
			]
		}
	},

	computed: {
		/**
		 * Возвращает текущее свойство
		 * @return {object} - возвращает объект текущего свойства товара
		 */
		currentFeature() {
			return this.features[this.current]
		}
	},

	mounted() {
		// После того, как компонент был монтирован, мониторим его попадание во вьюпорт
		this.observeScroll(this.$el)
	},

	methods: {
		/**
		 * Отслеживаем, когда последний элемент
		 *
		 * @param  {Object} el - последний элемент текущего списка
		 * @return {undefined}
		 */
		observeScroll(el) {
			const options = {
				threshold: 0.7
			}

			const callback = (entries, observer) => {
				for (const entry of entries) {
					const { isIntersecting } = entry
					if (isIntersecting) {
						this.isObserved = true
						this.autoSlider()
						observer.disconnect()
					}
				}
			}
			const observer = new IntersectionObserver(callback, options)
			observer.observe(el)
		},
		/**
		 * Меняем слайд
		 * @param  {number} i 	 - номер слайда
		 * @return {undefined}   [description]
		 */
		changeSlide(i) {
			if (i !== this.current) {
				this.isChanging = true
				this.current = i
				setTimeout(() => (this.isChanging = false), 300)
			}
		},
		/**
		 * Автоматическая смена слайдов
		 * @return {[type]} [description]
		 */
		autoSlider() {
			this.timerId = setInterval(() => {
				const nextSlide =
					this.current < this.features.length - 1
						? this.current + 1
						: 0
				this.changeSlide(nextSlide)
			}, 8000)
		},

		/**
		 * Меняем слайд по клику
		 * и замедляем действие autoSlider
		 * @param  {number} i - номер слайда
		 * @return {undefined}
		 */
		changeByClick(i) {
			clearInterval(this.timerId)
			this.changeSlide(i)
			this.autoSlider()
		}
	}
}
</script>

<style lang="css" scoped>

.features-block {
    position: relative;
    display: flex;
    width: 100%;
    min-height: 100vh;
    padding-top: calc(var(--row) * 2 + var(--gutter));

    /* Изображение */
    & .illustration {
        width: calc(var(--column) * 13 + var(--gutter) * 12);

        & .image {
            display: flex;
            justify-content: center;
            width: calc(var(--column) * 12 + var(--gutter) * 11);

			/* Изображения */
            & .device {
				position: relative;
				z-index: 15;
				width: calc(var(--column) * 12 + var(--gutter) * 11);
            }

			& .condition {
				z-index: 16;
				position: absolute;
				width: calc(var(--column) * 12 + var(--gutter) * 11);
			}

        }
    }

    /* Текст */
    & .text {
        position: relative;
        display: flex;
        flex-flow: column;
		justify-content: space-between;
        width: calc(var(--column) * 11 + var(--gutter) * 10);
		height: calc(var(--row) * 7 + var(--gutter) * 6);

        & .title {
            font-family: 'Clear Sans', sans-serif;
            font-weight: 100;
            font-size: 1.2em;
        }

        & .feature-text {

			display: flex;
			flex-flow: column;
			justify-content: center;
			min-height: calc(var(--row) * 3 + var(--gutter) * 2);

            & .feature-text__title {
				position: relative;
                font-family: 'Orpheus', serif;
                font-size: 2em;
				margin-bottom: 40px;

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

            & .feature-text__text {
                line-height: 1.8;
				padding-right: calc(var(--column) + var(--gutter));
            }

        }

        /* Декоративная линия */
        & .text__decore-line {
            height: 100%;
            left: calc(-1 * var(--column));
        }

		/* Навигация */
		& .nav {
			display: flex;
			width: 50%;
			list-style: none;
			justify-content: space-between;

			/* Иконка навигации */
			& .nav-item {
				width: 30px;
				height: 30px;
				cursor: pointer;
				fill: #000;
				transition: fill .3s ease-in;

				& .active {
					fill: var(--blue);
				}
			}
		}
    }
}

/* Анимации и переходы */

/* Изображение */

.water-enter-active,
.water-leave-active,
.sand-enter-active,
.sand-leave-active {
	transition: opacity .3s ease-in, transform .3s ease-out;
}

.water-enter,
.sand-leave-to {
	transform: translateX(-50px);
	opacity: 0;
}

.sand-enter,
.water-leave-to {
	transform: translateX(50px);
	opacity: 0;
}

.cold-enter-active,
.cold-leave-active,
.hot-enter-active,
.hot-leave-active {
	transition: opacity .3s ease-in;
}

.cold-enter,
.cold-leave-to,
.hot-enter,
.hot-leave-to {
	opacity: 0;
}

/* Заголовок */

.title-appear-enter,
.title-appear-leave-to {
	opacity: 0;
	transform: translateY(-20px);
}

.title-appear-enter-active,
.title-appear-leave-active {
	transition: all .3s ease-in;
}
.text-appear-enter,
.text-appear-leave-to {
	opacity: 0;
	transform: translateY(20px);
}

.text-appear-enter-active,
.text-appear-leave-active {
	transition: all .3s ease-in;
}

/* Верстка для мобильных */
@media (320px <= width < 1024px) {
	.features-block {
		padding-top: 20px;
		flex-flow: column;
		text-align: center;

		& .illustration {
			width: 100%;

			& .image {
				width: 100%;
				padding: 0 10px;
				margin-bottom: 20px;

				& .device {
					width: calc(var(--m-column) * 10 + var(--m-gutter) * 9);
				}

				& .condition {
					width: calc(var(--m-column) * 10 + var(--m-gutter) * 9);
				}

			}
		}

		& .text {
			width: 100%;
			height: auto;
			padding: var(--m-gutter);

			& .text__decore-line {
				display: none;
			}

			& .title {
				display: none;
			}

			& .feature-text {
				order: 2;
				min-height: 100vh;
				justify-content: flex-start;

				& .feature-text__title {
					font-size: 1.2em;
					padding-top: 20px;

					&:after {
						width: calc(var(--m-column) * 3 + var(--m-gutter) * 2);
						left: calc(50% - ((var(--m-column) * 3 + var(--m-gutter) * 2) / 2));
						height: 10px;
					}
				}

				& .feature-text__text {
					text-align: justify;
					font-weight: 100;
					line-height: 1.4;
				}
			}

			& .nav {
				width: 100%;
				order: 1;
			}

		}
	}
}
</style>
