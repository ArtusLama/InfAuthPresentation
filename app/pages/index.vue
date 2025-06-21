<template>
    <div class="flex flex-col items-center justify-center h-screen gap-8">
        <p>{{ $t("welcome") }}</p>

        <NuxtLinkLocale to="/loading">
            Go to loading site
        </NuxtLinkLocale>

        <LanguageSwitchButton />

        <UiButton @click="onBtnClick">
            <Icon name="lucide:box" />
            Click Me
        </UiButton>
        <ColorSchemeSwitchButton />
    </div>
</template>

<script lang="ts" setup>
function onBtnClick() {
    useToast().success("Button clicked!", {
        description: "You clicked the button successfully.",
        duration: 3000,
    })
}

defineOgImageComponent("Main")
useSeoMeta({
    title: "Home Page",
    description: "This is the home page of the application.",
})
</script>
