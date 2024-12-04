import express, { NextFunction, Request, Response } from "express"
import getCars from "./handlers/getCars"

const router = express.Router()

router.get("/", async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        console.log(req.params)
        const data = await getCars()
        setTimeout(() => {
            return res.json({ message: "Order Max card get it after an year!!", data })
        }, 2000);
    } catch (error) {
        return next(error)
    }
})

export { router };