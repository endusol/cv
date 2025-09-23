<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({ config: Object })
const root = ref(null)
const classes = ref([])

const update_classes = () => {
    const sw = root.value.clientWidth
    const sh = root.value.clientHeight
    const ww = window.innerWidth
    const wh = window.innerHeight
    const temp = []

    for (const [c, fn] of Object.entries(props.config ?? {}))
        if (fn({ sw, sh, ww, wh }))
            temp.push(c)
    classes.value = temp
}

onMounted(() => {
    update_classes()
    window.addEventListener('resize', update_classes)
})
onBeforeUnmount(() => { window.removeEventListener('resize', update_classes) })
</script>

<template>
<div class="c c--responsive" :class="classes" ref="root"><slot/></div>
</template>

<style></style>
