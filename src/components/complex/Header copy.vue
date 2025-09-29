<script setup>
import ThemesSwitcher from '@components/complex/ThemesSwitcher.vue'
import Button         from '@components/basic/Button.vue'
</script>

<template>
<header class="c c--header">
    <div id="background"/>
    <div id="avatar">
        <div/>
        <img src="https://endusol.github.io/cv/assets/avatar.png"/>
        <div/>
    </div>
    <section>
        <h1>DMITRI&nbsp;POZNYAKOV</h1>
        <h3><div/>DATA&nbsp;ENGINEER</h3>
        <p>
            Data Engineer with strong focus on Data Integration 
            and Data Quality automation. While my current focus is on 
            Data Integration Engineering, I bring extensive background
            in Data Quality engineering and test automation, which
            enables me to deliver robust, reliable, and
            business-ready data solutions.
        </p>
        <Button>PRINT&nbsp;CV</Button>
        <ThemesSwitcher/>
    </section>
</header>
</template>

<style>
.c--header {
    --avatar--width: 300px;
    --avatar--border-width: 20px;
    --avatar--border-radius: 35px;

    grid-row: 1 / 3;
    grid-column: 1 / -1;
    display: grid;
    grid-template-rows: subgrid;
    grid-template-columns: subgrid;
}
.c--header > * { grid-row: 1; }
.c--header > #background {
    grid-column: 1 / -1;
    background: var(--clr--primary);
}
.c--header > #avatar {
    grid-column: 2;
    grid-row: 1 / 3;  /* Note: not 1 / -1, as it should take exactly 2 rows, not all. */
    display: grid;
    grid-template-rows: subgrid;
    margin-top: 10px;
}
.c--header > #avatar > img {
    width: var(--avatar--width);
    aspect-ratio: 1;
    grid-row: 1 / -1;
    box-sizing: border-box;
    border: solid var(--avatar--border-width) var(--clr--primary);
    border-radius: var(--avatar--border-radius);
}
.c--header > #avatar > div {
    grid-row: 1;
    width: var(--avatar--border-radius);
    aspect-ratio: 1;
    place-self: end;
    margin-bottom: calc(-1 * var(--avatar--border-radius));
    background: var(--clr--primary);
    z-index: 10;
}
.c--header > #avatar > div:nth-of-type(1) {
    mask: radial-gradient(circle var(--avatar--border-radius) at 0 var(--avatar--border-radius), transparent 0, transparent 99%, black 101%);
}
.c--header > #avatar > div:nth-of-type(2) {
    mask: radial-gradient(circle var(--avatar--border-radius) at var(--avatar--border-radius) var(--avatar--border-radius), transparent 0, transparent 99%, black 101%);
}
.c--header > #avatar > img::before {
    content: '';
}
.c--header > section {
    grid-column: 3;
    display: grid;
    grid-template-areas:
        'h1     p themes-switcher'
        'h3     p themes-switcher'
        'button p themes-switcher';
    grid-template-rows: auto auto 1fr;
    grid-template-columns: 100px 1fr auto;
    margin-right: var(--avatar--border-radius);
    padding-bottom: 10px;
}
.c--header > section > h1,
.c--header > section > h3 {
    --border-radius: 10px;

    justify-self: end;
    width: max-content;
    z-index: 2;
    border-bottom-left-radius: var(--border-radius);
    background: var(--clr--accent--secondary);
    color: var(--clr--fnt--primary);
}
.c--header > section > h1 {
    grid-area: h1;
    padding: 0px 15px;
    font-family: "Rozha One";
    font-size: 34px;
    font-weight: 900;
}
.c--header > section > h3 {
    grid-area: h3;
    padding: 0px 35px 5px 20px;
    border-bottom-right-radius: var(--border-radius);
    font-size: 20px;
    font-weight: 500;
    position: relative;
    margin-bottom: 10px;
}
.c--header > section > h3 > div {
    mask: radial-gradient(circle var(--border-radius) at 0 var(--border-radius), transparent 0, transparent 99%, black 101%);
    z-index: 2;
    background: var(--clr--accent--secondary);
    height: var(--border-radius);
    aspect-ratio: 1;
    position: absolute;
    left: calc(-1 * var(--border-radius));
}
.c--header > section > p {
    grid-area: p;
    padding: 20px 30px;
}
.c--header > section > .c--button {
    grid-area: button;
    margin: auto;
}
.c--header > section > .c--themes-switcher {
    grid-area: themes-switcher;
    margin: auto auto auto 0;
}
@media (max-width: 900px) {
    .c--header {
        --avatar--width: min(300px, 40vw);
        --avatar--border-radius: 25px;

        grid-template-columns: auto 1fr;
    }
    .c--header > * { grid-row: 1 / 3; }
    .c--header > #background { grid-column: 1 / 4;}
    .c--header > #avatar > div { display: none; }
    .c--header > section {
        grid-template-columns: 130px 1fr auto;
        margin-right: var(--avatar--border-width);
    }
    .c--header > section > h1 { font-size: 28px; }
    .c--header > section > h3 { font-size: 18px; }
    .c--header > section > p { margin: auto; }
}
@media (max-width: 750px) {  /* TODO: SYNC THE SECTION WITH HEADER HELP: make header grid and use subgrid in section to place the button below the avatar. */
    .c--header {
        --avatar--border-radius: 20px;

        grid-template-rows: min(37px, 6vw) min(21px, 4vw) auto 1fr auto;
        grid-template-rows: min(37px, 6vw) min(21px, 4vw) auto auto 1fr;
    }
    .c--header > #background { grid-row: 1 / -1; }
    .c--header > #avatar { grid-row: 1 / 4; }
    .c--header > #avatar > img { border-width: 10px; }
    .c--header > section {
        grid-row: 1 / -1;
        grid-column: 1 / -1;
        grid-template-areas:
            '.      h1 . themes-switcher'
            '.      h3 . themes-switcher'
            '.      p  p p              '
            'button p  p p              '
            '.      p  p p              ';
        grid-template-areas:
            '.      h1 themes-switcher'
            '.      h3 themes-switcher'
            '.      p  p              '
            'button p  p              '
            '.      p  p              ';
        grid-template-columns: var(--avatar--width) min(120px, 40vw) auto;
        grid-template-rows: subgrid;
    }
    .c--header > section > h1 {
        /* height: min(37px, 6vw); */
        /* font-size: min(23px, 4vw); */
        height: min(40px, 9vw);
        font-size: min(28px, 5vw);
    }
    .c--header > section > h3 {
        /* height: min(21px, 4vw); */
        /* font-size: 16px; */
        height: 4vw;
        font-size: 16px;
    }
    .c--header > section > p {
        /* grid-row: 1 / -1; */
        /* grid-column: 1 / -1; */
    }
    .c--header > section > p::before {
        content: '';
    }
    .c--header > section > .c--themes-switcher {
        margin-top: 10px;
        margin-left: 10px;
    }
}
</style>
