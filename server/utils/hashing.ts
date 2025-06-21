import bcrypt from "bcryptjs"

export default function () {
    async function bcryptHashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10)
    }

    return {
        bcryptHashPassword,
    }
}
