<script setup>
import Icon from '@components/basic/Icon.vue'
</script>

<template>
<div class="c c--cv-title">
    <h1>DMITRI&nbsp;POZNYAKOV</h1>
    <h3>
        <Icon negative_border_radius__bl/>
        DATA&nbsp;ENGINEER
    </h3>
</div>
</template>

<style>
.c--cv-title > h1,
.c--cv-title > h3 {
    border-bottom-left-radius: 10px;
    width: max-content;
    justify-self: end;
    background: var(--clr--accent--secondary);
    color: var(--clr--fnt--primary);
}
.c--cv-title > h1 {
    grid-area: h1;
    font-size: 34px;
    font-weight: 900;
    font-family: 'Rozha One';
    padding: 0 15px;
}
.c--cv-title > h3 {
    grid-area: h3;
    border-bottom-right-radius: 10px;
    font-weight: 500;
    padding: 0 30px 5px 15px;
    font-size: 20px;
    position: relative;
}
.c--cv-title > h3 > .c--icon {
    grid-area: h3;
    display: inline-block;
    width: 10px;
    fill: var(--clr--accent--secondary);
    position: absolute;
    top: -11px;
    left: -10px;
}
</style>
