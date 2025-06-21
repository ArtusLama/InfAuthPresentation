<template>
    <UiDropdownMenu>
        <UiDropdownMenuTrigger as-child>
            <UiButton
                variant="outline"
                size="icon"
            >
                <Icon
                    name="lucide:moon"
                    class="rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0"
                />
                <Icon
                    name="lucide:sun"
                    class="absolute rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100"
                />
                <span class="sr-only">Toggle theme</span>
            </UiButton>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent>
            <UiDropdownMenuItem @click="colorMode.preference = 'light'">
                <Icon name="lucide:sun" />
                Light
            </UiDropdownMenuItem>
            <UiDropdownMenuItem @click="colorMode.preference = 'dark'">
                <Icon name="lucide:moon" />
                Dark
            </UiDropdownMenuItem>
            <UiDropdownMenuItem @click="colorMode.preference = 'system'">
                <Icon name="lucide:monitor-cog" />
                System
            </UiDropdownMenuItem>
        </UiDropdownMenuContent>
    </UiDropdownMenu>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
</script>
