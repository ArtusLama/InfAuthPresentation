export default defineEventHandler(async (event) => {
    const user = event.context.jwt.authUser

    if (user) {
        return {
            isAuthenticated: true,
            user,
        }
    } else {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: "Invalid or expired token",
        }))
    }
})
