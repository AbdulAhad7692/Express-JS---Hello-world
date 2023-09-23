import { users } from "../../data.mjs";

export default async (req, res) => {

    const { query: { phone } } = req

    let data = [...users]

    if (phone) {
        data = data?.filter((value) => value?.phone === phone)
    }

    res.send({ data })
}