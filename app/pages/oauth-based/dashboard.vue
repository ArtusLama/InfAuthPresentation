<template>
    <div class="flex flex-col items-center justify-center h-screen">
        <p>Dashboard</p>
        <p>{{ useUserSession() }}</p>
        <UiButton @click="useUserSession().clear()">
            <Icon name="lucide:log-out" />
            Logout
        </UiButton>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: ["oauth"],
})

const { loggedIn } = useUserSession()

watch(loggedIn, () => {
    if (!loggedIn.value) {
        navigateTo("/oauth-based")
    }
})
</script>
