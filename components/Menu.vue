<template lang="html">
	<!-- Меню -->
	<nav class="menu">
		<!-- Логотип -->
		<img
			src="/img/fd_logo.svg"
			alt="Логотип линейки промышленных мониторов Front Display"
			class="logo"
		/>
		<ul class="menu-list">
			<!-- Навигация по странице -->
			<li
				v-for="item in menuItems"
				:key="item.name"
				class="menu-list__item"
				@click.prevent="scrollTo(item.target)"
			>
				<a href="#">{{ item.name }}</a>
			</li>
			<!-- Кнопка купить -->
			<li class="menu-list__item">
				<ActionButton class="buy-btn">
					<a
						href="https://nnz-ipc.ru/catalogue/front_man/front_display/"
						target="_blank"
						class="buy"
						>купить</a
					>
				</ActionButton>
			</li>
		</ul>
	</nav>
</template>

<script>
import ActionButton from '@/components/UI/ActionButton.vue'

export default {
	components: {
		ActionButton
	},

	data() {
		return {
			// Массив с объектами элементов навигации по странице
			menuItems: [
				{
					name: 'монитор',
					target: '.display-block'
				},
				{
					name: 'особенности',
					target: '.features-block'
				},
				{
					name: 'модели',
					target: '.models-display'
				}
			]
		}
	},

	methods: {
		/**
		 * Скролл до нужного блока
		 * @param  {string} selector - сss селектор блока
		 * @return {undefined}
		 */
		scrollTo(selector) {
			document
				.querySelector(selector)
				.scrollIntoView({ behavior: 'smooth' })
		}
	}
}
</script>

<style lang="css" scoped>
/* Блок меню */
.menu {
    padding-top: 20px;
    padding-left: calc(var(--column) * 2 + var(--gutter) * 2);
    position: relative;
    display: flex;
    width: 100%;
    z-index: 1000;

	/* Лого Front-Display */
    & .logo {
		display: block;
        margin-right: calc(var(--column) + var(--gutter) * 2);
		width: calc(var(--column) * 3 + var(--row) * 3);
    }

	/* Список разделов навигации */
    & .menu-list {
        display: flex;
        list-style: none;
        color: #fff;
        width: 100%;
        align-items: center;

		/* Раздел */
        & .menu-list__item {
            display: block;
            margin-right: calc(var(--column) + var(--gutter) * 2);

            & > a {
                font-size: 1.5em;
                font-weight: 500;
                text-decoration: none;
            }

            & .buy-btn {
                width: calc(var(--column) * 2 + var(--gutter));

				& .buy {
					display: block;
					text-decoration: none;
					font-size: 1.5em;
					padding: 10px;
				}
            }
        }
		/* end Раздел */
    }
	/* end Список разделов навигации */
}
/* end Блок меню */

/* Верстка для мобильных */
@media (320px <= width < 1024px) {
	.menu {
		display: none;
	}
}
</style>
