const Pool = require("pg").Pool

const pg = new Pool({
    user: "postgres",
    password: "Isaacisawesome_059",
    host: "localhost",
    port: 5432,
    database: "fullstacktodo"
});

module.exports = pg;