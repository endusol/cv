<script setup>
import Button from '@components/Button.vue'
import ThemesSwitcher from '@components/ThemesSwitcher.vue'
import Heading from '@components/Heading.vue'
import SkillLvl from '@components/SkillLvl.vue'
import Link from '@components/Link.vue'
import Timeline from '@components/Timeline.vue'
import TimelineItem from '@components/TimelineItem.vue'
import * as data from '@/data.json'

function print_pdf() { print() }
function copy(txt) { navigator.clipboard.writeText(txt) }
</script>

<template>
<img src="../../assets/avatar.png"/>
<div></div>
<header>
    <h1>{{ data.name }}</h1>
    <h3>{{ data.title }}</h3>
    <div><Button @click="print_pdf()">{{ data.buttons.print }}</Button></div>
    <p>{{ data.summary }}</p>
    <div><ThemesSwitcher/></div>
</header>
<aside>
    <Heading>{{ data.headings.skills }}</Heading>
    <ul>
        <SkillLvl v-for="lvl, skill in data.skills" :lvl="lvl">{{ skill }}</SkillLvl>
    </ul>
    <Heading>{{ data.headings.education }}</Heading>
    <ul>
        <li v-for="_ in data.education">{{ _ }}</li>
    </ul>
</aside>
<main>
    <Heading>{{ data.headings.career }}</Heading>
    <Timeline>
        <TimelineItem v-for="_ in data.career" v-bind="_" />
    </Timeline>
</main>
<footer>
    <Link v-for="_ in data.contacts" :hint="_.hint" :href="_.href" :svg="_.svg">
        {{ _.text }}
        <Button @click.prevent="copy(_.clipboard)">{{ data.buttons.copy }}</Button>
    </Link>
</footer>
</template>

<style>
:root {
    --w--avatar: 240px;
    --w--avatar--before-after: 20px;
    --b--avatar: 15px;
    --br--avatar: 30px;
}

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
body > header {
    grid-area: header;
    display: grid;
    grid-template-areas:
        'h1     p themes-switcher'
        'h3     p themes-switcher'
        'button p themes-switcher';
    grid-template-columns: 110px 1fr auto;
    grid-template-rows: auto auto 1fr;
    background: var(--clr--primary);
}
body > header > h1,
body > header > h3 {
    border-bottom-left-radius: 10px;
    width: max-content;
    justify-self: end;
    background: var(--clr--accent--secondary);
    color: var(--clr--fnt--primary);
    z-index: 2;
}
body > header > h1 {
    grid-area: h1;
    font-size: 34px;
    font-weight: 900;
    font-family: 'Rozha One';
    padding: 0 15px;
}
body > header > h3 {
    grid-area: h3;
    border-bottom-right-radius: 10px;
    font-weight: 500;
    padding: 0 30px 5px 15px;
    grid-area: h3;
    font-size: 20px;
}
body > header > div {
    padding: 10px 0;
    display: flex;
}
body > header > div:first-of-type { grid-area: button; }
body > header > div:first-of-type > .c--button {
    grid-area: button;
    margin: auto;
}
body > header > p {
    grid-area: p;
    font-size: 16px;
    padding: 20px 30px;
    margin: auto;
    color: var(--clr--fnt--secondary);
}
body > header > div:last-of-type {
    grid-area: themes-switcher;
    align-items: center;
    padding-right: var(--w--avatar--before-after);
}
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
    display: flex;
    flex-direction: column;
    gap: var(--w--avatar--before-after);
}
body > footer {
    grid-area: footer;
    display: grid;
    background: var(--clr--primary);
    grid-template-columns: auto auto auto auto;
    justify-content: center;
    gap: min(3vw, 15px);
    padding: min(3vw, 10px) min(10vw, 50px);
}

@media (max-width: 1000px) {
    :root { --w--avatar: 220px; }
    body > header { grid-template-columns: 100px 1fr auto; }
    body > header > h1 { font-size: 30px; }
    body > header > h3 { font-size: 18px; }
    body > footer { grid-template-columns: auto auto; }
}
@media (max-width: 900px) {
    :root {
        --w--avatar: 200px;
        --b--avatar: 10px;
    }
    body > header { grid-template-columns: 110px 1fr auto; }
}
@media (max-width: 800px) {
    :root {
        --w--avatar: 150px;
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
        margin-top: calc(var(--w--avatar--before-after) + 10px);
        border: none;
    }
    body > div {
        height: 100%;
        max-height: none;
    }
    body > div::before,
    body > div::after { content: none; }
    body > header { grid-template-columns: 100px 1fr; }
    body > header > h1 { font-size: 24px; }
    body > header > h3 { font-size: 16px; }
    body > header > p { padding: 20px; }
    body > main { margin-left: var(--w--avatar--before-after); }
    body > aside { width: auto; }
    body > aside > ul { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 700px) {
    body > header > h1 { font-size: 24px; }
    body > header > h3 { font-size: 16px; }
    body > header > p { padding: 15px 25px; }
}
@media (max-width: 600px) {
    body > header > p {
        font-size: 14px;
        padding: 10px 20px;
    }
    body > footer { grid-template-columns: auto; }
}
@media (max-width: 500px) {
    body > header {}
}
@media print {
    :root { --w--avatar: 220px; }
    body {
        grid-template-areas:
            'avatar header'
            'avatar footer'
            'aside  main  ';
        gap: 0;
        position: absolute;
        z-index: 0;
    }
    body > img {
        margin: var(--w--avatar--before-after);
        border: none;
        border-radius: 25px;
    }
    body > div {
        grid-area: 1 / 1 / 3 / 3;
        height: 100%;
        max-height: unset;
        z-index: -1;
    }
    body > div::before,
    body > div::after { content: none; }
    body > header {
        grid-template-areas:
            'h1 h3'
            'p  p';
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto 1fr;
    }
    body > header > h1,
    body > header > h3 {
        justify-self: center;
        padding: 5px 15px;
        background: none;
        color: var(--clr--fnt--secondary);
        font-family: Rajdhani;
        font-size: 26px;
        font-weight: 700;
    }
    body > header > h1 { border-bottom-right-radius: 10px; }
    body > header > p { padding: 0 20px; }
    body > header > div:first-of-type,
    body > header > div:last-of-type { display: none; }
    body > aside {
        width: calc(var(--w--avatar) - var(--w--avatar--before-after));
        margin-top: var(--w--avatar--before-after);
    }
    body > aside > ul { grid-template-columns: auto; }
    body > main { margin-top: var(--w--avatar--before-after); }
    body > footer {
        gap: 0;
        justify-content: space-evenly;
    }
    body > footer > .c--link > div {
        border: none;
        justify-content: flex-start;
    }
    body > footer > .c--link > span { display: none; }
    body > footer > .c--link .c--button { display: none; }
}
</style>
