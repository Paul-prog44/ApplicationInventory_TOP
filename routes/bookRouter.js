const { Router } = require("express")
const bookController = require("../controllers/bookController")

const bookRouter = Router()

bookRouter.get("/", bookController.getBooks)
bookRouter.get("/:id", bookController.getBook)
bookRouter.post("/add", bookController.createBook)
bookRouter.get("/book/:id", bookController.getBook)
bookRouter.post("/modify", bookController.modifyBook)
bookRouter.get("/delete/:id", bookController.deleteBook)


module.exports = bookRouter