export default defineNuxtRouteMiddleware(async () => {
    if (import.meta.server) return

    const jwtAuthStore = useJwtAuthStore()

    try {
        await jwtAuthStore.checkLoginStatus()

        if (!jwtAuthStore.loggedIn) {
            return navigateTo("/jwt-based/login")
        }
    } catch (error) {
        console.error("JWT Auth Middleware Error:", error)
        return navigateTo("/jwt-based/login")
    }
})
