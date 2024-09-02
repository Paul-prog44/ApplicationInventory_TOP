const { Router } = require("express")
const { fetchView } = require("../db/queries")

const indexRouter = Router()

indexRouter.get("/", (req, res) => {
    res.render("index", {
    title : "Book inventory"
})})


module.exports = indexRouter