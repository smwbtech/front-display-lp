<template lang="html">
	<section class="features-block">
		<!-- Блок иллюстраций -->
		<div class="illustration">
			<transition name="image-appear" mode="out-in">
				<div v-if="!isChanging" class="image">
					<img
						v-for="illustration in currentFeature.illustrations"
						:key="illustration"
						:src="illustration"
						class="image__item"
						alt=""
					/>
				</div>
			</transition>
		</div>

		<!-- Текстовый блок -->
		<div class="text">
			<RombLine class="text__decore-line" />
			<h2 class="title">
				характеристики промышленного монитора DNA
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
			navComponents: [
				'Ip65Nav',
				'TemperatureNav',
				'PortsNav',
				'TouchNav',
				'CustomizatiomNav'
			],
			features: [
				{
					illustrations: [
						'img/features-display/ip65_illustration_left.jpg',
						'img/features-display/ip65_illustration_center.jpg',
						'img/features-display/ip65_illustration_right.jpg'
					],
					title: 'Защита по передней панели',
					description:
						'Лицевая панель монитора изготовлена из 10 мм листа алюминия и высокопрочного закалённого стекла, что обеспечивает высокую прочность и вандалоустойчивость устройства. Помимо этого, лицевая панель имеет защиту IP65 от пыли и влаги. Данная особенность позволяет уберечь промышленный мониторы серии DNA от попадания микрочастиц внутрь, что гарантирует надежную работу устройства в тяжелых условиях производства.'
				},
				{
					illustrations: [
						'img/features-display/temperature_illustration_left.jpg',
						'img/features-display/temperature_illustration_center.jpg',
						'img/features-display/temperature_illustration_right.jpg'
					],
					title: 'Работа монитора в широком диапазоне температур',
					description:
						'Мониторы серии DNA были специально разработаны для применения в тяжелых условиях эксплуатации, что подразумевает под собой использование в неотапливаемых помещениях или же помещениях с плохой вентиляцией. Устройства способны исправно работать при температурах от -20 до +60 °C'
				},
				{
					illustrations: [
						'img/features-display/ports_illustration_left.jpg',
						'img/features-display/ports_illustration_center.jpg',
						'img/features-display/ports_illustration_right.jpg'
					],
					title: 'Видеоинтерфейсы',
					description:
						'Мониторы серии DNA имеют на борту три видеовхода: VGA, DisplayPort 1.1 и DVI-D (опционально, DVI-D может быть заменён на HDMI). В зависимости от задач, пользователь имеет возможность выбора наиболее подходящего интерфейса.'
				},
				{
					illustrations: [
						'img/features-display/touch_illustration_left.jpg',
						'img/features-display/touch_illustration_center.jpg',
						'img/features-display/touch_illustration_right.jpg'
					],
					title: 'Широкий ассортимент модификаций и опций',
					description:
						'Мониторы серии DNA имеют широкий набор модификаций и опций, помимо которых, возможна разработка индивидуальных решений, необходимых для реализации конкретного проекта заказчика (например, блок клавиш настройки монитора может быть перенесён с лицевой на тыльную сторону). '
				},
				{
					illustrations: [
						'img/features-display/customization_illustration_left.jpg',
						'img/features-display/customization_illustration_center.jpg',
						'img/features-display/customization_illustration_right.jpg'
					],
					title: 'Сенсорный экран',
					description:
						'Мониторы серии DNA могут поставляться как с закалённым защитным стеклом, так и с резистивным сенсорным экраном (Penmount 6000). Сенсорный экран имеет два интерфейса: RS-232 и USB, соответственно, через любой из них он может быть подключён к компьютеру.'
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
		margin-top: var(--row);
        width: calc(var(--column) * 13 + var(--gutter) * 12);

        & .image {
            display: flex;
            justify-content: flex-start;
            width: calc(var(--column) * 12 + var(--gutter) * 11);
			height: 80%;
			/* Изображения */
            & .image__item {
                display: block;
                align-self: center;
				max-height: calc(var(--row) * 5 + var(--gutter) * 5);
				transition: transform .3s ease-out .15s;

				&:first-of-type {
					width: calc(var(--column) + var(--gutter));
					transform: translateY(40px);
				}

				&:nth-of-type(2) {
					width: calc(var(--column) * 8 + var(--gutter) * 7);
				}

				&:last-of-type {
					width: calc(var(--column) * 2 + var(--gutter) * 3);
					transform: translateY(-40px);
				}
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
            }

        }

        /* Декоративная линия */
        & .text__decore-line {
            height: 100%;
            left: calc(var(--column) * -1);
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
.image-appear-enter {
	transform: translateX(-40px);
	opacity: 0;

	& .image__item {

		&:first-of-type,
		&:last-of-type {
			transform: translateY(0) !important;
		}
	}
}

.image-appear-leave-to {
	& .image__item {

		&:first-of-type {
			transform: translateY(60px) !important;
		}

		&:last-of-type {
			transform: translateY(-60px) !important;
		}
	}
}

.image-appear-leave-to {
	transform: translateX(40px);
	opacity: 0;
}

.image-appear-enter-active,
.image-appear-leave-active {
	transition: opacity .3s ease-in, transform .35s ease-in;
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
</style>
