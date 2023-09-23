import { users } from "../../data.mjs";

export default async (req, res) => {

    const { params: { id } } = req

    console.log('id ================>', id);

    const data = users.find((el) => el?.id === id)

    res.json({ data })
}