<script setup>
import { ref, onMounted } from 'vue'
import Icon from '@components/basic/Icon.vue'

const id = ref()
const root = document.documentElement
const on = {
    click: () => {
        if (id.value === 'moon') {
            id.value = 'sun'
            root.setAttribute('theme', 'light')
        } else {
            id.value = 'moon'
            root.setAttribute('theme', 'dark')
        }
    }
}
onMounted(() => {
    root.setAttribute('theme', 'dark')
    id.value = 'moon'
})
</script>

<template>
<button class="c c--themes-switcher" :id="id" @click="on.click">
    <Icon moon/>
    <Icon sun/>
</button>
</template>

<style>
[theme="light"] {
    --clr--background:        #fcfcfc;
    --clr--primary:           #2c3e38;
    --clr--secondary:         #081c1b;
    --clr--accent--primary:   #c8972c;
    --clr--accent--secondary: #c8972c;
    --clr--fnt--primary:      #081c1b;
    --clr--fnt--secondary:    #e6e0d1;
}
[theme="dark"] {
    --clr--background:        #0d1614;
    --clr--primary:           #274d4d;
    --clr--secondary:         #4f6e64;
    --clr--fnt--primary:      #99acab;
    --clr--fnt--secondary:    #cef1e6;
    --clr--accent--primary:   #0d542e;
    --clr--accent--secondary: #0c0311;
}
.c--themes-switcher {
    display: grid;
    grid-template-rows: 1fr 1fr;
    box-sizing: border-box;
    height: min(14vw, 70px);
    width: min(8vw, 40px);
    padding: min(1vw, 5px);
    border-radius: min(4vw, 20px);
    background: var(--clr--secondary);
    position: relative;
    justify-items: center;
    border: none;
    cursor: pointer;
}
.c--themes-switcher > .c--icon {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: min(1vw, 5px);
    fill: var(--clr--fnt--secondary);
}
.c--themes-switcher::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    width: min(6vw, 30px);
    aspect-ratio: 1;
    background-color: var(--clr--fnt--secondary);
    border-radius: 50%;
    transition: ease-in-out var(--tr);
}
.c--themes-switcher#sun::after { top: min(1vw, 5px); }
.c--themes-switcher#moon::after { top: min(7vw, 35px); }
</style>
