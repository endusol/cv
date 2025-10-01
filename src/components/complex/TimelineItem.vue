<script setup>
import Tag from '@components/basic/Tag.vue'
import Responsive from '@components/basic/Responsive.vue';

const props = defineProps({
    start:       {type: String,        required: true},
    end:         {type: String,        required: false, default: null },
    position:    {type: String,        required: true},
    customer:    {type: String,        required: true},
    tags:        {type: Array[String], required: true},
    description: {type: String,        required: true}
});
function compose_work_period(start, end) {
    const parse = _ => new Date(_ ?? Date.now())
    const s = parse(start)
    const e = parse(end)

    const _ = (e.getFullYear() - s.getFullYear()) * 12 + e.getMonth() - s.getMonth()
    const d = `${Math.floor(_ / 12)}y ${_ % 12}m`

    const fmt = _ => _.toLocaleString('en-US', { month: 'short', year: 'numeric' })
    return `${fmt(s)} - ${fmt(end ? fmt(e) : 'Present')} (${d})`.replaceAll(' ', '\xa0')
}
</script>

<template>
<Responsive
    class="c c--timeline-item"
    :class="{ active: end === null }"
    :config="{ condensed: ({ sw, sh, ww, wh }) => sw <= 900 }"
>
    <div id="meta">
        <strong>{{ compose_work_period(props.start, props.end) }}</strong>
        <p>{{ props.position }}</p>
        <p style="font-size: 0.8em">{{ props.customer }}</p>
    </div>
    <hr/>
    <div id="main">
        <p>{{ props.description }}</p>
        <strong>Stack used:</strong>
        <div>
            <Tag v-for="_ in props.tags">{{ _ }}</Tag>
        </div>
    </div>
</Responsive>
</template>

<style>
.c--timeline-item {
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: subgrid;
    color: var(--clr--fnt--primary);
    column-gap: 4px;
}
.c--timeline-item > #meta,
.c--timeline-item > #main {
    border: solid 1px color-mix(in srgb, var(--clr--fnt--primary) 25%, transparent);
    border-radius: 7px;
    padding: 10px;
}
.c--timeline-item.active > #meta,
.c--timeline-item.active > #main { border: solid 2px var(--clr--accent--primary); }
.c--timeline-item > hr {
    margin: auto 0;
    aspect-ratio: 1;
    border-radius: 50%;
    width: 15px;
    box-shadow: inset 0 0 0 2px var(--clr--background);
    z-index: 1;
    background: color-mix(in srgb, var(--clr--fnt--primary) 25%, var(--clr--background));
    border: solid 2px #0000;
}
.c--timeline-item.active > hr {
    background: var(--clr--accent--primary);
    border: solid 2px var(--clr--accent--primary);
}
.c--timeline-item > #main > div {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
}
/* ========== CONDENSED ============================================================================================= */
.c--timeline-item.condensed { grid-template-columns: auto; }
.c--timeline-item.condensed > #meta {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
.c--timeline-item.condensed > #main {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-top: none;
}
.c--timeline-item.condensed.active > #main { margin-top: -2px; }
.c--timeline-item.condensed > hr { margin: -10px 1em; }
</style>
