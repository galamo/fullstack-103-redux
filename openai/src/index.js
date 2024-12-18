console.log("Start AI application")
import OpenAI from "openai";
const apiKey = ""
const openai = new OpenAI({ apiKey });


const queryMysql = "Give me a mongodb query, json object adapted to mongoose api that use the following columns: country, year,model & color"
const userQuery = "i want all the japanese blue cars that created after 2022"
async function init() {
    const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
            { "role": "user", "content": `${queryMysql} given the following criteria ${userQuery}` }
        ]
    });
    console.log(completion.choices[0].message)
}
init()