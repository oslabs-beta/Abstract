require('dotenv').config();

const { Pool } = require('pg');

const PG_URI = process.env.SQLURL;
// console.log(PG_URI);
const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    // console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};


// psql -d <url from elephantSQL> -f <filepath/dbname.sql>