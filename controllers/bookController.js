const { fetchBooks, fetchGenres, fetchEditors, fetchAuthors, addBook, fetchBook, fetchEditor, fetchAuthor } = require("../db/queries")

const getBooks = async (req, res) => {
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
    try {
        const editors = await fetchEditors()
        const genres = await fetchGenres()
        const authors = await fetchAuthors()
        let book = await fetchBook(bookId)
        book = book[0]
        const author = await fetchAuthor(book.author_id)
        res.render("book", {title: book.title, book: book, genres: genres, editors: editors, authors: authors,
            currentAuthor: author[0]
        })
    } catch (error) {
        res.render('error', { error: error })
    }
}

const createBook = async (req, res) => {
    const book = req.body
    console.log(book)
    try {
        await addBook(book)
        res.redirect("/books")
    } catch (error) {
        res.render("error", { error : error})
    }
}

module.exports = { getBooks, createBook, getBook }