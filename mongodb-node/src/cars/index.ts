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

// router.get("/new-car", async (req: Request, res: Response, next: NextFunction): Promise<any> => {
//     try {
//         const { lp, carModel, carYear, token } = req.body;
//         if (!token) return res.status(401).send("Unauthorized")
//         if (typeof lp !== 'number' || typeof carModel !== 'string' || typeof carYear !== 'string') return res.status(400).send("Invalid paramters")
//         const data = await addNewCar({ lp, carModel, carYear })
//         return res.json({ message: "Car created!!", data })
//     } catch (error) {
//         return next(error)
//     }
// })

export { router };