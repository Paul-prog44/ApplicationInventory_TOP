const { Router } = require("express")
const authorController = require("../controllers/authorController")

const authorRouter = Router()

authorRouter.get("/", authorController.getAuthors)
authorRouter.get("/:id", authorController.getAuthor)
authorRouter.post("/add", authorController.createAuthor)

module.exports = authorRouter