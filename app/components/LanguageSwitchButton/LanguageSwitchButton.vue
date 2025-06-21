<template>
    <UiDropdownMenu>
        <UiDropdownMenuTrigger as-child>
            <UiButton
                variant="outline"
                class="flex items-center justify-center"
            >
                <Icon name="lucide:globe" />
                <span class="-mt-0.5">
                    {{ locale.toUpperCase() }}
                </span>
                <span class="sr-only">Switch language</span>
            </UiButton>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent>
            <UiDropdownMenuItem
                v-for="loc in locales"
                :key="loc.code"
            >
                <SwitchLocalePathLink
                    :locale="loc.code"
                    class="flex items-center gap-2"
                >
                    <LanguageSwitchButtonFlag :locale-code="loc.code" />
                    <p>{{ loc.name || loc.code.toUpperCase() }}</p>
                </SwitchLocalePathLink>
            </UiDropdownMenuItem>
        </UiDropdownMenuContent>
    </UiDropdownMenu>
</template>

<script lang="ts" setup>
const { locales, locale } = useI18n()
</script>
