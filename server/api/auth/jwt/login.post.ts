import jwt from "jsonwebtoken"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    if (!body.email || !body.password) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Email and password are required",
        }))
    }

    const user = await exampleAccounts().getAccountByEmail(body.email)
    const validCredentials = exampleAuthCheck().checkCredentials(body.email, body.password)

    if (!user || !validCredentials) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: "Invalid email or password",
        }))
    }

    const token = jwt.sign(
        user,
        useRuntimeConfig().jwtSecret,
        {
            expiresIn: "10s", // Token expires in 10 seconds
        },
    )

    setCookie(event, "auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 10, // 10 seconds
    })

    return { message: "Login successful" }
})
