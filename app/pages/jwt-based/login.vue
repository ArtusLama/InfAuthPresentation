<template>
    <div class="flex flex-col gap-8 items-center justify-center h-screen">
        <h1 class="text-2xl font-bold">
            Login
        </h1>
        <FormLogin @login="(email, password) => login(email, password)" />
        <p class="text-sm text-muted-foreground/50">
            Example credentials: <br>
            <strong>email:</strong> <code>test@gmail.com</code> <br>
            <strong>password:</strong> <code>test123</code>
        </p>
    </div>
</template>

<script lang="ts" setup>
async function login(email: string, password: string) {
    useJwtAuthStore().login(email, password)
}
</script>
