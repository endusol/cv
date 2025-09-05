<script setup>
</script>

<template>
<span class="c c--tag"><slot/></span>
</template>

<style>
.c--tag {
    /* color: var(--clr--fnt--primary); */
    /* background: var(--clr--accent--primary); */
    color: var(--clr--fnt--secondary);
    background: var(--clr--primary);
    border-radius: 5px;
    padding: 1px 7px;
    font-size: 0.8em;
}
</style>
