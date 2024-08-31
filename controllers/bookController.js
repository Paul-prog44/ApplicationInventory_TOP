const { 
    fetchBooks, 
    fetchGenres, 
    fetchEditors, 
    fetchAuthors, 
    addBook, 
    fetchBook, 
    fetchEditor, 
    fetchAuthor, 
    fetchGenre,
    updateBook
} = require("../db/queries")

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
        //Current book details
        const author = await fetchAuthor(book.author_id)
        const editor = await fetchEditor(book.editor_id)
        const genre = await fetchGenre(book.genre_id)

        res.render("book", {title: book.title, book: book, genres: genres, editors: editors, authors: authors,
            currentAuthor: author[0], currentEditor : editor[0], currentGenre : genre[0]
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

const modifyBook = async (req, res) => {
    const book = req.body
    try {
        await updateBook(book)
        res.redirect("/books")
    } catch (error) {
        res.render("error", { error : error})
    }
}

module.exports = { getBooks, createBook, getBook, modifyBook }