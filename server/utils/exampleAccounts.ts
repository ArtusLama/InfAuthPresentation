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
        const acc: UserData | undefined = plainExampleAccounts.find(acc => acc.email === email)
        return acc ? await toHashedAccount(acc) : undefined
    }

    async function toHashedAccount(acc: UserData): Promise<UserData> {
        return {
            ...acc,
            password: await hashing().bcryptHashPassword(acc.password),
        }
    }

    return {
        getAccountByEmail,
    }
}
