const express = require("express")
const utils = require("./utils")
const app = express()
const port = 3000

app.get("/", (_, res) => {
    res.send(`A data é ${utils.date()}}`)
})

app.listen(port, ()=>{
    console.log("Running...");
})