const getBooks = async (req, res) => {
    try {
        const books = await fetchBooks()
    } catch (error) {
        res.render('error', { error: error })
    }
}

const getBook = async (req, res) => {
    const bookId = req.params.id

    try {
        const book = await fetchBook()
    } catch (error) {
        res.render('error', { error: error })
    }
}

module.exports = { getBooks, getBook }