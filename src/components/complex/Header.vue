<script setup>
import ThemesSwitcher from '@components/complex/ThemesSwitcher.vue'
import Button         from '@components/basic/Button.vue'
import general        from '@data/general.json'

function print_pdf() { print() }
</script>

<template>
<header class="c c--header">
    <div id="background"/>
    <div id="avatar">
        <div/>
        <img src="@assets/avatar.png"/>
        <div/>
    </div>
    <section>
        <h1>{{ general.name }}</h1>
        <h3><div/>{{ general.title }}</h3>
        <p>{{ general.summary }}</p>
        <Button @click="print_pdf()">PRINT&nbsp;CV</Button>
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
    max-width: 100vw;
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
    color: var(--clr--fnt--secondary);
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
        --avatar--width: min(250px, 40vw);
        --avatar--border-width: 10px;
        --avatar--border-radius: 25px;

        grid-template-areas:
            '.       . h1 themes-switcher'
            '.       . h3 themes-switcher'
            '.       p p  p              '
            'button  p p  p              '
            '.       p p  p              ';
        grid-template-columns: auto 1fr;
        grid-template-columns: var(--avatar--width) 1fr 130px auto;
        grid-template-rows: min(42px, 10vw) min(37px, 10vw) auto auto 1fr;
    }
    .c--header > * { grid-row: 1 / -1; }
    .c--header > #background { grid-column: 1 / 5; }
    .c--header > #avatar {
        grid-column: 1;
        grid-row: 1 / 4;
        margin-top: 15px;
    }
    .c--header > #avatar > div { display: none; }
    .c--header > section {
        grid-column: 1 / -1;
        grid-template-areas:
            '.       . h1 themes-switcher'
            '.       . h3 themes-switcher'
            '.       p p  p              '
            'button  p p  p              '
            '.       p p  p              ';
        grid-template-columns: subgrid;
        grid-template-rows: subgrid;
        margin-right: var(--avatar--border-width);
        padding-bottom: var(--avatar--border-width);
    }
    .c--header > section > h1 { font-size: min(29px, 7vw); }
    .c--header > section > h3 {
        font-size: min(18px, 4.7vw);
        line-height: min(15px, 4vw);
    }
    .c--header > section > p {
        margin: auto;
        grid-column: 1 / -1;
        padding: 10px 15px;
        grid-template-columns: subgrid;
        grid-template-rows: subgrid;
    }
    .c--header > section > p::before {
        content: '';
        float: left;
        grid-column: 1;
        grid-row: 1 / 4;
        width: var(--avatar--width);
        height: var(--avatar--width);
        margin-top: calc(-1 * (min(42px, 9vw) + min(37px, 6vw) - 26px));
        shape-outside: inset(0 round 0 0 50% 0);
    }
    .c--header > section > .c--themes-switcher { margin-left: var(--avatar--border-width); }
}
@media print {
    .c--header {
        --avatar--width: 250px;
        --avatar--border-width: 10px;
        --avatar--border-radius: 25px;

        grid-template-areas:
            'avatar h1 h3'
            'avatar p  p '
            '.      p  p ';
        grid-template-columns: auto 1fr;
        grid-template-rows: auto auto 1fr;
    }
    .c--header > * { grid-row: 1 / -1; }
    .c--header > #background { grid-column: 1 / 5; }
    .c--header > #avatar {
        grid-column: 1;
        grid-row: 1 / 4;
        margin-top: 0;
        margin: 20px;
    }
    .c--header > #avatar > img { border-width: 0; }
    .c--header > #avatar > div { display: none; }
    .c--header > section {
        grid-column: 2 / -1;
        grid-row: 1 / 3;
        grid-template-areas:
            'h1 h3'
            'p  p ';
        grid-template-columns: 1fr 1fr;
        grid-template-rows: subgrid;
        margin: 20px 20px 20px 0;
        padding-bottom: 0;
    }
    .c--header > section > h1,
    .c--header > section > h3 {
        background: none;
        line-height: unset;
        font-size: 28px;
        font-family: Rajdhani;
        font-weight: 600;
        align-self: center;
        justify-self: center;
        margin: 0;
        padding: 0;
        color: var(--clr--fnt--secondary);
    }
    .c--header > section > h3 > div { display: none; }
    .c--header > section > p {
        margin: auto;
        grid-area: p;
    }
    .c--header > section > p::before { content: unset; }
    .c--header > section > .c--button,
    .c--header > section > .c--themes-switcher { display: none; }
}
</style>
