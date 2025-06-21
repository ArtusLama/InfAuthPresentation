<template>
    <Toaster
        :theme="toastTheme"
        position="bottom-right"
        class="pointer-events-auto"
    />
</template>

<script lang="ts" setup>
import type { ToasterProps } from "vue-sonner"

const toastTheme = computed<ToasterProps["theme"]>(() => {
    const colorMode = useColorMode()
    const themes: ToasterProps["theme"][] = ["light", "dark", "system"]
    return themes.includes(colorMode.value as ToasterProps["theme"])
        ? colorMode.value as ToasterProps["theme"]
        : "system"
})
</script>
