<template lang="html">
	<nav class="menu">
		<img src="/img/fd_logo.svg" alt="" class="logo" />
		<ul class="menu-list">
			<li class="menu-list__item">
				<a href="">монитор</a>
			</li>
			<li class="menu-list__item">
				<a href="">особенности</a>
			</li>
			<li class="menu-list__item">
				<a href="">модели</a>
			</li>
			<li class="menu-list__item">
				<ActionButton class="buy-btn">
					купить
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
	}
}
</script>

<style lang="css" scoped>
.menu {
    padding-top: 20px;
    padding-left: calc(var(--column) * 2 + var(--gutter) * 2);
    position: relative;
    display: flex;
    width: 100%;
    z-index: 1000;

    & .logo {
        margin-right: calc(var(--column) + var(--gutter) * 2);
    }

    & .menu-list {
        display: flex;
        list-style: none;
        color: #fff;
        width: 100%;
        align-items: center;

        & .menu-list__item {
            display: block;
            margin-right: calc(var(--column) + var(--gutter) * 2);

            & > a {
                font-size: 1.2em;
                font-weight: 500;
                text-decoration: none;
            }

            & .buy-btn {
                width: calc(var(--column) * 2 + var(--gutter));
            }
        }
    }
}
</style>
