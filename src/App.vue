<script setup>
import Heading      from '@components/basic/Heading.vue'
import Header       from '@components/complex/Header.vue'
import Avatar       from '@components/complex/Avatar.vue'
import SkillLvl     from '@components/complex/SkillLvl.vue'
import Timeline     from '@components/complex/Timeline.vue'
import TimelineItem from '@components/complex/TimelineItem.vue'
import Footer       from '@components/complex/Footer.vue'
import * as data from '@data/data.json'
</script>

<template>
<Avatar/>
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
body {
    min-height: 100vh;
    background: var(--clr--background);
    display: grid;
    grid-template-areas:
        'header header header header'
        '.      .      main   .     '
        '.      aside  main   .     '
        'footer footer footer footer';
    grid-template-columns: calc(50vw - 750px) auto 1fr calc(50vw - 750px);
    grid-template-rows: auto auto 1fr auto;
    min-width: 750px;
}
body > .c--avatar {
    grid-column: 2;
    grid-row: 1 / 3;
}
body > aside {
    grid-area: aside;
    grid-area: aside;
    width: var(--w--avatar);
    display: flex;
    flex-direction: column;
    margin: var(--br--avatar) var(--br--avatar) 0 var(--br--avatar);
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
body > aside > .c--heading:nth-of-type(2) { margin-top: var(--br--avatar); }
body > main {
    grid-area: main;
    margin: var(--br--avatar) var(--br--avatar) 0 0;
}
body > footer { grid-area: footer; }
@media (max-width: 1000px) {
    body {
        grid-template-areas:
            'header header header header'
            '.      aside  main   .     '
            'footer footer footer footer';
    }
    body > .c--avatar { grid-row: 1; }
}
@media (max-width: 1000px) {
    body {
        grid-template-areas:
            'avatar header'
            'aside  aside '
            'main   main  '
            'footer footer';
        grid-template-columns: var(--w--avatar) 1fr;
    }
    body > .c--header { grid-template-columns: var(--w--avatar) 1fr; }
    body > .c--avatar { grid-column: 1; }
    body > .c--avatar > div { display: none; }
    body > aside { width: unset; }
    body > aside,
    body > main { grid-column: 1 / -1; }
}
</style>
