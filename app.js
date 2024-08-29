const express = require("express")
const indexRouter = require("./routes/indexRouter")
const bookRouter = require("./routes/bookRouter")
const authorRouter = require("./routes/authorRouter")
const genreRouter = require("./routes/genreRouter")
const editorRouter = require("./routes/editorRouter")
const app = express()

app.set("view engine", "ejs")

app.use("/", indexRouter)
app.use("/books", bookRouter)
app.use("/authors", authorRouter)
app.use("/genres", genreRouter)
app.use("/editors", editorRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log("Application running on http://localhost:"+ PORT))