export default defineNuxtRouteMiddleware(() => {
    if (import.meta.server) return

    const { loggedIn } = useUserSession()

    if (!loggedIn.value) {
        return navigateTo("/oauth-based/login")
    }
})
