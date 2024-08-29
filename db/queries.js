const pool = require("../db/pool");

async function fetchGenres() {
    const { rows } = await pool.query("SELECT * FROM genre")
    console.log(rows)
}

async function addGenre(genreName) {
    await pool.query("INSERT INTO genre (name) VALUES ($1)", [genreName])
}

async function deleteGenreDb(id) {
    await pool.query(`DELETE FROM genre WHERE id = $1`, [id])
}

async function fetchGenre(id) {
    const { rows } = await pool.query("SELECT * FROM genre WHERE name = $1", [id])
    console.log(rows)
}

module.exports = {
    fetchGenres,
    addGenre,
    deleteGenreDb,
    fetchGenre
}