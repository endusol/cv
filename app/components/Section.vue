<script setup>
const props = defineProps(['header'])
</script>

<template>
<section class="c c--section">
	<h2>
		<hr>
		<span>{{ header }}</span>
	</h2>
	<slot/>
</section>
</template>

<style>
.c--section {}
.c--section > h2 {
	display: flex;
	position: relative;
	align-items: center;
	margin-bottom: 15px;
}
.c--section > h2 > hr {
	margin: auto 0;
	width: 100%;
	position: absolute;
	box-sizing: border-box;
	border: solid 1px var(--clr--dark-green);
	border-radius: 1px;
}
.c--section > h2 > span {
	font-family: 'Rozha One';
	background: var(--clr--dark-green);
	color: var(--clr--white);
	padding: 0 15px;
	border-radius: 5px;
	margin: 0 auto;
	z-index: 1;
}
</style>
