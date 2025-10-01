<script setup>
import ContactLink from '@components/complex/ContactLink.vue'
import contacts    from '@data/contacts.json'
</script>

<template>
<footer class="c c--footer">
    <div id="background"/>
    <section>
        <ContactLink v-for="_ in contacts" v-bind="_"/>
    </section>
</footer>
</template>

<style>
.c--footer {
    grid-area: footer;
    display: grid;
    grid-template-columns: subgrid;
    justify-content: center;
    margin-top: var(--br--avatar);
    max-width: 100vw;
}
.c--footer > * { grid-row: 1; }
.c--footer > #background {
    grid-column: 1 / -1;
    background: var(--clr--primary);
}
.c--footer > section {
    grid-column: 2 / -2;
    display: flex;
    gap: min(3vw, 15px);
    justify-content: center;
    align-items: center;
    margin: min(3vw, 10px) min(10vw, 50px);
}
@media (max-width: 1200px) {
    .c--footer { grid-template-columns: 1fr; }
    .c--footer > section {
        display: grid;
        grid-template-columns: auto auto;
        margin: min(3vw, 10px) auto;
    }
}
@media (max-width: 900px) {
    .c--footer > section { grid-template-columns: auto; }
}
@media print {
    .c--footer > section {
        display: grid;
        grid-template-columns: auto auto;
        margin: 0 auto;
    }
    .c--footer > section > .c--contact-link .c--button,
    .c--footer > section > .c--contact-link span { display: none; }
    .c--footer > section > .c--contact-link > div {
        border: none;
        justify-content: flex-start;
    }
}
</style>
