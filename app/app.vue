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
useLocaleHead()
useHead({
    titleTemplate: t => t ? `${t} - My Cool Site` : "That is a Cool Site",
})
useSchemaOrg([
    // definePerson({ ... })
    // or other -> https://nuxtseo.com/docs/schema-org/guides/nodes
])
</script>
