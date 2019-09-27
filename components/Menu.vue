<template lang="html">
	<!-- Меню -->
	<nav class="menu">
		<!-- Логотип Front Display -->
		<img
			src="/img/nnz_logo.svg"
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
					name: 'защита',
					target: '.features-block'
				},
				{
					name: 'особенности',
					target: '.technical-block'
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
	position: fixed;
	top: 0;
	height: 120px;
    padding-left: calc(var(--column) + var(--gutter));
    display: flex;
	justify-content: space-between;
    width: 100%;
    z-index: 1000;
	overflow: hidden;

	&:before {
		position: absolute;
		left: 0;
		z-index: 1001;
		content: "";
		display: block;
		width: 100%;
		height: 200%;
		background: linear-gradient(rgba(0, 149, 218, .9), rgba(0, 149, 218, .7), rgba(0, 149, 218, 0));
		transform: translateY(-50%);
		transition: transform .3s ease-in;
	}

	&:hover {
		&:before {
			transform: translateY(00%);
		}
	}

	/* Лого Front-Display */
    & .logo {
position: relative;
		z-index: 1002;
		display: block;
        margin-right: calc(var(--column) + var(--gutter) * 2);
		width: calc(var(--column) * 2 + var(--row) * 1);
    }

	/* Список разделов навигации */
    & .menu-list {
		position: relative;
		z-index: 1002;
		padding-right: calc(var(--column) + var(--gutter));
        display: flex;
        list-style: none;
        color: #fff;
        align-items: center;

		/* Раздел */
        & .menu-list__item {
            display: block;
            margin-left: calc(var(--column) + var(--gutter) * 2);

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

/* Верстка для мониторов с небольшим разрешением */
@media (1024px <= width <= 1440px) {
	.menu {
		& .menu-list {
			& .menu-list__item {
				& > a {
					font-size: 1.2em;
				}

				& .buy-btn {
					width: calc(var(--column) * 3 + var(--gutter) * 2);
					& .buy {
						font-size: 1.2em;
					}
				}
			}
		}
	}
}

/* Верстка для мобильных */
@media (320px <= width < 1024px) {
	.menu {
		display: none;
	}
}
</style>
