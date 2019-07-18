<template lang="html">
	<!-- Первый дисплей -->
	<div class="first-display">
		<Menu />
		<transition name="fade-in-bottom">
			<h1 v-if="showTitle" class="title">
				Российские промышленные мониторы серии DNA диагональ 17” и 19’’
				производства «Ниешанц-Автоматика»
			</h1>
		</transition>
		<div alt="" class="arm" />
		<vue-particles
			class="particles"
			color="#0bdbdd"
			:particle-size="6"
			:line-linked="false"
			shapeType="polygon"
		/>
		<transition name="fade-in" mode="out-in">
			<img
				v-if="showLogo"
				src="/img/nnz_logo.svg"
				alt=""
				class="nnz-logo"
			/>
		</transition>
	</div>
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {
	components: {
		Menu
	},

	data() {
		return {
			showLogo: false,
			showTitle: false
		}
	},

	mounted() {
		// Показываем лого
		setTimeout(() => (this.showLogo = true), 400)
		// Показываем заголовок
		setTimeout(() => (this.showTitle = true), 600)
	}
}
</script>

<style lang="css" scoped>

.first-display {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: url('/img/first-display/background.jpg');
    background-size: cover;

    & .title {
        position: relative;
        z-index: 10;
        color: #fff;
        font-size: 1.4em;
        letter-spacing: .1rem;
        text-align: center;
        width: calc(var(--column) * 10 + var(--gutter) * 9);
        margin: 0 auto;
        margin-top: calc(var(--row) + var(--gutter));
    }

    & .arm {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 5;
        display: block;
        width: 100%;
        height: 100vh;
        background-image: url('/img/first-display/arm.png');
        background-size: cover;
    }

    & .nnz-logo {
        position: absolute;
        z-index: 4;
        width: calc(var(--column) * 9 + var(--gutter) * 8);
        top: 40%;
        left: calc(var(--column) * 8 + var(--gutter) * 7);
    }

    & .particles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
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
</style>
