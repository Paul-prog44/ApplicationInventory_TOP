const { fetchGenres, addGenre, deleteGenreDb } = require("../db/queries")

const getGenres = async (req, res) => {
    try {
        const genres = await fetchGenres()
        res.redirect("/")
    } catch (error) {
        res.render('error', { error: error })
    }
}

const getGenre = async (req, res) => {
    const genreId = req.params.id

    try {
        const genre = await fetchGenre(genreId)
    } catch (error) {
        res.render('error', { error: error })
    }
}

const createGenre = async (req, res) => {
    const genreName = req.body.genreName
    
    try {
        await addGenre(genreName)
    } catch (error) {
        res.render('error', { error : error})
    }
    res.redirect('/')
}

const deleteGenre = async (req, res) => {
    let id = req.params.id
    
    try {
        await deleteGenreDb(id)
    } catch (error) {
        console.log(error)
        res.render("error", { error : error })
    }
    
}

module.exports = { getGenres, getGenre, createGenre, deleteGenre }