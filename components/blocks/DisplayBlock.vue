<template lang="html">
	<section id="display-block" class="display-block">
		<!-- Текстовый блок -->
		<div class="text-content">
			<!-- Декоративная линия -->
			<transition name="line-appear" mode="out-in">
				<RombLine v-if="isObserved" class="text__decore-line" />
			</transition>
			<!-- Заголовок -->
			<transition name="title-appear" mode="out-in">
				<h2 v-if="isObserved" class="text-content__title">
					Промышленные мониторы росcийского производства<br /><span
						>серии DNA от компании Ниеншанц-Автоматика</span
					>
				</h2>
			</transition>
			<!-- Общее описание монитора -->
			<transition name="text-appear" mode="out-in">
				<p v-if="isObserved" class="text-content__text">
					<span>
						Мониторы серий DNA-17 и DNA-19 были разработаны и
						сконструированы для применения в промышленной
						автоматизации. Прочный металлический корпус из
						маломагнитных материалов , защита IP 65 по передней
						панели, а также возможность работы в широком
						температурном диапазоне делают устройства серии DNA
						высоконадежными решениями для применения в тяжелых
						условиях производства. Мониторы Серия имеют сертификаты
						соответствия Таможенного Союза, подтверждающие
						соблюдение стандартов на промышленные устройства
						отображения информации.
					</span>

					<span
						>Лицевая панель монитора изготовлена из 10 мм листа
						алюминия и закалённого стекла, что обеспечивает высокую
						прочность и вандалоустойчивость устройства. Толстое
						закаленное стекло позволяет избежать повреждения экрана
						твёрдыми предметами, перчатками, а также защищает от
						разрушения при чрезмерных усилиях нажатия на
						экран.</span
					>
				</p>
			</transition>

			<!-- Кнопка перехода в каталог на сайт nnz-ipc.ru -->
			<transition name="text-appear" mode="out-in">
				<ActionButton v-if="isObserved" class="catalog-btn">
					<a
						href="https://nnz-ipc.ru/catalogue/front_man/front_display/"
						target="_blank"
						class="catalog"
						>перейти в каталог</a
					>
				</ActionButton>
			</transition>

			<!-- Логотипы -->
			<transition name="text-appear" mode="out-in">
				<div v-if="isObserved" class="logos">
					<!-- Лого Локальное производство -->
					<img
						class="logo-local"
						src="/img/local_logo.svg"
						alt="Логотип локальное производство"
					/>
					<!-- Лого Front Display -->
					<img
						class="logo-fd"
						src="/img/fd_logo_colored.svg"
						alt="Логотип Front Display"
					/>
				</div>
			</transition>
		</div>

		<!-- Блок с иллюстрацией -->
		<div class="illustration">
			<div class="device">
				<!-- Изображение монитора -->
				<transition name="monitor-appear" mode="out-in">
					<img
						v-if="isObserved"
						class="device__image"
						src="/img/monitor-display/dna_display.png"
						alt=""
					/>
				</transition>
				<!-- Ромбы -->
				<Romb
					v-for="(romb, index) in rombs"
					:key="`${index}-rmb`"
					:class="romb.class"
					:styleObj="romb.styleObj"
					:showCondition="isObserved"
				/>
			</div>
			<!-- Кнопка перехода на следующий экран -->
			<NextScreenButton
				class="next-screen-btn"
				:elem="'.features-block'"
			/>
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
			// Попал ли блок во вьюпорт
			isObserved: false,
			// Объекты робов
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
						left: '100px',
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
						left: '-1px',
						top: '-60px',
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
						bottom: '-120px',
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
						left: '-6px',
						bottom: '-160px',
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
						left: '10px',
						bottom: '-61px',
						opacity: '.3'
					}
				}
			]
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
		width: calc(var(--column) * 12 + var(--gutter) * 12);
		padding-left: calc(var(--column) + var(--gutter) + 50px);
		padding-right: calc(var(--column) * 3 + var(--gutter) * 3);
		padding-top: 150px;
		display: flex;
		flex-flow: column;
		justify-content: space-between;
		position: relative;

		& .text__decore-line {
			height: 70%;
			left: calc(var(--column) + var(--gutter));
		}

		& .text-content__title {
			position: relative;
			font-size: 1.1em;
			letter-spacing: 1.5px;
			line-height: .8;
			margin-bottom: 1em;

			& br {
				line-height: .8em;
			}

			& span {
				font-family: 'Clear Sans', sans-serif;
				font-size: 1.3em;
				font-weight: 100;
			}

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

		& .text-content__text {
			font-family: 'Clear Sans', sans-serif;

			& span {
				line-height: 1.8;
				display: block;

				&:first-child {
					margin-bottom: 1em;
				}
			}
		}

		& .catalog-btn {
			width: calc(var(--column) * 3 + var(--gutter) * 2);

			& a {
				display: block;
				width: 100%;
				padding: 10px;
				text-decoration: none;
			}
		}

		/* Логтипы */
		& .logos {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20px 0px;

			& .logo-fd,
			& .logo-local {
				width: calc(var(--column) * 3 + var(--gutter) * 2);
			}
		}
	}

	/* Графический контент */
	& .illustration {
		position: relative;
		padding-top: 20px;
		width: calc(var(--column) * 12 + var(--gutter) * 11);
		background: url('/img/monitor-display/background.jpg');
		background-repeat: no-repeat;
		background-size: cover;

		/* Блок с девайсом и ромбами */
		& .device {
			position: absolute;
			width: 100%;
			top: calc(var(--row) * 2 + var(--gutter) * 2);
			left: calc(-1 * (var(--column) * 2 + var(--gutter) * 3));
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

/* Верстка для мониторов с небольшим разрешением */
@media (1024px <= width < 1366px) {
	.display-block {
		& .text-content {
			width: calc(var(--column) * 15 + var(--gutter) * 14);

			& .text-content__text {
				line-height: 1.4em;
				& span {
					font-size: .9em;
					line-height: 1.4em;
				}
			}

			& .catalog-btn {
				width: calc(var(--column) * 5 + var(--gutter) * 4);
			}
		}

		& .illustration {
			width: calc(var(--column) * 9 + var(--gutter) * 9);
		}
	}
}

/* Верстка для мобильных */
@media (320px <= width < 1024px) {
	.display-block {
		flex-flow: column;
		text-align: center;
		min-height: 100vh;

		& .text-content {
			width: 100%;
			height: auto;
			padding: 20px;
			padding-top: 40px;

			& .logos {
				display: none;
			}

			& .text__decore-line {
				display: none;
			}

			& .text-content__title {
				position: relative;
				font-size: 1em;
				line-height: .8;
				margin-bottom: 40px;

				& br {
					line-height: .5em;
				}

				& span {
					font-family: 'Clear Sans', sans-serif;
					display: block;
					padding-top: 10px;
					font-size: 1em;
					font-weight: 100;
				}

				&:after {
					width: calc(var(--m-column) * 3 + var(--m-gutter) * 2);
					left: calc(50% - ((var(--m-column) * 3 + var(--m-gutter) * 2) / 2));
					bottom: -30px;
					height: 10px;
				}
			}

			& .text-content__text {
				line-height: 1.4;
				font-weight: 100;
				text-align: justify;
			}

			& .catalog-btn {
				width: calc(var(--m-column) * 10 + var(--m-gutter) * 9);
				margin: 0 auto;
			}
		}

		& .illustration {
			width: 100%;
			height: 60vh;

			& .device {

				top: calc(var(--m-row) + var(--m-gutter));
				left: calc((var(--m-column) * 3 + var(--m-gutter) * 3));
				height: calc(var(--m-row) * 4 + var(--m-gutter) * 3);

				& .romb {
					display: none;
				}

				/* Картинка монитора */
				& .device__image {
					width: calc(var(--m-column) * 6 + var(--m-gutter) * 5);
					height: auto;
				}

			}

			& .next-screen-btn {
				bottom: var(--m-row);
				left: calc(50% - (var(--m-column) * 3 + var(--m-gutter) * 2) / 2);
				width: calc(var(--m-column) * 3 + var(--m-gutter) * 2);
				height: calc(var(--m-column) * 3 + var(--m-gutter) * 2);
			}

		}

	}
}
</style>
