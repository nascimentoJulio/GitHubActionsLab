const express = require("express")
const app = express()
const port = 3000

app.get("/", (_, res) => {
    res.send(`A data é ${new Date()}}`)
})

app.listen(port, ()=>{
    console.log("Running...");
})