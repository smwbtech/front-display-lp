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
		<!-- Список моделей -->
		<PageBlock>
			<ModelsBlock
				:items="items"
				@show-modal="modalWindowHandler"
			></ModelsBlock>
		</PageBlock>

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
		ModelsBlock,
		ModelFullView
	},

	data() {
		return {
			showModalWindow: false,
			tokenReceived: false,
			dataLoaded: false,
			sectionId: 297677,
			currentIndex: 0,
			items: []
		}
	},

	async asyncData() {
		const token = await getToken()
		const items = await getItems(token)
		return { items }
	},

	methods: {
		modalWindowHandler(index) {
			this.currentIndex = index
			this.showModalWindow = true
		}
	}
}
</script>

<style lang="css" scoped>

.footer {
	padding: 20px calc(var(--column) * 2 + var(--gutter));
	background: linear-gradient(45deg, var(--marine), var(--blue));
	color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;

	& .logo {
		display: block;
		width: calc(var(--column) * 4 + var(--gutter) * 3);

		& > img {
			width: 100%;
		}
	}

	& .adress-list {
		display: flex;
		justify-content: space-between;
		font-size: .8em;
		list-style: none;
		width: calc(var(--column) * 15 + var(--gutter) * 15);
		text-align: center;
		align-items: center;

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
}

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
	}
}
</style>
