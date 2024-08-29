const { Router } = require("express")

const authorRouter = Router()

authorRouter.get("/", (req, res)=> {
    res.send("All authors")
})

module.exports = authorRouter