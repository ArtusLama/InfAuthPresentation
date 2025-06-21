<template>
    <!-- TODO:: not best practice to use dynmic icon names, but it works for now -->
    <Icon :name="`circle-flags:${localeCode}`" />
</template>

<script lang="ts" setup>
defineProps<{
    localeCode: string
}>()
</script>
