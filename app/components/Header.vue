<script setup>
import Button from './Button.vue'
import ThemeSwitch from './ThemeSwitch.vue'
</script>

<template>
<header class="c c--header">
	<h1>DMITRI POZNYAKOV</h1>
	<h3>DATA ENGINEER</h3>
	<div><Button>PRINT CV</Button></div>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare elit urna, in ultricies neque aliquam nec. Nam dui ipsum, mattis vitae posuere vitae, interdum ac orci. Sed turpis risus, ultricies sit amet egestas in, scelerisque eget purus.</p>
	<div><ThemeSwitch/></div>
</header>
</template>

<style>
.c--header {
	display: grid;
	grid-template-areas:
		'h1     p themes-switcher'
		'h3     p themes-switcher'
		'button p themes-switcher';
	grid-template-columns: 110px 1fr auto;
	grid-template-rows: auto auto 1fr;
	background: var(--clr--green);
}
.c--header > h1,
.c--header > h3 {
	border-bottom-left-radius: 10px;
	width: max-content;
	justify-self: end;
	background: var(--clr--orange);
	color: var(--clr--dark-green);
	z-index: 2;
}
.c--header > h1 {
	grid-area: h1;
	font-size: 34px;
	font-weight: 900;
	font-family: 'Rozha One';
	padding: 0 15px;
}
.c--header > h3 {
	grid-area: h3;
	border-bottom-right-radius: 10px;
	font-weight: 500;
	padding: 0 30px 5px 15px;
	grid-area: h3;
	font-size: 20px;
}
.c--header > div {
	padding: 10px 0;
	display: flex;
}
.c--header > div:first-of-type { grid-area: button; }
.c--header > div:first-of-type > .c--button {
	grid-area: button;
	margin: auto;
}
.c--header > p {
	grid-area: p;
	font-size: 16px;
	padding: 20px 30px;
	margin: auto;
	color: var(--clr--biege);
}
.c--header > div:last-of-type {
	grid-area: themes-switcher;
	align-items: center;
	padding-right: var(--w--avatar--before-after);
}

@media (max-width: 1000px) {
.c--header { grid-template-columns: 100px 1fr; }
.c--header > h1 { font-size: 30px; }
.c--header > h3 { font-size: 18px; }
}

@media (max-width: 900px) { .c--header { grid-template-columns: 115px 1fr; } }

@media (max-width: 800px) {
.c--header { grid-template-columns: 100px 1fr; }
.c--header > h1 { font-size: 24px; }
.c--header > h3 { font-size: 16px; }
}

@media (max-width: 700px) {
.c--header > h1 { font-size: 24px; }
.c--header > h3 { font-size: 16px; }
.c--header > p {
	font-size: 15px;
	padding: 15px 25px;
}
}

@media (max-width: 600px) {
.c--header > p {
	font-size: 14px;
	padding: 10px 20px;
}
}
</style>
