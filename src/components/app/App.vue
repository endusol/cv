<script setup>
import Header from '../Header.vue'
import Footer from '../Footer.vue'
import Heading from '../Heading.vue'
import SkillLvl from '../SkillLvl.vue'
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
<img src="../../assets/avatar.png"/>
<div></div>
<Header/>
<aside>
	<Heading>SKILLS</Heading>
	<ul>
		<SkillLvl lvl="****">Python</SkillLvl>
		<SkillLvl lvl="****">Pandas/Polars</SkillLvl>
		<SkillLvl lvl="****">NumPy</SkillLvl>
		<SkillLvl lvl="****">Spark (PySpark)</SkillLvl>
		<SkillLvl lvl="***">Linux</SkillLvl>
		<SkillLvl lvl="***">SQL</SkillLvl>
		<SkillLvl lvl="***">Poetry</SkillLvl>
		<SkillLvl lvl="**">Apache Airflow</SkillLvl>
		<SkillLvl lvl="**">Java</SkillLvl>
		<SkillLvl lvl="**">[CI/CD] GitHub Actions</SkillLvl>
		<SkillLvl lvl="**">[CI/CD] Azure Pipelines</SkillLvl>
		<SkillLvl lvl="*">Apache Hadoop</SkillLvl>
	</ul>
	<Heading>EDUCATION</Heading>
	<ul>
		<li>BSUIR - Belarusian State University of Informatics and Radioelectronics</li>
		<li>EPAM University - Data Engineering Labaratory</li>
	</ul>
</aside>
<main>
	<Heading>CAREER PATH</Heading>
	main
</main>
<Footer/>
</template>

<style></style>
