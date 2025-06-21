<template>
    <div class="flex flex-col gap-8 items-center justify-center h-screen">
        <h1 class="text-2xl font-bold">
            Test
        </h1>
        <div>
            <NuxtLink
                to="/oauth-based/dashboard"
                :class="buttonVariants()"
                aria-label="Open Dashboard"
            >
                <Icon
                    name="lucide:layout-dashboard"
                    :size="18"
                    class="mt-0.5"
                />
                Open Dashboard
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { buttonVariants } from "~/components/ui/button"
</script>
