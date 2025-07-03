import bcrypt from "bcryptjs"

export default function () {
    async function checkCredentials(email: string, password: string): Promise<boolean> {
        const account = await exampleAccounts().getAccountByEmail(email)

        if (!account || !(await bcrypt.compare(password, account.password))) {
            return false
        }

        return true
    }

    return {
        checkCredentials,
    }
}
