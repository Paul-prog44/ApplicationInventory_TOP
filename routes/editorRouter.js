const { Router } = require("express")
const editorController = require("../controllers/editorController")

const editorRouter = Router()

editorRouter.get("/", editorController.getEditors)
editorRouter.get("/:id", editorController.getEditor)

module.exports = editorRouter