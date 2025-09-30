<script setup>
import Heading      from '@components/basic/Heading.vue'
import Header       from '@components/complex/Header.vue'
import Footer       from '@components/complex/Footer.vue'
import SkillLvl     from '@components/complex/SkillLvl.vue'
import Timeline     from '@components/complex/Timeline.vue'
import TimelineItem from '@components/complex/TimelineItem.vue'
import * as data from '@data/data.json'
</script>

<template>
<Header/>
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
<Footer/>
</template>

<style>
:root {
    --reading-width: 1500px;                                    /* UX "safe" area. */
    --whitespace-width: calc(50vw - var(--reading-width) / 2);  /* Whitespaces before/after UX "safe" area. */
    --aside-width: 300px;
    --margin-vertical: 30px;
    --margin-horizontal: 35px;
}

body {
    min-height: 100vh;
    display: grid;
    grid-template-areas:
        'header header header header'
        '.      .      main   .     '
        '.      aside  main   .     '
        'footer footer footer footer';
    grid-template-columns: var(--whitespace-width) auto 1fr var(--whitespace-width);
    grid-template-rows: auto auto 1fr auto;
    background: var(--clr--background);
}
body > aside {
    grid-area: aside;
    margin: var(--margin-vertical) var(--margin-horizontal);
    width: var(--aside-width);
    display: flex;
    flex-direction: column;
    gap: 10px;
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
    margin: var(--margin-vertical) var(--margin-horizontal) var(--margin-vertical) 0;
}
body > main > .c--heading { margin-bottom: 10px; }
body > .c--footer { grid-area: footer; }
@media (max-width: 900px) {
    :root {
        --aside-width: 250px;
        --margin-vertical: 20px;
        --margin-horizontal: 20px;
    }
    body {
        grid-template-areas:
            'header header'
            '.      .     '
            'aside  main  '
            'footer footer';
        grid-template-columns: auto 1fr;
    }
}
@media (max-width: 650px) {
    body {
        grid-template-areas:
            'header header'
            '.      .     '
            'aside  aside '
            'main   main  '
            'footer footer';
    }
    body > aside { width: unset; }
    body > main {
        margin: var(--margin-vertical) var(--margin-horizontal);
        margin-top: 0;
    }
}
</style>
