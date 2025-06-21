import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    modules: [
        "@nuxt/eslint",
        "@nuxt/fonts",
        "@nuxt/icon",
        "@nuxt/image",
        "@nuxtjs/i18n",
        "@nuxtjs/seo",
        "@nuxtjs/html-validator",
        "@nuxtjs/color-mode",
        "@vueuse/nuxt",
        "shadcn-nuxt",
        "vue-sonner/nuxt",
    ],

    colorMode: {
        classSuffix: "",
    },

    i18n: {
        defaultLocale: "en",
        locales: [
            {
                code: "en",
                language: "en-US",
                name: "English",
                file: "en.json",
            },
            {
                code: "de",
                language: "de-DE",
                name: "Deutsch",
                file: "de.json",
            },
        ],
        strategy: "prefix_except_default",
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: "i18n_redirected",
            redirectOn: "root",
        },
        bundle: {
            optimizeTranslationDirective: false,
        },
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
