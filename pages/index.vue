<template lang="html">
	<div class="content">
		<!-- Первый экран -->
		<PageBlock>
			<FirstDisplay />
		</PageBlock>
		<!-- Экран с подробной информацией о мониторе -->
		<PageBlock>
			<DisplayBlock />
		</PageBlock>
		<!-- Слайдер с особенностями -->
		<PageBlock><FeaturesBlock /></PageBlock>
		<!-- Технические особенности -->
		<PageBlock><TechnicalFeaturesBlock /></PageBlock>
		<!-- Список моделей -->
		<PageBlock>
			<ModelsBlock
				:items="items"
				@show-modal="modalWindowHandler"
			></ModelsBlock>
		</PageBlock>
		<!-- Footer -->
		<footer class="footer">
			<a href="https://nnz-ipc.ru/" target="_blank" class="logo">
				<img
					src="/img/nnz_logo.svg"
					alt="Логотип Ниеншанц-Автоматика"
				/>
			</a>
			<ul class="adress-list">
				<li>
					<span class="city">Санкт-Петербург</span><br /><a
						href="tel:+78123265924"
						>(812) 326-59-24</a
					><br /><a href="mailto:ipc@nnz.ru">ipc@nnz.ru</a>
				</li>
				<li>
					<span class="city">Москва</span><br /><a
						href="tel:+74959806406"
						>(495) 980-64-06 </a
					><br /><a href="mailto:msk@nnz.ru">msk@nnz.ru</a>
				</li>
				<li>
					<span class="city">Екатеринбург</span><br /><a
						href="tel:+73433119007"
						>(343) 311-90-07</a
					><br /><a href="mailto:ekb@nnz-ipc.ru">ekb@nnz-ipc.ru</a>
				</li>
				<li>
					<span class="city">Новосибирск</span><br /><a
						href="tel:+73833300518"
						>(383) 330-05-18</a
					><br /><a href="mailto:nsk@nnz-ipc.ru">nsk@nnz-ipc.ru</a>
				</li>
				<li>
					<span class="city">Алматы</span><br /><a
						href="tel:+77273469717 "
						>(727) 346-97-17 </a
					><br /><a href="mailto:kaz@nnz.ru">kaz@nnz.ru</a>
				</li>
			</ul>
		</footer>
		<transition name="modal-appear" mode="out-in">
			<ModelFullView
				v-if="showModalWindow"
				:model="items[currentIndex]"
				@close-modal="showModalWindow = false"
			></ModelFullView>
		</transition>
	</div>
</template>

<script>
import PageBlock from '@/components/PageBlock.vue'
import FirstDisplay from '@/components/blocks/FirstDisplay.vue'
import DisplayBlock from '@/components/blocks/DisplayBlock.vue'
import FeaturesBlock from '@/components/blocks/FeaturesBlock.vue'
import TechnicalFeaturesBlock from '@/components/blocks/TechnicalFeaturesBlock.vue'
import ModelsBlock from '@/components/blocks/ModelsBlock.vue'
import ModelFullView from '@/components/ModelFullView.vue'

import { getToken } from '@/assets/js/getToken.js'
import { getItems } from '@/assets/js/getItems.js'

export default {
	components: {
		PageBlock,
		FirstDisplay,
		DisplayBlock,
		FeaturesBlock,
		TechnicalFeaturesBlock,
		ModelsBlock,
		ModelFullView
	},

	data() {
		return {
			showModalWindow: false, // true - показываем окно с полной информацией о девайск
			tokenReceived: false, // true - токен авторизации получен
			dataLoaded: false, // true - данные о девайсах загружены
			sectionId: 297677, // id секции каталога nnz-ipc.ru, откуда получаем информацию о товарах
			currentIndex: 0, // девайс, который просматриваем
			items: [] // массив, содержащий объекты товаров
		}
	},

	/**
	 * Получение токена авторизации api.nnzipc.ru
	 * получение списка мониторов серии Front Display
	 * @async
	 * @return {Promise.<array>} - массив содержащий объекты товаров
	 */
	async asyncData() {
		const token = await getToken()
		const items = await getItems(token)
		return { items }
	},

	methods: {
		/**
		 * Показываем модальное окно с
		 * полной информацией о товаре
		 * @param  {number} index - порядковый индекс товара в массиве
		 * @return {udnefined}
		 */
		modalWindowHandler(index) {
			this.currentIndex = index
			this.showModalWindow = true
		}
	}
}
</script>

<style lang="css" scoped>
/* Footer */
.footer {
	padding: 20px calc(var(--column) * 4 + var(--gutter));
	background: linear-gradient(45deg, var(--marine), var(--blue));
	color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;

	/* Логотип */
	& .logo {
		display: block;
		width: calc(var(--column) * 4 + var(--gutter) * 3);

		& > img {
			width: 100%;
		}
	}

	/* Список адресов */
	& .adress-list {
		display: flex;
		justify-content: space-between;
		font-size: .8em;
		list-style: none;
		width: calc(var(--column) * 13 + var(--gutter) * 12);
		padding-right: var(--gutter);
		text-align: center;
		align-items: center;
		/* Город */
		& .city {
			font-family: 'Orpheus', serif;
		}

		& br {
			line-height: 1.2;
		}

		& a {
			text-decoration: none;
		}
	}
	/* end Список адресов */
}

/* end Footer */

/* Переходы и анимации */

.modal-appear-enter {
	transform: scale(.8);
	opacity: 0;
}

.modal-appear-leave-to {
	transform: scale(1.2);
	opacity: 0;
}

.modal-appear-enter-active,
.modal-appear-leave-active {
	transition: opacity .3s ease-in, transform .35s ease-out;
}

/* Верстка для мобильных */
@media (320px <= width < 1024px) {
	.content {
		width: 100vw;
		overflow-x: hidden;
	}

	.footer {
		flex-flow: column;

		& .logo {
			width: 50%;
		}

		& .adress-list {
			flex-flow: column;
			padding-right: 0;

			& li {
				margin-bottom: 20px;
			}
		}
	}

}
</style>
