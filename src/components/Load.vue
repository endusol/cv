<script setup></script>

<template>
<img src="../assets/raccoon.gif">
<hr>
<hr>
<hr>
<hr>
<hr>
</template>

<style>
body {
	display: flex;
	align-items: center;
	justify-content: center;
}
body > * {
	position: absolute;
	box-sizing: border-box;
}
body > img {
	border-radius: 50%;
	border: solid black 2vh;
	aspect-ratio: 1;
	width: min(30vh, 30vw);
}
body > hr {
	border-radius: 50%;
	aspect-ratio: 1;
	border: solid black 1vh;
	border-top-color: transparent;
	border-bottom-color: transparent;
	animation: spin linear infinite;
}
body > hr:nth-of-type(1) {
	width: calc(min(30vh, 30vw) + 3vh);
	animation-duration: 16s;
	animation-delay: -4s;
}
body > hr:nth-of-type(2) {
	width: calc(min(30vh, 30vw) + 6vh);
	animation-duration: 14s;
	animation-delay: -5s;
}
body > hr:nth-of-type(3) {
	width: calc(min(30vh, 30vw) + 9vh);
	animation-duration: 12s;
	animation-delay: -6s;
}
body > hr:nth-of-type(4) {
	width: calc(min(30vh, 30vw) + 12vh);
	animation-duration: 10s;
	animation-delay: -7s;
}
body > hr:nth-of-type(5) {
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
