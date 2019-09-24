<template lang="html">
	<!-- Первый дисплей -->
	<div class="first-display">
		<Menu class="menu" />
		<transition name="fade-in-bottom">
			<h1 v-if="showTitle" class="title">
				Российские промышленные мониторы<br />DNA-17 / DNA-19
			</h1>
		</transition>
		<!-- Кнопка перехода на следующий экран -->
		<transition name="fade-in-top" mode="out-in">
			<NextScreenButton
				v-if="showNextScreenButton"
				class="next-screen-btn"
				:elem="'#display-block'"
			></NextScreenButton>
		</transition>
		<!-- блок с фоном вырезанной роборуки -->
		<div alt="" class="arm" />
		<no-ssr>
			<vue-particles
				class="particles"
				color="#0bdbdd"
				:particle-size="6"
				:line-linked="false"
				shapeType="polygon"
			/>
		</no-ssr>
		<!-- логотип Ниеншанц-Автоматика -->
		<transition name="fade-in" mode="out-in">
			<img
				v-if="showLogo"
				src="/img/fd_logo.svg"
				alt=""
				class="nnz-logo"
			/>
		</transition>
	</div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import NextScreenButton from '@/components/UI/NextScreenButton.vue'

export default {
	components: {
		Menu,
		NextScreenButton
	},

	data() {
		return {
			showLogo: false,
			showTitle: false,
			showNextScreenButton: false
		}
	},

	mounted() {
		// Показываем лого
		setTimeout(() => (this.showLogo = true), 400)
		// Показываем заголовок и кнопку перехода на следующий экран
		setTimeout(() => {
			this.showTitle = true
			this.showNextScreenButton = true
		}, 600)
	}
}
</script>

<style lang="css" scoped>

.first-display {
    position: relative;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
    width: 100%;
    height: 100vh;
	margin-bottom: 0.5px;
    background-image: url('/img/first-display/background.jpg');
    background-size: cover;
	background-attachment: fixed;
	/* Заголовок */
    & .title {
        position: relative;
        z-index: 10;
        color: #fff;
        font-size: 2em;
        letter-spacing: .1rem;
        text-align: center;

		& br {
			line-height: 1.2;
		}
    }
	/* Отдельный фон с роборукой */
    & .arm {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 5;
        display: block;
        width: 100%;
        height: 100vh;
        background-image: url('/img/first-display/arm.png');
		background-attachment: fixed;
        background-size: cover;
    }
	/* лого ниеншанц */
    & .nnz-logo {
        z-index: 6;
        width: calc(var(--column) * 9 + var(--gutter) * 8);
        top: 40%;
        left: calc(var(--column) * 8 + var(--gutter) * 7);
    }
	/* блок с частицами */
    & .particles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
    }
	/*  */
	& .next-screen-btn {
		position: absolute;
		bottom: var(--row);
		left: calc(50% - (var(--column) * 2 + var(--gutter) * 1) / 2);
		width: calc(var(--column) * 2 + var(--gutter) * 1);
		height: calc(var(--column) * 2 + var(--gutter) * 1);
	}
}

/* Анимации и переходы */

/* Логотип */

.fade-in-enter,
.fade-in-leave-to {
    opacity: 0;
    transform: translateX(-20px);
}

.fade-in-enter-active,
.fade-in-leave-active {
    transition: opacity .3s ease-in, transform .35s ease-in;
	transition-delay: .4s;
}

/* Текст */

.fade-in-bottom-enter,
.fade-in-bottom-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

.fade-in-bottom-enter-active,
.fade-in-bottom-leave-active {
    transition: opacity .3s ease-in, transform .35s ease-in;
}

/* Кнопка */

.fade-in-top-enter,
.fade-in-top-leave-to {
	opacity: 0;
	transform: translateY(-20px);
}

.fade-in-top-enter-active,
.fade-in-top-leave-active {
    transition: opacity .3s ease-in, transform .35s ease-in;
}

/* Верстка для мониторов с небольшим разрешением */
@media (1024px <= width < 1366px) {
	.first-display {
		& .title {
			font-size: 1.4em;
		}
	}
}

/* Верстка для мобильных */
@media (320px <= width < 1024px) {
	.first-display {
		width: calc(var(--m-column) * 12 + var(--m-gutter) * 11);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;

		& .title {
			width: calc(var(--m-column) * 10 + var(--m-gutter) * 9);
			margin-top: 0px;
			padding-top: 20px;
			font-size: 1em;
		}

		& .nnz-logo {
			width: calc(var(--m-column) * 6 + var(--m-gutter) * 5);
			left: calc(var(--m-column) * 3 + var(--m-gutter) * 3);
		}

		& .next-screen-btn {
			bottom: var(--m-row);
			left: calc(50% - (var(--m-column) * 4 + var(--m-gutter) * 3) / 2);
			width: calc(var(--m-column) * 4 + var(--m-gutter) * 3);
			height: calc(var(--m-column) * 4 + var(--m-gutter) * 3);
		}
	}
}
</style>
