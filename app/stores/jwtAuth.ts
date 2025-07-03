export const useJwtAuthStore = defineStore("jwtAuth", {
    state: () => ({
        loggedIn: false,
        user: null as UserData | null,
    }),
    actions: {
        _getToast() {
            try {
                return useToast()
            } catch {
                return null
            }
        },

        async checkLoginStatus() {
            const toast = this._getToast()
            const promise = $fetch("/api/auth/jwt/isAuthenticated")
                .then((data) => {
                    this.loggedIn = data.isAuthenticated
                    this.user = data.user
                    return "You are logged in."
                })
                .catch((error: unknown) => {
                    this.loggedIn = false
                    let message = "An error occurred while checking authentication status."
                    if (typeof error === "object" && error !== null) {
                        // @ts-expect-error error object from $fetch may have data/message
                        message = error.data?.message || error.message || message
                    }
                    throw message
                })

            if (toast) {
                return toast.promise(promise, {
                    loading: "Checking authentication...",
                    success: (msg: string) => msg,
                    error: (msg: string) => msg,
                })
            }
            return promise
        },

        login(email: string, password: string) {
            const toast = this._getToast()
            const promise = $fetch("/api/auth/jwt/login", {
                method: "POST",
                body: { email, password },
            })
                .then((data) => {
                    if (!data.success) {
                        throw new Error(data.message || "Login failed")
                    }
                    this.loggedIn = true
                    navigateTo("/jwt-based/dashboard")
                    return "You have successfully logged in."
                })
                .catch((error: unknown) => {
                    let message = "An error occurred during login."
                    if (typeof error === "object" && error !== null) {
                        // @ts-expect-error error object from $fetch may have data/message
                        message = error.data?.message || error.message || message
                    }
                    throw message
                })

            if (toast) {
                return toast.promise(promise, {
                    loading: "Logging in...",
                    success: (msg: string) => msg,
                    error: (msg: string) => msg,
                })
            }
            return promise
        },

        logout() {
            const toast = this._getToast()
            const promise = $fetch("/api/auth/jwt/logout", {
                method: "POST",
            })
                .then(() => {
                    this.loggedIn = false
                    navigateTo("/jwt-based/login")
                    return "You have successfully logged out."
                })
                .catch((error: unknown) => {
                    let message = "An error occurred during logout."
                    if (typeof error === "object" && error !== null) {
                        // @ts-expect-error error object from $fetch may have data/message
                        message = error.data?.message || error.message || message
                    }
                    throw message
                })

            if (toast) {
                return toast.promise(promise, {
                    loading: "Logging out...",
                    success: (msg: string) => msg,
                    error: (msg: string) => msg,
                })
            }
            return promise
        },

    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useJwtAuthStore, import.meta.hot))
}
