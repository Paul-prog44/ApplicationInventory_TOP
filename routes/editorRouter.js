const { Router } = require("express")

const editorRouter = Router()

editorRouter.get("/", (req, res) => {
    res.send("All editors")
})

module.exports = editorRouter