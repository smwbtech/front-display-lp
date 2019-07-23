<template lang="html">
	<section class="features-block">
		<div class="illustration">
			<div class="image">
				<img
					v-for="illustration in currentFeature.illustrations"
					:key="illustration"
					:src="illustration"
					class="image__item"
					alt=""
				/>
			</div>
		</div>

		<div class="text">
			<RombLine class="text__decore-line" />
			<h2 class="title">
				характеристики промышленного монитора DNA
			</h2>
			<div class="feature-text">
				<h3 class="feature-text__title">
					{{ currentFeature.title }}
				</h3>
				<p class="feature-text__text">
					{{ currentFeature.description }}
				</p>
			</div>
			<ul class="nav">
				<li
					v-for="(component, index) in navComponents"
					:key="`${index}-nav`"
					class="nav-item"
					@click="changeSlide(index)"
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
			current: 0,
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
						'img/features-display/customizatiom_illustration_left.jpg',
						'img/features-display/customizatiom_illustration_center.jpg',
						'img/features-display/customizatiom_illustration_right.jpg'
					],
					title: 'Широкий ассортимент модификаций и опций',
					description:
						'Мониторы серии DNA имеют широкий набор модификаций и опций, помимо которых, возможна разработка индивидуальных решений, необходимых для реализации конкретного проекта заказчика (например, блок клавиш настройки монитора может быть перенесён с лицевой на тыльную сторону). '
				},
				{
					illustrations: [
						'img/features-display/touch_illustration_left.jpg',
						'img/features-display/touch_illustration_center.jpg',
						'img/features-display/touch_illustration_right.jpg'
					],
					title: 'Сенсорный экран',
					description:
						'Мониторы серии DNA могут поставляться как с закалённым защитным стеклом, так и с резистивным сенсорным экраном (Penmount 6000). Сенсорный экран имеет два интерфейса: RS-232 и USB, соответственно, через любой из них он может быть подключён к компьютеру.'
				}
			]
		}
	},

	computed: {
		currentFeature() {
			return this.features[this.current]
		}
	},

	methods: {
		/**
		 * Меняем слайд
		 * @param  {number} i 	 - номер слайда
		 * @return {undefined}   [description]
		 */
		changeSlide(i) {
			this.current = i
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
            justify-content: flex-start;
            width: calc(var(--column) * 12 + var(--gutter) * 11);

            & .image__item {
                display: block;
                align-self: center;
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
                font-family: 'Orpheus', serif;
                font-size: 2em;
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

				& .active {
					fill: var(--blue);
				}
			}
		}
    }

}
</style>
