<template lang="html">
	<section id="display-block" class="display-block">
		<!-- Лого Front Display -->
		<img
			class="logo"
			src="/img/fd_logo_colored.svg"
			alt="Логотип Front Display"
		/>
		<!-- Текстовый блок -->
		<div class="text-content">
			<!-- Декоративная линия -->
			<transition name="line-appear" mode="out-in">
				<RombLine v-if="isObserved" class="text__decore-line" />
			</transition>
			<!-- Заголовок -->
			<transition name="title-appear" mode="out-in">
				<h2 v-if="isObserved" class="text-content__title">
					промышленные мониторы росcийского производства<br /><span
						>серии DNA от компании Ниеншанц-Автоматика</span
					>
				</h2>
			</transition>
			<!-- Общее описание монитора -->
			<transition name="text-appear" mode="out-in">
				<p v-if="isObserved" class="text-content__text">
					Промышленные мониторы серии DNA, полностью разработаны
					конструкторской группой компании, обладают рядом
					конструктивных особенностей и широким набором дополнительных
					функций. Мониторы сочетают современный промышленный дизайн и
					надежную элементную базу. Серия имеет сертификаты
					соответствия ТС № RUC-RU.A310.B.06475 подтверждающий
					соблюдение стандартов на промышленные устройства отображения
					информации.
				</p>
			</transition>
			<transition name="text-appear" mode="out-in">
				<p v-if="isObserved" class="text-content__text">
					Прочный алюминиевый корпус, защита IP 65 по передней панели,
					а также возможность работы в широком температурном диапазоне
					делают устройства серии DNA высоконадежными решениями для
					применения в тяжелых условиях производства.
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
		<!-- Лого Локальное производство -->
		<img
			class="logo-local"
			src="/img/local_logo.svg"
			alt="Логотип локальное производство"
		/>
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

	/* Логотип Front Display */
	& .logo,
	& .logo-local {
		position: absolute;
		left: calc(var(--column) + var(--gutter));
		width: calc(var(--column) * 3 + var(--row) * 3);
	}

	& .logo {
		top: 20px;
	}

	/* Логотип локальное производство */
	& .logo-local {
		bottom: 20px;
		width: calc(var(--column) * 2 + var(--row) * 2);
	}

	/* Текстовый контент */
	& .text-content {
		height: 100vh;
		width: calc(var(--column) * 14 + var(--gutter) * 14);
		padding-left: calc(var(--column) * 2 + var(--gutter) * 2);
		padding-right: calc(var(--column) * 4 + var(--gutter) * 4);
		display: flex;
		flex-flow: column;
		justify-content: center;
		position: relative;

		& .text__decore-line {
			height: 50%;
			left: calc(var(--column) + var(--gutter));
		}

		& .text-content__title {
			position: relative;
			font-size: 1.2em;
			letter-spacing: 1.5px;
			line-height: .8;
			margin-bottom: 40px;

			& br {
				line-height: .8em;
			}

			& span {
				font-family: 'Clear Sans', sans-serif;
				font-size: 1.4em;
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

			& a {
				display: block;
				width: 100%;
				padding: 10px;
				text-decoration: none;
			}
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
			left: calc(-1 * (var(--column) * 3 + var(--gutter) * 3));
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

/* Верстка для мобильных */
@media (320px <= width < 1024px) {
	.display-block {
		flex-flow: column;
		text-align: center;

		& .logo,
		& .logo-local {
			display: none;
		}

		& .text-content {
			width: 100%;
			height: auto;
			padding: 20px;

			& .text__decore-line {
				display: none;
			}

			& .text-content__title {
				position: relative;
				font-size: .6em;
				line-height: .8;
				margin-bottom: 40px;

				& br {
					line-height: .3em;
				}

				& span {
					font-family: 'Clear Sans', sans-serif;
					font-size: 2em;
					font-weight: 100;
				}

				&:after {
					width: calc(var(--m-column) * 3 + var(--m-gutter) * 2);
					left: calc(50% - ((var(--m-column) * 3 + var(--m-gutter) * 2) / 2));
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
