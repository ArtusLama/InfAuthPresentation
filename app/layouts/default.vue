<template>
    <div class="relative">
        <div class="fixed right-4 top-4 flex gap-2">
            <NuxtLink
                to="/"
                :class="buttonVariants({ variant: 'outline', size: 'icon' })"
            >
                <Icon name="lucide:home" />
            </NuxtLink>
            <ColorSchemeSwitchButton />
        </div>
        <slot />
    </div>
</template>

<script setup lang="ts">
import { buttonVariants } from "~/components/ui/button"
</script>
