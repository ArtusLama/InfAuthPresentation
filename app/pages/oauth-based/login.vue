<template>
    <div class="flex flex-col gap-8 items-center justify-center h-screen">
        <h1 class="text-2xl font-bold">
            You need to login to access the Dashboard!
        </h1>
        <div>
            <NuxtLink
                to="/api/auth/oauth/github"
                external
                :class="buttonVariants()"
            >
                <Icon
                    name="lucide:github"
                    :size="18"
                    class="mt-0.5"
                />
                Login using GitHub
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { buttonVariants } from "~/components/ui/button"

// https://auth-types-demo.vercel.app/
// https://auth-types-demo.vercel.app/api/auth/oauth/github
</script>
