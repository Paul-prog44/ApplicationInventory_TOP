const { Router } = require("express")

const genreRouter = Router()

genreRouter.get("/", (req, res) => {
    res.send("All genre")
})

module.exports = genreRouter