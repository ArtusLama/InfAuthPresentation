<template>
    <div>
        <p>loading</p>
    </div>
</template>

<script lang="ts" setup>
await new Promise(resolve => setTimeout(resolve, 1000))

useSeoMeta({
    title: "", // This will cause the default title to be used
})
</script>
