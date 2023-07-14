const {Pool} = require('pg')


const pool = new Pool({
    user: "postgres",
    password: "akmal02032009",
    host: "localhost",
    port: 5432,
    database: "backend-for-kids"
})

module.exports = pool