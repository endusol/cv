<script setup>
import Button from '@components/basic/Button.vue'
import Icon   from '@components/basic/Icon.vue'
import is_mobile from '@/misc/is_mobile.js'

const props = defineProps({
    hint:      { type: String, required: false },
    href:      { type: String, required: true  },
    icon:      { type: String, required: true  },
    text:      { type: String, required: true  },
    clipboard: { type: String, required: true  }
})
function copy(txt) { navigator.clipboard.writeText(txt) }
</script>

<template>
<a 
    class="c c--contact-link"
    :class="{ mobile: is_mobile() }"
    :href="props.href"
    target="_blank"
    rel="noopener noreferrer"
>
    <span v-if="hint">{{ props.hint }}</span>
    <div>
        <Icon v-bind="{ [props.icon]: true }"/>
        {{ props.text }}
        <Button @click.prevent="copy(String(props.clipboard))">COPY</Button>
    </div>
</a>
</template>

<style>
.c--contact-link {
    position: relative;
    color: var(--clr--fnt--secondary);
    text-decoration: none;
    min-width: max-content;
    cursor: pointer;
}
.c--contact-link > span {
    position: absolute;
    top: 0;
    left: 10px;
    box-sizing: border-box;
    text-align: center;
    border-radius: 5px 5px 0 0;
    width: calc(100% - 20px);
    background: var(--clr--secondary);
    padding: 0 15px;
    height: 20px;
    line-height: 20px;
    transition: ease-in-out var(--tr--fast);
}
.c--contact-link:hover > span { top: -20px; }
.c--contact-link > div {
    display: flex;
    gap: 10px;
    padding: 5px 10px;
    border: solid 1.5px var(--clr--fnt--secondary);
    border-radius: 6px;
    align-items: center;
    position: relative;
    background: var(--clr--primary);
    justify-content: flex-start;
    justify-content: space-between;
}
.c--contact-link > div > svg {
    height: min(7vw, 30px);
    fill: var(--clr--fnt--secondary);
}
.c--contact-link.mobile > span { display: none; }
</style>
