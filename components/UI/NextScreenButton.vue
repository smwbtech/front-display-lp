<template lang="html">
	<div
		:class="[isAnimate ? 'button__animated' : '', 'button']"
		@click="scroll"
	>
		<img class="down-arrow" src="/img/down-arrow.svg" alt="" />
	</div>
</template>

<script>
export default {
	props: {
		elem: {
			type: String
		}
	},

	data() {
		return {
			isAnimate: false
		}
	},

	mounted() {
		setTimeout(() => (this.isAnimate = true), 800)
	},

	methods: {
		scroll() {
			if (this.elem) {
				document
					.querySelector(this.elem)
					.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}
}
</script>

<style lang="css" scoped>

.button {
	display: flex;
	position: relative;
	z-index: 10;
	justify-content: center;
	align-items: center;
	border: 3px solid #fff;
	border-radius: 100%;
	opacity: .8;
	cursor: pointer;

	&:before,
	&:after {
		position: absolute;
		content: "";
		display: block;
		border-radius: 100%;

	}

	&:before {
		border: 2px dotted #fff;
		width: 130%;
		height: 130%;
		top: -15%;
		left: -15%;
	}

	&:after {
		border: 1px solid #fff;
		width: 160%;
		height: 160%;
		top: -30%;
		left: -30%;

	}

	/* Анимированная кнопка */
	&.button__animated {
		animation: size 4s linear infinite;

		&:before {
			animation: spin 16s linear infinite;
		}

		&:after {
			animation: size 8s linear infinite;
		}
	}

	/* стрелка вниз */
	& .down-arrow {
		display: block;
		width: 70%;
	}

	/* По навидению останавливаем анимацию */
	&:hover {
		animation-play-state: paused;

		&:after,
		&:before {
			animation-play-state: paused;
		}
	}
}

/* Размер */

@keyframes size {
	0% { transform: scale(1); opacity: .8;}
	50% { transform: scale(.95); opacity: 1;}
	100% { transform: scale(1); opacity: .8;}
}

@keyframes spin {
	from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}

.fade-in-top-enter,
.fade-in-top-leave-to {
	opacity: 0;
	transform: translateY(-20px);
}

.fade-in-top-enter-active,
.fade-in-top-leave-active {
    transition: opacity .3s ease-in, transform .35s ease-in;
}
</style>
