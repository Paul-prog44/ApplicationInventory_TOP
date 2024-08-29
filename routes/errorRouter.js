const { Router } = require("express")

const errorRouter = Router()

errorRouter.get("/", (req, res) => {
    res.render("error", {error : "An error has occured"})
})

module.exports = errorRouter