<template>
    <div class="relative">
        <input
            v-model="modelValue"
            data-slot="input"
            v-bind="attrs"
            :type="inputType"
            :class="cn(
                'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
                'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
                props.class,
            )"
        >
        <UiButton
            v-if="props.type === 'password'"
            class="absolute top-0 right-0"
            size="icon"
            variant="ghost"
            @click="showPassword = !showPassword"
        >
            <Icon
                :name="showPassword ? 'lucide:eye-off' : 'lucide:eye'"
            />
        </UiButton>
    </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { useVModel } from "@vueuse/core"
import { useAttrs } from "vue"
import { cn } from "@/lib/utils"
import { UiButton } from "#components"

const props = withDefaults(
    defineProps<{
        defaultValue?: string | number
        modelValue?: string | number
        class?: HTMLAttributes["class"]
        type?: string
    }>(), {
        type: "text",
    },
)

const emits = defineEmits<{
    (e: "update:modelValue", payload: string | number): void
}>()

const modelValue = useVModel(props, "modelValue", emits, {
    passive: true,
    defaultValue: props.defaultValue,
})

const showPassword = ref(false)
const attrs = useAttrs()

const inputType = computed(() => {
    if (props.type === "password") {
        return showPassword.value ? "text" : "password"
    }
    return props.type
})
</script>
