<template lang="html">
	<div class="button">
		<p class="button__text">
			<slot />
		</p>
		<div class="button__background" />
	</div>
</template>

<script>
export default {
	props: {}
}
</script>

<style lang="css" scoped>

.button {
    position: relative;
    border-radius: 60px;
    overflow: hidden;
    padding: 10px;
    cursor: pointer;

    & .button__text {
        z-index: 6;
        position: relative;
        padding: 0;
        margin: 0;
        color: #fff;
        text-align: center;
        font-weight: 500;
    }

    & .button__background {
        z-index: 5;
        position: absolute;
        left: -30%;
        top: -10%;
        width: 150%;
        height: 150%;
        background: linear-gradient(90deg,var(--marine), var(--blue));
        transition: all .3s ease-in;
    }

    &:hover {
        & .button__background {
            left: 0%;
        }
    }
}
</style>
