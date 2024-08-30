const { render } = require("ejs")
const { fetchGenres, addGenre, deleteGenreDb, fetchGenre, modifyGenreDb,  } = require("../db/queries")

const getGenres = async (req, res) => {
    try {
        const genres = await fetchGenres().then()
        res.render("genres", {
            title : "Literrary genres",
            genres : genres
        })
    } catch (error) {
        res.render('error', { error: error })
    } 
    
}

const getGenre = async (req, res) => {
    const genreId = req.params.id
    try {
        let genre = await fetchGenre(genreId)
        genre = genre[0]
        res.render("genre", { genre: genre })
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
    res.redirect('/genres')
}

const deleteGenre = async (req, res) => {
    let id = req.params.id

    try {
        await deleteGenreDb(id)
        res.redirect("/genres")
    } catch (error) {
        console.log(error)
        res.render("error", { error : error })
    }
}

const modifyGenre= async (req, res) => {
    let genre = req.body
    try {
        await modifyGenreDb(genre)
        res.redirect("/genres")
    } catch (error) {
        console.log(error)
        res.render("error", { error : error })
    }
}

module.exports = { 
    getGenres, 
    getGenre, 
    createGenre, 
    deleteGenre,
    modifyGenre
}