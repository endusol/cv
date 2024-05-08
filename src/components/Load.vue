<script setup>
window.onload = () => {
	document.getElementsByClassName('c--load')[0].style.display = 'none'
}
</script>

<template>
<section class="c c--load">
	<img src="../assets/raccoon.gif">
	<hr>
	<hr>
	<hr>
	<hr>
	<hr>
</section>
</template>

<style>
.c--load {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	position: fixed;
	background: var(--clr--primary);
	z-index: 3;
}
.c--load > * {
	position: absolute;
	box-sizing: border-box;
}
.c--load > img {
	border-radius: 50%;
	border: solid black 2vh;
	aspect-ratio: 1;
	width: min(30vh, 30vw);
}
.c--load > hr {
	border-radius: 50%;
	aspect-ratio: 1;
	border: solid black 1vh;
	border-top-color: transparent;
	border-bottom-color: transparent;
	animation: spin linear infinite;
}
.c--load > hr:nth-of-type(1) {
	width: calc(min(30vh, 30vw) + 3vh);
	animation-duration: 16s;
	animation-delay: -4s;
}
.c--load > hr:nth-of-type(2) {
	width: calc(min(30vh, 30vw) + 6vh);
	animation-duration: 14s;
	animation-delay: -5s;
}
.c--load > hr:nth-of-type(3) {
	width: calc(min(30vh, 30vw) + 9vh);
	animation-duration: 12s;
	animation-delay: -6s;
}
.c--load > hr:nth-of-type(4) {
	width: calc(min(30vh, 30vw) + 12vh);
	animation-duration: 10s;
	animation-delay: -7s;
}
.c--load > hr:nth-of-type(5) {
	width: calc(min(30vh, 30vw) + 15vh);
	animation-duration: 8s;
	animation-delay: -8s;
}
@keyframes spin {
	0% {
	    -webkit-transform: rotate(0deg);
	    -ms-transform: rotate(0deg);
	    transform: rotate(0deg);
	}
	100% {
	    -webkit-transform: rotate(-360deg);
	    -ms-transform: rotate(-360deg);
	    transform: rotate(-360deg);
	}
}
</style>
