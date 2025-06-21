export default function () {
    const plainExampleAccounts: UserData[] = [
        {
            id: "1",
            email: "test@gmail.com",
            password: "test123",
        },
        {
            id: "2",
            email: "other@gmail.com",
            password: "other123",
        },
    ]

    async function getAccountByEmail(email: string): Promise<UserData | undefined> {
        return (await getRealHashedAccounts()).find(account => account.email === email)
    }

    async function getRealHashedAccounts(): Promise<UserData[]> {
        return Promise.all(plainExampleAccounts.map(async (account) => {
            return {
                ...account,
                password: await hashing().bcryptHashPassword(account.password),
            }
        }))
    }

    return {
        getAccountByEmail,
    }
}
