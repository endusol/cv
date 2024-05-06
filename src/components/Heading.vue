<script setup></script>

<template>
<h2 class="c c--heading">
	<hr>
	<span><slot/></span>
</h2>
</template>

<style>
.c--heading {
	display: flex;
	position: relative;
	align-items: center;
	width: 100%;
}
.c--heading > hr {
	width: 100%;
	position: absolute;
	box-sizing: border-box;
	border: solid 1px var(--clr--fnt--primary);
	border-radius: 1px;
}
.c--heading > span {
	font-family: 'Rozha One';
	background: var(--clr--fnt--primary);
	color: var(--clr--background);
	padding: 0 15px;
	border-radius: 5px;
	margin: 0 auto;
	z-index: 1;
}
</style>
