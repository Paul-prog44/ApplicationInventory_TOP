const { Router } = require("express")
const editorController = require("../controllers/editorController")

const editorRouter = Router()

editorRouter.get("/", editorController.getEditors)
editorRouter.get("/:id", editorController.getEditor)
editorRouter.post("/add", editorController.createEditor)
editorRouter.get("/delete/:id", editorController.deleteEditor)
editorRouter.post("/modify", editorController.modifyEditor)

module.exports = editorRouter