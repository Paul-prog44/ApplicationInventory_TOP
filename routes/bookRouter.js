const { Router } = require("express")
const bookController = require("../controllers/bookController")

const bookRouter = Router()

bookRouter.get("/", bookController.getBooks)
bookRouter.get("/:id", bookController.getBook)


module.exports = bookRouter