const getAuthors = async (req, res) => {
    try {
        const authors = await fetchAuthors()
    } catch (error) {
        res.render('error', { error: error })
    }
}

const getAuthor = async (req, res) => {
    const authorId = req.params.id

    try {
        const author = await fetchAuthor()
    } catch (error) {
        res.render('error', { error: error })
    }
}

module.exports = { getAuthors, getAuthor }