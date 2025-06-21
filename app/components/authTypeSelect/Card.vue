<template>
    <NuxtLink :to="to">
        <div
            :class="buttonVariants({ variant: 'outline' })"
            class="flex flex-col gap-4 p-8! hover:-translate-y-2 hover:scale-105 w-40 h-44"
        >
            <slot />
        </div>
    </NuxtLink>
</template>

<script lang="ts" setup>
import { buttonVariants } from "../ui/button"

defineProps<{
    to?: string
}>()
</script>
