import bcrypt from "bcryptjs"

export default function () {
    async function bcryptHashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, bcrypt.genSaltSync(10))
    }

    return {
        bcryptHashPassword,
    }
}
