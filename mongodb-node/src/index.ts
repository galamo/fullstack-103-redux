import express from "express"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()
const app = express();
import { router as carsRouter } from "./cars/index"
app.use(cors())


app.get("/health-check", (req, res, next) => {
    res.status(200).send("Api is working!")
})

app.use("/cars", carsRouter)

app.use((error: any, req: any, res: any, next: any) => {
    res.status(409).send("Something went Wrong")
})



app.listen(process.env.PORT)