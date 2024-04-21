<script setup>
const props = defineProps([ 'indicator' ])
</script>

<template>
<div class="c c--battery">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>
</template>

<style>
.c--battery {
    position: relative;
    width: 45px;
    height: 22px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    border: solid 2px var(--clr--dark-green);
    border-radius: 4px;
    gap: 2px;
    padding: 2px;
    box-sizing: border-box
}
.c--battery > div {
    background: var(--clr--dark-green);
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
    background-color: var(--clr--dark-green);
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
}
</style>
