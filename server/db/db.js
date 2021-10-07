import pg from 'pg'
import dotenv from 'dotenv';

dotenv.config();

const PG_URI = process.env.SQLURL;

const pool = new pg.Pool({
  connectionString: PG_URI
});

const db = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};

export default db;
