<template>
    <div>
        <NuxtRouteAnnouncer />
        <NuxtLoadingIndicator
            color="var(--color-primary)"
        />

        <ToasterRoot />

        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script lang="ts" setup>
useHead({
    titleTemplate: t => t ? `${t} - My Cool Site` : "That is a Cool Site",
})
</script>
