<template>
    <div class="flex flex-col items-center justify-center h-screen gap-16">
        <p class="text-3xl font-bold">
            Choose an Authentication type
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-8">
            <AuthTypeSelectCard
                to="/jwt-based"
            >
                <IconJWT class="size-14" />
                <p class="font-semibold text-xl">
                    JWT Token
                </p>
            </AuthTypeSelectCard>
            <AuthTypeSelectCard
                to="/session-based"
            >
                <Icon
                    name="lucide:database-backup"
                    class="size-14!"
                />
                <p class="font-semibold text-xl">
                    Session Auth
                </p>
            </AuthTypeSelectCard>
            <AuthTypeSelectCard
                to="/oath-based"
            >
                <NuxtImg
                    src="https://oauth.net/images/oauth-logo-square.png"
                    alt="OAuth2 Logo"
                    class="size-14"
                />
                <p class="font-semibold text-xl">
                    OAuth2
                </p>
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
