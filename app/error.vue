<template>
    <div>
        <p>Error</p>
        <UiButton @click="handleError">
            Go to Home
        </UiButton>
    </div>
</template>

<script lang="ts" setup>
import type { NuxtError } from "#app"

defineProps<{
    error: NuxtError
}>()

function handleError() {
    clearError({
        redirect: "/",
    })
}
</script>
