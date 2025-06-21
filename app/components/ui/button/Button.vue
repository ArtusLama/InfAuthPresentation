<template>
    <Primitive
        data-slot="button"
        :as="as"
        :as-child="asChild"
        :class="cn(buttonVariants({ variant, size }), props.class)"
        :type="type"
    >
        <slot />
    </Primitive>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes, HTMLAttributes } from "vue"
import { Primitive, type PrimitiveProps } from "reka-ui"
import { type ButtonVariants, buttonVariants } from "."
import { cn } from "@/lib/utils"

interface Props extends PrimitiveProps {
    variant?: ButtonVariants["variant"]
    size?: ButtonVariants["size"]
    class?: HTMLAttributes["class"]
    type?: ButtonHTMLAttributes["type"]
}

const props = withDefaults(defineProps<Props>(), {
    as: "button",
    type: "button",
})
</script>
