// require('dotenv').config();
// import * as pg from 'pg';
import pg from 'pg'
import dotenv from 'dotenv';
// const { Pool } = require('pg');
dotenv.config();

// const { Pool } = require('pg');

const PG_URI = process.env.SQLURL;
// console.log(PG_URI);
const pool = new pg.Pool({
  connectionString: PG_URI
});

const db = {
  query: (text, params, callback) => {
    // console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};

export default db;

// psql -d <url from elephantSQL> -f <filepath/dbname.sql>