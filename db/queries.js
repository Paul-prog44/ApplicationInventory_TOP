const pool = require("../db/pool");

async function fetchGenre() {
    const { rows } = await pool.query("SELECT * FROM genre")
    console.log(rows)
}


module.exports = {
    fetchGenre
}