<template lang="html">
	<section class="loading">
		<p class="loading__text">
			Загрузка
		</p>
		<div class="loading__indicator">
			<div class="progress" :style="progressWidth" />
		</div>
	</section>
</template>

<script>
export default {
	props: {
		total: {
			type: Number
		},
		current: {
			type: Number
		}
	},

	computed: {
		progressWidth() {
			return {
				width: `${(this.current / this.total) * 100}%`
			}
		}
	}
}
</script>

<style lang="css" scoped>

.loading {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10000;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;

    & .loading__text {
        text-align: center;
        color: #000;
        font-size: 1.5em;
        margin-bottom: 20px;
    }

    & .loading__indicator {
        width: 30%;
        height: 20px;
        background-color: #eee;

        & .progress {
            background: linear-gradient(.25turn,var(--blue), var(--marine));
            height: 100%;
            transition: width .3s ease-in;
        }
    }
}
</style>
