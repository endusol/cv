<script setup>
import Button from './Button.vue'
import ThemesSwitcher from './ThemesSwitcher.vue'
import Heading from './Heading.vue'
import SkillLvl from './SkillLvl.vue'
import * as data from '../data.json'

function print_pdf() { print() }
function copy(txt) { navigator.clipboard.writeText(txt) }
</script>

<template>
<header>
	<img src="../assets/avatar.png"/>
	<h1>{{ data.name }}</h1>
	<h3>{{ data.title }}</h3>
	<ThemesSwitcher />
	<div>
		<Button @click="print_pdf()" class="mobile">{{ data.buttons.print }}</Button>
	</div>
	<p>{{ data.summary }}</p>
</header>
<main>
	<Heading>{{ data.headings.skills }}</Heading>
	<ul>
		<SkillLvl v-for="lvl, skill in data.skills" :lvl="lvl">{{ skill }}</SkillLvl>
	</ul>
	<Heading>{{ data.headings.education }}</Heading>
	<ul>
		<li v-for="_ in data.education">{{ _ }}</li>
	</ul>
	<Heading>{{ data.headings.career }}</Heading>
	MOBILE VERSION OF THE SITE
</main>
<footer>
	<a v-for="_ in data.contacts" :hint="_.hint" :href="_.href">
		<svg v-html="_.svg.inner" :viewBox="_.svg.view_box"></svg>
		{{ _.text }}
		<Button @click.prevent="copy(_.clipboard)" class="mobile">{{ data.buttons.copy }}</Button>
	</a>
</footer>
</template>

<style>
body { background: var(--clr--background); }
body > header {
	display: grid;
	grid-template-areas:
		'avatar  h1      themes-switcher'
		'avatar  h3      themes-switcher'
		'avatar  summary summary        '
		'print   summary summary        ';
	grid-template-rows: auto auto auto 1fr;
	grid-template-columns: 1fr 2fr auto;
	column-gap: 3vw;
	background: var(--clr--primary);
	box-sizing: border-box;
	max-width: 100vw;
	padding: 0 3vw;
}
body > header > img {
	grid-area: avatar;
	box-sizing: border-box;
	width: 32vw;
	aspect-ratio: 1;
	border-radius: 2vw;
	margin: 6vw 0 0 0;
}
body > header > h1,
body > header > h3 {
	background: var(--clr--accent);
	color: var(--clr--fnt--primary);
	min-width: fit-content;
	height: fit-content;
	justify-self: end;
	border-bottom-left-radius: 2vw;
}
body > header > h1 {
	grid-area: h1;
	font-family: 'Rozha One';
	font-size: 6vw;
	padding: 0 4vw;
	height: 100%;
}
body > header > h3 {
	grid-area: h3;
	border-bottom-right-radius: 2vw;
	padding: 0 7vw 1vw 5vw;
	font-weight: 500;
	font-size: 4vw;
	width: max-content;
	position: relative;
}
body > header > h3::before,
body > header > h3::after {
	content: '';
	display: block;
	width: 2vw;
	height: 100%;
	position: absolute;
	top: 0;
	left: calc(-1 * 2vw);
}
body > header > h3::before { background: var(--clr--accent); }
body > header > h3::after {
	background: var(--clr--primary);
	border-top-right-radius: 2vw;
}
body > header > .c--theme-switch {
	grid-area: themes-switcher;
	margin-top: 3vw;
}
body > header > div {
	grid-area: print;
	margin: 3vw 0;
	display: flex;
}
body > header > div > .c--button { margin: auto; }
body > header > p {
	grid-area: summary;
	font-size: min(4vw, 22px);
	padding: 0 0 3vw 0;
	color: var(--clr--fnt--secondary);
}
body > main {
	color: var(--clr--fnt--primary);
	display: flex;
	flex-direction: column;
	gap: 3vw;
	margin: 3vw 5vw;
}
body > main > ul {
	display: flex;
	flex-direction: column;
	gap: 1vw;
	list-style: circle;
	color: var(--clr--fnt--primary);  /* Fixes WebKit Bug: https://bugs.webkit.org/attachment.cgi?id=68015&action=edit */
	transition: none;  /* Fixes WebKit Bug: https://bugs.webkit.org/attachment.cgi?id=68015&action=edit */
}
body > main > ul > li { list-style-position: inside; }
body > footer {
	background: var(--clr--primary);
	display: flex;
	flex-direction: column;
	gap: 2vw;
	padding: 5vw 10vw;
}
body > footer > a {
	box-sizing: border-box;
	display: flex;
	gap: 2vw;
	text-decoration: none;
	color: var(--clr--fnt--secondary);
	align-items: center;
	font-size: min(4vw, 14px);
	width: 100%;
	padding: 5px 10px;
	border: solid 1.5px var(--clr--fnt--secondary);
	border-radius: 6px;
	justify-content: space-between;
}
body > footer > a > svg {
	height: min(7vw, 30px);
	fill: var(--clr--fnt--secondary);
}
</style>
