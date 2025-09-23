<script setup>
import Header from '@components/complex/Header.vue'
import Footer from '@components/complex/Footer.vue'
</script>

<template>
<Style></Style>
<Header/>
<aside>aside block</aside>
<main>main block</main>
<Footer/>
</template>

<style>
:root {
    --reading-width: 1500px;                                    /* UX "safe" area. */
    --whitespace-width: calc(50vw - var(--reading-width) / 2);  /* Whitespaces before/after UX "safe" area. */
    --aside-width: 300px;
    --margin-vertical: 30px;
    --margin-horizontal: 40px;
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
    background: #20301040;
    width: var(--aside-width);
}
body > main {
    grid-area: main;
    margin: var(--margin-vertical) var(--margin-horizontal) var(--margin-vertical) 0;
    background: #10203040;
}
body > .c--footer {
    grid-area: footer;
    background: #08355288;
}
</style>
