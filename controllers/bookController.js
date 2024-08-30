const { fetchBooks, fetchGenres, fetchEditors, fetchAuthors } = require("../db/queries")

const getBooks = async (req, res) => {
//TODO
    try {
        const editors = await fetchEditors()
        const genres = await fetchGenres()
        const books = await fetchBooks()
        const authors = await fetchAuthors()
        res.render("books", {title : "Book list",books: books, genres: genres, editors: editors, authors: authors})
    } catch (error) {
        res.render('error', { error: error })
    }
}

const getBook = async (req, res) => {
    const bookId = req.params.id
    console.log(bookId)
    try {
        const book = await fetchBook()
        console.log(book)
    } catch (error) {
        res.render('error', { error: error })
    }
}

const createBook = async (req, res) => {
    const book = req.body
    try {
        await addBook(book)
    } catch (error) {
        res.render("error", { error : error})
    }
}

module.exports = { getBooks, createBook, getBook }