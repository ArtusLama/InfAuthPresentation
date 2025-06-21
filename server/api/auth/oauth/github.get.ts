export default defineOAuthGitHubEventHandler({

    config: {
        emailRequired: true,
    },

    async onSuccess(event, { user }) {
        await setUserSession(event, {
            user: {
                githubId: user.id,
            },
        })
        return sendRedirect(event, "/oauth-based/dashboard")
    },

    onError(event) {
        return sendRedirect(event, "/oauth-based")
    },

})
