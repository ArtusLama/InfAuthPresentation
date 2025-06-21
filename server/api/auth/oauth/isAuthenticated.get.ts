export default defineEventHandler(async (event) => {
    // Automatically returns an error if the user is not authenticated
    const { user } = await requireUserSession(event)

    return {
        isAuthenticated: !!user,
    }
})
