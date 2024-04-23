<script setup>
import Header from '../Header.vue'
import Footer from '../Footer.vue'
import Section from '../Section.vue'
import './style.css'
import './layout.default.css'
import './layout.1000.css'
import './layout.900.css'
import './layout.800.css'
import './layout.700.css'
import './layout.600.css'
import './layout.print.css'
</script>

<template>
<img src="../../media/avatar.png"/>
<div></div>
<Header/>
<aside>
	<Section header="SKILLS">skills</Section>
	<Section header="EDUCATION">education</Section>
</aside>
<main>
	<Section header="CAREER PATH">main</Section>
</main>
<Footer/>
</template>

<style></style>
