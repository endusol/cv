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
	font-size: min(3.5vw, 14px);
}
.c--button.mobile,
.c--button:hover {
	transition: var(--tr) ease-in-out;
	border-color: var(--clr--secondary);
}
.c--button::before {
	content: "";
	display: block;
	transition: var(--tr) ease-in-out;
	z-index: -1;
	height: 0;
	width: 100%;
	position: absolute;
	bottom: 0;
	left: 0;
	border-radius: 50% 50% 0 0;
	background: var(--clr--secondary);
}
.c--button.mobile::before,
.c--button:hover::before {
	transition: var(--tr) ease-in-out;
	height: 180%;
}
.c--button:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: var(--tr--slow);
    box-shadow: inset 0 0 7px 12px var(--clr--accent--secondary);
}
.c--button:active::after {
    box-shadow: inset 0 0 0 0 var(--clr--secondary);
    opacity: 1;
    transition: 0s;
}
</style>
