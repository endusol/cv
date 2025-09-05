<script setup>

</script>

<template>
<section class="c c--timeline">
    <!-- <hr/> -->
    <slot/>
</section>
</template>

<style>
.c--timeline {
    display: grid;
    grid-template-columns: 1fr auto 4fr;
    color: var(--clr--fnt--primary);
    column-gap: 5px;
    row-gap: 25px;
}
</style>
