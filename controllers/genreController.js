const getGenres = async (req, res) => {
    try {
        const genres = await fetchGenres()
    } catch (error) {
        res.render('error', { error: error })
    }
}

const getGenre = async (req, res) => {
    const genreId = req.params.id

    try {
        const genre = await fetchGenre()
    } catch (error) {
        res.render('error', { error: error })
    }
}

module.exports = { getGenres, getGenre }