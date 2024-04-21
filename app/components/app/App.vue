<script setup>
import Header from '../Header.vue'
import Aside from '../Aside.vue'
import Main from '../Main.vue'
import Footer from '../Footer.vue'
import './style.css'
import './layout.default.css'
import './layout.1000.css'
import './layout.900.css'
import './layout.800.css'
import './layout.700.css'
import './layout.600.css'
</script>

<template>
<img src="../../media/avatar.png"/>
<div></div>
<Header/>
<Aside/>
<Main/>
<Footer/>
</template>

<style>
body > .c--header { grid-area: header; }
body > .c--aside {
	grid-area: aside;
	margin: 0 var(--w--avatar--before-after);
}
body > .c--main {
	grid-area: main;
	margin-right: var(--w--avatar--before-after);
}
body > .c--footer { grid-area: footer; }
@media (max-width: 800px) { body > .c--main { margin-left: var(--w--avatar--before-after); } }
</style>
