import express from "express"
import cors from "cors"
console.log("Start AI application")
import OpenAI from "openai";
const apiKey = ""
const openai = new OpenAI({ apiKey });

const app = express()
app.use(cors())
app.get("/get-query", async (req, res, next) => {
    const query = req.query.message;
    const result = await getMongoDbQueryByText(query)
    res.json({ result: result || "No result for now" })
})

app.listen(4600)

async function getMongoDbQueryByText(text) {
    const mongoPrefixMessage = "Give me a mongodb query, json object adapted to mongoose api, that use the following keys: Origin , Name - its the car model ( case sensitive )"

    const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
            { "role": "user", "content": `${mongoPrefixMessage} given the following criteria ${text}, your output should be clean - only the json query without extra explanation, make sure each key and value surrounded with double quote` }
        ]
    });
    const content = completion.choices[0]?.message?.content
    if (typeof content === 'string') {
        const replacedContent = content.replaceAll("\n", "")
        try {
            console.log(replacedContent)
            // const obj = JSON.parse(replacedContent)
            return replacedContent;
        } catch (error) {
            return "{}"
        }
    } else return "{}"

}