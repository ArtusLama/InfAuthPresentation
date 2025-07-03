declare module "nuxt/schema" {
    interface RuntimeConfig {
        jwtSecret: string
    }
}

declare module "h3" {
    interface H3EventContext {
        jwtAuthUser: UserData | null
    }
}

export {}
