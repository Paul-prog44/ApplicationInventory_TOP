const { fetchAuthors, addAuthor } = require("../db/queries")

const getAuthors = async (req, res) => {
    try {
        const authors = await fetchAuthors()
        res.render("authors", {
            title : "Author's list",
            authors : authors
        })
    } catch (error) {
        res.render('error', { error: error })
    }
}

const getAuthor = async (req, res) => {
    const authorId = req.params.id

    try {
        const author = await fetchAuthors()
    } catch (error) {
        res.render('error', { error: error })
    }
}

const createAuthor = async (req, res) => {
    const author = req.body
    try {
        await addAuthor(author)
        res.redirect("/authors")
    } catch (error) {
        res.render('error', { error: error})
    }
}

module.exports = { getAuthors, getAuthor, createAuthor }