<script setup>
import { ref } from 'vue'

const id = ref('sun')
const on = {
	click: () => {
		var root = document.documentElement
		if (id.value === 'moon') {
			id.value = 'sun'
			root.style.setProperty('--clr--background',        '#fcfcfc');
			root.style.setProperty('--clr--primary',           '#2c3e38');
			root.style.setProperty('--clr--secondary',         '#081c1b');
			root.style.setProperty('--clr--fnt--primary',      '#081c1b');
			root.style.setProperty('--clr--fnt--secondary',    '#e6e0d1');
			root.style.setProperty('--clr--accent--primary',   '#c8972c');
			root.style.setProperty('--clr--accent--secondary', '#c8972c');
		} else {
			id.value = 'moon'
			root.style.setProperty('--clr--background',        '#0d1614');
			root.style.setProperty('--clr--primary',           '#274d4d');
			root.style.setProperty('--clr--secondary',         '#4f6e64');
			root.style.setProperty('--clr--fnt--primary',      '#99acab');
			root.style.setProperty('--clr--fnt--secondary',    '#cef1e6');
			root.style.setProperty('--clr--accent--primary',   '#0d542e');
			root.style.setProperty('--clr--accent--secondary', '#0c0311');
		}
	}
}
</script>

<template>
<button class="c c--theme-switch" :id="id" @click="on.click">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
		<path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/>
	</svg>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/>
  	</svg>
</button>
</template>

<style>
.c--theme-switch {
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
.c--theme-switch > svg {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: min(1vw, 5px);
  fill: var(--clr--fnt--secondary);
}
.c--theme-switch::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  width: min(6vw, 30px);
  aspect-ratio: 1;
  background-color: var(--clr--fnt--secondary);
  border-radius: 50%;
  transition: ease-in-out var(--tr);
}
.c--theme-switch#sun::after { top: min(1vw, 5px); }
.c--theme-switch#moon::after { top: min(7vw, 35px); }
</style>
