import jwt from "jsonwebtoken"

export default defineEventHandler(async (event) => {
    const auth_cookie = getCookie(event, "auth_token")

    event.context.jwt.authUser = null

    if (auth_cookie) {
        try {
            const decoded = jwt.verify(auth_cookie, useRuntimeConfig().jwtSecret)

            event.context.authUser = decoded
        } catch { /* empty */ }
    }
})
