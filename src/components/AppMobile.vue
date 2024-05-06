<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Heading from './Heading.vue'
import SkillLvl from './SkillLvl.vue'
import json__general from '../data/general.json'
</script>

<template>
<img src="../assets/avatar.png"/>
<div></div>
<Header/>
<aside>
	<Heading>SKILLS</Heading>
	<ul>
		<SkillLvl lvl="****">Python</SkillLvl>
		<SkillLvl lvl="****">Pandas/Polars</SkillLvl>
		<SkillLvl lvl="****">NumPy</SkillLvl>
		<SkillLvl lvl="****">Spark (PySpark)</SkillLvl>
		<SkillLvl lvl="***">Linux</SkillLvl>
		<SkillLvl lvl="***">SQL</SkillLvl>
		<SkillLvl lvl="***">Poetry</SkillLvl>
		<SkillLvl lvl="**">Apache Airflow</SkillLvl>
		<SkillLvl lvl="**">Java</SkillLvl>
		<SkillLvl lvl="**">[CI/CD] GitHub Actions</SkillLvl>
		<SkillLvl lvl="**">[CI/CD] Azure Pipelines</SkillLvl>
		<SkillLvl lvl="*">Apache Hadoop</SkillLvl>
	</ul>
	<Heading>EDUCATION</Heading>
	<ul>
		<li>BSUIR - Belarusian State University of Informatics and Radioelectronics</li>
		<li>EPAM University - Data Engineering Labaratory</li>
	</ul>
</aside>
<main>
	<Heading>CAREER PATH</Heading>
	MOBILE VERSION OF THE SITE
</main>
<Footer/>
</template>

<style>
body {
	display: grid;
	row-gap: var(--w--avatar--before-after);
    grid-template-areas:
    	'avatar header'
    	'avatar main  '
        'aside  main  '
        'footer footer';
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto 1fr auto;
    background: var(--clr--background);
}
body > img {
	box-sizing: border-box;
	width: var(--w--avatar);
	aspect-ratio: 1;
	grid-area: avatar;
	margin: var(--w--avatar--before-after) var(--w--avatar--before-after) 0 var(--w--avatar--before-after);
	z-index: 2;
	border: solid var(--b--avatar) var(--clr--primary);
	border-radius: var(--br--avatar);
}
body > div {
	grid-area: 1 / 1;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	z-index: 1;
	background: var(--clr--primary);
	height: calc(100% + var(--br--avatar));
	max-height: calc(var(--w--avatar) + 2 * var(--b--avatar) + var(--w--avatar--before-after) - var(--br--avatar));
}
body > div::before,
body > div::after {
	content: "";
	display: block;
	background: var(--clr--background);
	width: var(--w--avatar--before-after);
	height: var(--br--avatar);
}
body > div::before { border-top-right-radius: var(--w--avatar--before-after); }
body > div::after { border-top-left-radius: var(--w--avatar--before-after); }
body > .c--header { grid-area: header; }
body > aside {
	grid-area: aside;
	margin: 0 var(--w--avatar--before-after);
	width: var(--w--avatar);
	display: flex;
	flex-direction: column;
	gap: var(--w--avatar--before-after);
}
body > aside > ul {
	color: var(--clr--fnt--primary);
	display: grid;
	grid-template-columns: 1fr;
	gap: 5px 35px;
	list-style: circle;
	list-style-position: inside;
	transition: none;  /* Fixes WebKit Bug: https://bugs.webkit.org/attachment.cgi?id=68015&action=edit */
}
body > main {
	grid-area: main;
	margin-right: var(--w--avatar--before-after);
}
body > .c--footer { grid-area: footer; }
@media (max-width: 1000px) {
:root {
	--w--avatar: 220px;
	--w--avatar--before-after: 15px;
}
}
@media (max-width: 900px) {
:root {
	--w--avatar: 200px;

	--b--avatar: 10px;
}
}
@media (max-width: 800px) {
:root {
	--w--avatar: 190px;
	--w--avatar--before-after: 15px;
	--br--avatar: 15px;
}
body {
    grid-template-areas:
    	'avatar header'
        'aside  aside '
        'main   main  '
        'footer footer';
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto 1fr auto;
}
body > img {
	margin: var(--w--avatar--before-after);
	border: none;
}
body > div {
	height: 100%;
	max-height: none;
}
body > div::before,
body > div::after { content: none; }
body > main { margin-left: var(--w--avatar--before-after); }
body > aside { width: auto; }
body > aside > ul { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 700px) {
:root {
	--w--avatar: 170px;
}
}
@media (max-width: 600px) {
:root {
	--w--avatar: 160px;
}
}
@media print {
body {
    grid-template-areas:
    	'avatar header'
    	'avatar footer'
        'aside  main  ';
    gap: 0;
}
body > img {
	margin: 0 !important;
	border: solid 15px var(--clr--primary);
	border-radius: 25px;
	width: 220px !important;
}
body > div {
	grid-area: 1 / 1 / 3 / 3;
	height: 100%;
	max-height: unset;
	z-index: -1;
}
body > div::before,
body > div::after { content: none; }
body > aside { margin-top: var(--w--avatar--before-after); }
body > main { margin-top: var(--w--avatar--before-after); }
}
</style>
