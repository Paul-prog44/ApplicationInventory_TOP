const pool = require("../db/pool");

//GENRES
async function fetchGenres() {
    const { rows } = await pool.query("SELECT * FROM genre")
    return rows
}

async function addGenre(genreName) {
    await pool.query("INSERT INTO genre (name) VALUES ($1)", [genreName])
}

async function deleteGenreDb(id) {
    await pool.query("DELETE FROM genre WHERE id = $1", [id])
}

async function fetchGenre(id) {
    const { rows } = await pool.query("SELECT * FROM genre WHERE id = $1", [id])
    return rows
}

async function modifyGenreDb(genre) {
    const id = parseInt(genre.id)
    await pool.query("UPDATE genre SET name = $1 WHERE id = $2", [genre.name, id])
}

//AUTHORS
async function fetchAuthors() {
    const { rows } = await pool.query("SELECT * FROM author")
    return rows
}

async function addAuthor(author) {
    await pool.query("INSERT INTO author (firstname, lastname, emailadress) VALUES ($1, $2, $3)", [author.firstname, author.lastname, author.emailAdress])
}

async function deleteAuthorDb(id) {
    await pool.query("DELETE FROM author WHERE id = $1", [id])
}

async function fetchAuthor(id) {
    const { rows } = await pool.query("SELECT * FROM author WHERE id = $1", [id])
    return rows
}

async function modifyAuthorDb(author) {
    const id = parseInt(author.id)
    await pool.query("UPDATE author SET firstname = $1, lastname = $2, emailadress = $3 WHERE id = $4", 
        [author.firstname, author.lastname, author.emailAdress, id])
}

//BOOKS
async function fetchBooks() {
    const { rows } = await pool.query("SELECT * FROM book")
    return rows
}

async function fetchBook(id) {
    const bookId = parseInt(id)
    const { rows } = await pool.query("SELECT * FROM book WHERE id = $1", [bookId])
    return rows
}

async function addBook(book) {
    const authorId = parseInt(book.author)
    const editorId = parseInt(book.editor)
    const genreId = parseInt(book.genre)
    await pool.query("INSERT INTO book (title, author_id, \"pageNumber\", editor_id, genre_id, price) VALUES ($1, $2, $3, $4, $5, $6)", 
        [book.bookTitle, authorId, book.pageNumber, editorId, genreId, book.price])
}

async function updateBook(book) {
    const bookId = parseInt(book.id)
    const authorId = parseInt(book.author)
    const editorId = parseInt(book.editor)
    const genreId = parseInt(book.genre)
    const pageNumber = parseInt(book.pageNumber)
    const price = parseFloat(book.price)
    //Check for int values before sending req
    if (isNaN(bookId) || isNaN(authorId) || isNaN(editorId) || isNaN(genreId) || isNaN(pageNumber) || isNaN(price)) {
        throw new Error('Invalid input: One or more numeric fields are NaN');
    }

    await pool.query("UPDATE book SET title = $1, author_id = $2, \"pageNumber\" = $3, editor_id = $4, genre_id = $5, price = $6 WHERE id = $7",
         [book.title, authorId, pageNumber, editorId, genreId, price, bookId]
    )
}

async function deleteBookDb(id) {
    await pool.query("DELETE FROM book WHERE id = $1", [id])
}

//EDITORS
async function fetchEditor(id) {
    const { rows } = await pool.query("SELECT * FROM editor WHERE id = $1", [id])
    return rows
}

async function fetchEditors() {
    const { rows } = await pool.query("SELECT * FROM editor")
    return rows
}

async function addEditor(editor) {
    await pool.query("INSERT INTO editor (name) VALUES ($1)", [editor.editorName])
}

async function deleteEditorDb(id) {
    await pool.query("DELETE FROM editor WHERE id = $1", [id])
}

async function modifyEditorDb(editor) {
    const id = parseInt(editor.id)
    await pool.query("UPDATE editor SET name = $1 WHERE id= $2", [editor.editorName, id])
}

//TEST VIEW SQL
async function fetchView() {
    const { rows } = await pool.query("SELECT * FROM bookauthor")
    console.log(rows)
}

module.exports = {
    fetchGenres,
    addGenre,
    deleteGenreDb,
    fetchGenre, 
    fetchAuthors,
    addAuthor,
    deleteAuthorDb,
    fetchAuthor,
    modifyAuthorDb,
    modifyGenreDb,
    fetchBooks,
    fetchEditors,
    addEditor,
    deleteEditorDb,
    fetchEditor,
    modifyEditorDb,
    addBook,
    fetchBook,
    updateBook,
    deleteBookDb,
    fetchView
}