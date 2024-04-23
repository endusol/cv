<script setup></script>

<template>
<button class="c c--button"><slot/></button>
</template>

<style>
.c--button {
	transition: var(--tr) ease-in-out;
	padding: 3px 11px;
	background: none;
	border: solid 1.5px var(--clr--fnt--secondary);
	border-radius: 6px;
	font-weight: 500;
	color: var(--clr--fnt--secondary);
	position: relative;
	z-index: 1;
	overflow: hidden;
	cursor: pointer;
}
.c--button:hover {
	transition: var(--tr) ease-in-out;
	border-color: var(--clr--secondary);
}
.c--button::before {
	content: "";
	display: block;
	transition: .3s ease-in-out;
	z-index: -1;
	height: 0;
	width: 100%;
	position: absolute;
	bottom: 0;
	left: 0;
	border-radius: 50% 50% 0 0;
	background: var(--clr--secondary);
}
.c--button:hover::before {
	transition: var(--tr) ease-in-out;
	height: 180%;
}
</style>
