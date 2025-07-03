<template>
    <div class="flex flex-col w-fit">
        <UiInput

            v-model="email"
            placeholder="E-Mail"
            class="mb-4"
            type="email"
        />

        <UiInput

            v-model="password"
            placeholder="Password"
            type="password"
            class="mb-4"
        />
        <UiButton
            class="w-full"
            @click="$emit('login', email, password)"
        >
            <Icon
                name="lucide:log-in"
                class="mr-2"
            />
            Login
        </UiButton>
    </div>
</template>

<script lang="ts" setup>
const email = ref("")
const password = ref("")

defineEmits<{
    (event: "login", email: string, password: string): void
}>()
</script>
