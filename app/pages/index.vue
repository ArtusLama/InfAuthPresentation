<template>
    <div class="flex flex-col items-center justify-center h-screen gap-16">
        <h1 class="text-3xl font-bold">
            Choose an Authentication type
        </h1>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-8">
            <AuthTypeSelectCard
                to="/jwt-based"
                aria-label="JWT Authentication"
            >
                <IconJWT class="size-14" />
                <h2 class="font-semibold text-xl">
                    JWT Token
                </h2>
            </AuthTypeSelectCard>
            <AuthTypeSelectCard
                to="/session-based"
                aria-label="Session Authentication"
            >
                <Icon
                    name="lucide:database-backup"
                    class="size-14!"
                />
                <h2 class="font-semibold text-xl">
                    Session Auth
                </h2>
            </AuthTypeSelectCard>
            <AuthTypeSelectCard
                to="/oauth-based"
                aria-label="OAuth2 Authentication"
            >
                <NuxtImg
                    src="https://oauth.net/images/oauth-logo-square.png"
                    alt="OAuth2 Logo"
                    class="size-14"
                />
                <h2 class="font-semibold text-xl">
                    OAuth2
                </h2>
            </AuthTypeSelectCard>
        </div>
    </div>
</template>

<script lang="ts" setup>
useSeoMeta({
    title: "Home Page",
    description: "This is the home page of the application.",
})
</script>
