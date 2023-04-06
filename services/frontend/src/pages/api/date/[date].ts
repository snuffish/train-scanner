import { NextApiRequest, NextApiResponse } from "next"
import { getFile } from "../../../utils"

const { DATA_DIRECTORY } = process.env

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { date } = req.query

    const data = getFile(`${DATA_DIRECTORY}/${date}.json`)
    res.json(JSON.parse(data.fileContent))
}