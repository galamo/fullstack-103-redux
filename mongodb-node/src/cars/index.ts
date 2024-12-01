import express, { Request, Response } from "express"

const router = express.Router()

router.get("/", (req: Request, res: Response): any => {
    console.log(req.params)
    return res.json({ message: "Order Max card get it after an year!!", data: [] })
})


export { router };