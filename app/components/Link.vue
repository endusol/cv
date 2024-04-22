<script setup>
const props = defineProps(['hint'])
</script>

<template>
<a class="c c--link" target="_blank">
	<span>{{ hint }}</span>
	<div><slot/></div>
</a>
</template>

<style>
.c--link {
	position: relative;
	color: var(--clr--fnt--secondary);
	text-decoration: none;
	min-width: max-content;
	cursor: pointer;
}
.c--link > span {
	position: absolute;
	top: 0;
	left: 10px;
	box-sizing: border-box;
	text-align: center;
	border-radius: 5px 5px 0 0;
	width: calc(100% - 20px);
	background: var(--clr--secondary);
	padding: 0 15px;
	height: 20px;
	line-height: 20px;
	transition: ease-in-out .2s;
}
.c--link:hover > span { top: -20px; }
.c--link > div {
	display: flex;
	gap: 10px;
	padding: 5px 10px;
	border: solid 1.5px var(--clr--fnt--secondary);
	border-radius: 6px;
	align-items: center;
	position: relative;
	background: var(--clr--primary);
	justify-content: space-between;
}
</style>
