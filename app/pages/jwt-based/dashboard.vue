<template>
    <div class="flex flex-col gap-8 items-center justify-center h-screen">
        <h1 class="text-2xl font-bold">
            This is the Dashboard
        </h1>
        <p>
            Hello {{ useJwtAuthStore().user?.email }}!
        </p>
        <UiButton @click="useJwtAuthStore().logout()">
            Logout
        </UiButton>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: ["jwt-auth"],
})
</script>
