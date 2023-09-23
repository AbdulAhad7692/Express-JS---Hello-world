import { users } from "../../data.mjs"

export default async (req, res) => {
    const { body } = req
    users.push(...body.users)
    res.send({ message: "user added succesfully" })
}