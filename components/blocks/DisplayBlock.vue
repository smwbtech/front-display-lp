<template lang="html">
	<section id="display-block" class="display-block">
		<!-- Текстовый блок -->
		<div class="text-content">
			<!-- Декоративная линия -->
			<transition name="line-appear" mode="out-in">
				<RombLine v-if="isObserved" class="text__decore-line" />
			</transition>

			<transition name="title-appear" mode="out-in">
				<h2 v-if="isObserved" class="text-content__title">
					промышленные мониторы росcийского производства<br /><span
						>серии DNA от компании Ниеншанц-Автоматика</span
					>
				</h2>
			</transition>

			<transition name="text-appear" mode="out-in">
				<p v-if="isObserved" class="text-content__text">
					Мониторы серии DNA были разработаны и сконструированы для
					примения в промышленной автоматизации. Прочный алюминиевый
					корпус, защита IP 65 по передней панели, а также возможность
					работы в широком температурном диапазоне делают устройства
					серии DNA высоконадежными решениями для применения в тяжелых
					условиях производства. Мониторы DNA имеют сертификат
					соответствия ТС RUC-RU.A310.B.06475 подтверждающий
					соблюдение стандартовна промышленные устройства отображения
					информации.
				</p>
			</transition>

			<transition name="text-appear" mode="out-in">
				<ActionButton v-if="isObserved" class="catalog-btn">
					перейти в каталог
				</ActionButton>
			</transition>
		</div>

		<!-- Блок с иллюстрацией -->
		<div class="illustration">
			<div class="device">
				<transition name="monitor-appear" mode="out-in">
					<img
						v-if="isObserved"
						class="device__image"
						src="/img/monitor-display/dna_display.png"
						alt=""
					/>
				</transition>
				<Romb
					v-for="(romb, index) in rombs"
					:key="`${index}-rmb`"
					:class="romb.class"
					:styleObj="romb.styleObj"
					:showCondition="isObserved"
				/>
			</div>
			<NextScreenButton class="next-screen-btn" />
		</div>
	</section>
</template>

<script>
import Romb from '@/components/decorations/Romb.vue'

export default {
	components: {
		Romb
	},

	data() {
		return {
			isObserved: false,
			rombs: [
				{
					class: 'romb_top',
					styleObj: {
						width: '50px',
						height: '50px',
						backgroundImage:
							'url("/img/monitor-display/romb_1_bg.jpg")',
						left: '-50px',
						top: '20px',
						opacity: '.7'
					}
				},
				{
					class: 'romb_top',
					styleObj: {
						width: '90px',
						height: '90px',
						backgroundImage:
							'url("/img/monitor-display/romb_3_bg.jpg")',
						left: '150px',
						top: '-40px',
						opacity: '.6'
					}
				},
				{
					class: 'romb_top',
					styleObj: {
						width: '70px',
						height: '70px',
						backgroundImage:
							'url("/img/monitor-display/romb_2_bg.jpg")',
						left: '30px',
						top: '-30px',
						opacity: '.3'
					}
				},
				{
					class: 'romb_center',
					styleObj: {
						width: '15vw',
						height: '15vw',
						opacity: '.1',
						left: '-10vw',
						top: '5vw'
					}
				},
				{
					class: 'romb_bottom',
					styleObj: {
						width: '70px',
						height: '70px',
						backgroundImage:
							'url("/img/monitor-display/romb_4_bg.jpg")',
						left: '-50px',
						bottom: '20px',
						opacity: '.4'
					}
				},
				{
					class: 'romb_bottom',
					styleObj: {
						width: '50px',
						height: '50px',
						backgroundImage:
							'url("/img/monitor-display/romb_5_bg.jpg")',
						left: '-50px',
						bottom: '-60px',
						opacity: '.6'
					}
				},
				{
					class: 'romb_bottom',
					styleObj: {
						width: '80px',
						height: '80px',
						backgroundImage:
							'url("/img/monitor-display/romb_6_bg.jpg")',
						left: '30px',
						bottom: '-30px',
						opacity: '.3'
					}
				}
			]
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
						observer.disconnect()
					}
				}
			}
			const observer = new IntersectionObserver(callback, options)
			observer.observe(el)
		}
	}
}
</script>

<style lang="css" scoped>

.display-block {
    position: relative;
	display: flex;
    width: 100%;
    min-height: 100vh;

	/* Текстовый контент */
	& .text-content {
		height: 100vh;
		width: calc(var(--column) * 14 + var(--gutter) * 14);
		padding-left: calc(var(--column) * 2 + var(--gutter) * 2);
		padding-right: calc(var(--column) * 4 + var(--gutter) * 4);
		display: flex;
		flex-flow: column;
		justify-content: center;

		& .text__decore-line {
			height: 50%;
			left: calc(var(--column) + var(--gutter));
		}

		& .text-content__title {
			position: relative;
			font-size: 1.2em;
			line-height: .8;
			margin-bottom: 40px;

			& br {
				line-height: .8em;
			}

			& span {
				font-family: 'Clear Sans', sans-serif;
				font-size: 1.5em;
				font-weight: 100;
			}

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

		& .text-content__text {
			font-family: 'Clear Sans', sans-serif;
			line-height: 1.8;
		}

		& .catalog-btn {
			width: calc(var(--column) * 3 + var(--gutter) * 2);
		}
	}

	/* Графический контент */
	& .illustration {
		position: relative;
		padding-top: 20px;
		width: calc(var(--column) * 10 + var(--gutter) * 9);
		background: url('/img/monitor-display/background.jpg');

		/* Блок с девайсом и ромбами */
		& .device {
			position: absolute;
			width: 100%;
			top: calc(var(--row) * 2 + var(--gutter) * 2);
			left: calc((var(--column) * 3 + var(--gutter) * 3) * -1);
			height: calc(var(--row) * 5 + var(--gutter) * 4);

			/* Картинка монитора */
			& .device__image {
				display: block;
				position: absolute;
				z-index: 6;
				width: auto;
				height: calc(var(--row) * 5 + var(--gutter) * 4);
			}

			& .romb_top {
				top: -50px;
			}

			& .romb_bottom {
				bottom: -50px;
			}
		}

		/* Кнопка перехода на следующий экран */
		& .next-screen-btn {
			position: absolute;
			bottom: var(--row);
			left: calc(50% - (var(--column) * 2 + var(--gutter) * 1) / 2);
			width: calc(var(--column) * 2 + var(--gutter) * 1);
			height: calc(var(--column) * 2 + var(--gutter) * 1);
		}
	}

}

/* Анимации и переходы */

/* Появление монитора */

.monitor-appear-enter,
.monitor-appear-leave-to {
	opacity: 0;
	transform: translateX(calc(var(--column) * 3 + var(--gutter) * 3));
}

.monitor-appear-enter-active,
.monitor-appear-leave-active {
	transition: opacity .1s ease-in, transform .55s ease-out;
}

/* Появление линии */

.line-appear-enter,
.line-appear-leave-to {
	opacity: 0;
}

.line-appear-enter-active,
.line-appear-leave-active {
	transition: opacity .3s ease-in .4s;
}

/* Появление заголовка */

.title-appear-enter,
.title-appear-leave-to {
	opacity: 0;
	transform: translateY(-20px);
}

.title-appear-enter-active,
.title-appear-leave-active {
	transition: opacity .3s ease-in .5s, transform .4s ease-in .5s;
}

/* Появление текста и кнопки */

.text-appear-enter,
.text-appear-leave-to {
	opacity: 0;
	transform: translateY(20px);
}

.text-appear-enter-active,
.text-appear-leave-active {
	transition: opacity .3s ease-in .5s, transform .4s ease-in .5s;
}
</style>
