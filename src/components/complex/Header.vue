<script setup>
import CVTitle        from '@components/complex/CVTitle.vue'
import Button         from '@components/basic/Button.vue'
import ThemesSwitcher from '@components/complex/ThemesSwitcher.vue'

function print_pdf() { print() }
</script>

<template>
<header class="c c--header">
    <div id="background"/>
    <section>
        <CVTitle/>
        <Button @click="print_pdf()">PRINT CV</Button>
        <p>Data Engineer with strong focus on Data Integration 
            and Data Quality automation. While my current focus is on 
            Data Integration Engineering, I bring extensive background
            in Data Quality engineering and test automation, which
            enables me to deliver robust, reliable, and
            business-ready data solutions.</p>
        <ThemesSwitcher/>
    </section>
</header>
</template>

<style>
.c--header {
    grid-column: 1 / -1;
    grid-row: 1;
    display: grid;
    grid-template-columns: subgrid;
    grid-template-rows: subgrid;
}
.c--header > #background {
    background: var(--clr--primary);
    grid-column: 1 / -1;
    grid-row: 1;
}
.c--header > section {
    grid-column: 3;
    grid-row: 1;
    margin-right: var(--br--avatar);
    display: grid;
    grid-template-columns: 110px 1fr auto;
    grid-template-rows: auto 1fr;
    grid-template-areas:
        'cv-title p themes-switcher'
        'button   p themes-switcher';
    row-gap: 10px;
    padding-bottom: 10px;
}
.c--header > section > .c--cv-title { z-index: 1; }
.c--header > section > .c--button {
    grid-area: button;
    margin: auto;
}
.c--header > section > p {
    grid-area: p;
    font-size: 16px;
    padding: 20px 30px;
    margin: auto;
    color: var(--clr--fnt--secondary);
}
.c--header > section > .c--themes-switcher {
    grid-area: themes-switcher;
    margin: auto;
}
@media (max-width: 1000px) {
    .c--header > #background {
        grid-column: 1 / 4;
    }
}
</style>
