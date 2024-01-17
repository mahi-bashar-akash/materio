<template>
    <router-view/>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'auth',
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = to.meta.title || 'MahiBro';
            }
        },
    }
})
</script>
