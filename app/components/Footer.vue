<script setup>
import Link from './Link.vue'
import Button from './Button.vue'
</script>

<template>
<footer class="c c--footer">
	<Link hint="e-mail me!" href="mailto:pdima.endusol@gmail.com">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
		</svg>
		pdima.endusol@gmail.com
		<Button @click.prevent="console.log('minsk')">COPY</Button>
	</Link>
	<Link hint="link me!" href="https://www.linkedin.com/in/dmitri-poznyakov-61504818a/">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
			<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
		</svg>
		[ LinkedIn ]
		<Button @click.prevent="console.log('minsk')">COPY</Button>
	</Link>
	<Link hint="text me!" href="https://t.me/endusol">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
			<path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/>
		</svg>
		@endusol
		<Button @click.prevent="console.log('minsk')">COPY</Button>
	</Link>
	<Link hint="really?!" href="https://www.google.com/maps/place/@53.8841885,27.263738,10z">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
			<path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
		</svg>
		Minsk, Belarus
		<Button @click.prevent="console.log('minsk')">COPY</Button>
	</Link>
</footer>
</template>

<style>
.c--footer {
	background: var(--clr--green);
	display: grid;
	grid-template-columns: auto auto auto auto;
	justify-content: center;
	gap: 15px;
	padding: 10px 50px;
}
.c--footer > .c--link svg {
	height: 30px;
	fill: var(--clr--biege);
}

@media (max-width: 1000px) { .c--footer { grid-template-columns: auto auto; } }
@media (max-width: 600px) { .c--footer { grid-template-columns: auto; } }
</style>
