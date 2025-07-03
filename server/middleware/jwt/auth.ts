import jwt from "jsonwebtoken"

export default defineEventHandler(async (event) => {
    const auth_cookie = getCookie(event, "auth_token")

    event.context.jwtAuthUser = null

    if (auth_cookie) {
        try {
            const decoded = jwt.verify(auth_cookie, useRuntimeConfig().jwtSecret)
            event.context.jwtAuthUser = decoded as UserData
        } catch {
            deleteCookie(event, "auth_token")
        }
    }
})
