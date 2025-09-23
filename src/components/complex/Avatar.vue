<script setup></script>

<template>
<div class="c c--avatar">
    <div/>
    <img src="https://endusol.github.io/cv/assets/avatar.png"/>
    <div/>
</div>
</template>

<style>
:root {
    --w--avatar: 300px;
    --b--avatar: 15px;
    --br--avatar: 30px;
}

.c--avatar {
    display: grid;
    grid-template-rows: subgrid;
    grid-template-columns: var(--br--avatar) var(--w--avatar) var(--br--avatar);
    width: calc(var(--w--avatar) + 2 * var(--br--avatar));
}
.c--avatar > img {
    box-sizing: border-box;
    aspect-ratio: 1;
    grid-row: 1 / 3;
    width: var(--w--avatar);
    position: relative;
    border: solid var(--b--avatar) var(--clr--primary);
    border-radius: calc(var(--br--avatar) + 20px);
    margin: 25px 0 0 0;
}
.c--avatar > div {
    grid-row: 1;
    width: var(--br--avatar);
    aspect-ratio: 1;
    place-self: end;
    margin-bottom: calc(-1 * var(--br--avatar));
    background: var(--clr--primary);
}
.c--avatar > div:nth-of-type(1) {
    mask: radial-gradient(circle var(--br--avatar) at 0 var(--br--avatar), transparent 0, transparent 99%, black 101%);
}
.c--avatar > div:nth-of-type(2) {
    mask: radial-gradient(circle var(--br--avatar) at var(--br--avatar) var(--br--avatar), transparent 0, transparent 99%, black 101%);
}
@media (max-width: 1200px) {
    :root {
        --w--avatar: 250px;
        --br--avatar: 25px;
    }
}
@media (max-width: 1000px) {
    :root {
        --w--avatar: 200px;
        --br--avatar: 20px;
    }
}
@media (max-width: 900px) {
    :root {
        --w--avatar: 150px;
        --br--avatar: 10px;
        --b--avatar: 10px;
    }
}
</style>
