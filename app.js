const express = require("express")
require("dotenv").config();


const indexRouter = require("./routes/indexRouter")
const bookRouter = require("./routes/bookRouter")
const authorRouter = require("./routes/authorRouter")
const genreRouter = require("./routes/genreRouter")
const editorRouter = require("./routes/editorRouter")
const errorRouter = require("./routes/errorRouter")
const app = express()

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));


app.set("view engine", "ejs")

app.use("/", indexRouter)
app.use("/books", bookRouter)
app.use("/authors", authorRouter)
app.use("/genres", genreRouter)
app.use("/editors", editorRouter)
app.use("/*", errorRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log("Application running on http://localhost:"+ PORT))