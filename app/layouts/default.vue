<template>
    <div class="relative">
        <div class="fixed right-4 top-4 flex gap-2">
            <UiButton
                variant="outline"
                size="icon"
                as-child
            >
                <NuxtLink
                    to="/"
                    aria-label="Home"
                >
                    <Icon name="lucide:home" />
                </NuxtLink>
            </UiButton>
            <ColorSchemeSwitchButton />
        </div>
        <slot />
    </div>
</template>
