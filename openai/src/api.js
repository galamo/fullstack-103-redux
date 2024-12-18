import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.get("/get-query", (req, res, next) => {
    const query = req.query.message;
    // call open ai
    res.json({ result: "No result for now" })
})

app.listen(4600)