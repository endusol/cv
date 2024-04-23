<script setup>
const props = defineProps([ 'indicator' ])

if (props.indicator.length > 4 || props.indicator.length < 0) {
    throw Error('Invalid indicator length. Must be between 0 and 4.')
}
</script>

<template>
<div class="c c--battery">
    <div v-for="_ in indicator"></div>
</div>
</template>

<style>
.c--battery {
    position: relative;
    width: 45px;
    height: 22px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    border: solid 2px var(--clr--fnt--primary);
    border-radius: 4px;
    gap: 2px;
    padding: 2px;
    box-sizing: border-box
}
.c--battery > div {
    background: var(--clr--fnt--primary);
    border-radius: 2px;
    flex: .25;
}
.c--battery::after {
    content: "";
    width: 6px;
    height: 10px;
    position: absolute;
    right: -6px;
    top: 4.5px;
    background-color: var(--clr--fnt--primary);
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
}
</style>
