<script setup>
import { defineProps } from 'vue'

const props = defineProps([ "lvl" ])
</script>

<template>
<li class="c c--skill-lvl">
  <slot/>
  <hr>
  <div><hr v-for="_ in lvl.slice(0, 4)"/></div>
</li>
</template>

<style>
.c--skill-lvl {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  display: grid;
  grid-template-columns: auto 1fr auto;
  color: var(--clr--fnt--primary);
}
.c--skill-lvl > hr {
  height: 0;
  border-style: dashed;
  margin: auto;
  width: 100%;
  border: none;
  min-width: 10px;
  border-top: dotted 1.5px var(--clr--fnt--primary);
}
.c--skill-lvl > div {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: solid 2px var(--clr--fnt--primary);
  border-radius: 5px;
  gap: 2px;
  padding: 0 2px;
  margin: auto;
  height: fit-content;
}
.c--skill-lvl > div > hr {
  border: none;
  margin: 2px 0;
  width: 7px;
  height: 12px;
  background: var(--clr--fnt--primary);
  border-radius: 2px;
}
</style>
