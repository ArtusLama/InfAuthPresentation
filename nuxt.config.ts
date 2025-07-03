import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    modules: [
        "@pinia/nuxt",
        "@nuxt/eslint",
        "@nuxt/fonts",
        "@nuxt/icon",
        "@nuxt/image",
        "@nuxtjs/seo",
        "@nuxtjs/html-validator",
        "@nuxtjs/color-mode",
        "@vueuse/nuxt",
        "shadcn-nuxt",
        "vue-sonner/nuxt",
        "nuxt-auth-utils",
    ],

    runtimeConfig: {
        jwtSecret: "", // is replaced by NUXT_JWT_SECRET at build time from .env file
    },

    colorMode: {
        classSuffix: "",
    },

    css: ["~/assets/css/main.css"],

    vite: {
        plugins: [
            tailwindcss(), // TODO: Use vite plugin until NuxtTailwind module v7 includes TailwindCSS v4
        ],
    },

    eslint: {
        config: {
            stylistic: true,
        },
    },

    future: {
        compatibilityVersion: 4,
    },
    compatibilityDate: "2025-05-15",
})
