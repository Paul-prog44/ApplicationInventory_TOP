const { Router } = require("express")
const genreController = require("../controllers/genreController")

const genreRouter = Router()

genreRouter.get("/", genreController.getGenres)
genreRouter.get("/:id", genreController.getGenre)
genreRouter.post("/add", genreController.createGenre)
genreRouter.get("/delete/:id", genreController.deleteGenre)

module.exports = genreRouter