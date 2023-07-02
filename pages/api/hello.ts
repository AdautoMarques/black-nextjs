import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string
    timestamp: Date

}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const timestamp = new Date()
    return(
        
        res.status(200).json({ name: 'Jhon Doe', timestamp})
    )
}

export default handler