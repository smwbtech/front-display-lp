<template lang="html">
	<div class="container">
		<div class="line" />
		<div class="romb" />
	</div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>

.container {
    position: absolute;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
	align-items: center;

    & .line {
        width: 3px;
        height: calc(100% - 40px);
        margin-bottom: 20px;
        background: linear-gradient(90deg, var(--marine), var(--blue));
    }

    & .romb {
        width: 20px;
        height: 20px;
        transform: rotate(45deg);
        background-color: var(--blue);
    }
}
</style>
