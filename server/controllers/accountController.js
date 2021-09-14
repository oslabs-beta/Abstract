// const db = require('../db/db.js');
// const fetch = require('node-fetch');
// const { v4: uuid } = require('uuid');
import db from '../db/db.js';
import fetch from 'node-fetch';
import { v4 as uuid } from 'uuid';
const accountController = {};
export default accountController;

accountController.handleOAuth = async (req, res, next) => {
    // req.params
    console.log('oauth req: ', req.query);
    // client_id and client_secret comes from GitHub OAuth settings
    console.log('id: ',process.env.GITHUB_OAUTH_CLIENT_ID,'secret: ', process.env.GITHUB_OAUTH_CLIENT_SECRET)
    await fetch(`https://github.com/login/oauth/access_token/?client_id=${process.env.GITHUB_OAUTH_CLIENT_ID}&client_secret=${process.env.GITHUB_OAUTH_CLIENT_SECRET}&code=${req.query.code}`, {
      method: 'POST',
      // body: JSON.stringify({
      //   client_id: 'a3c7b7577fb915c09652',
      //   client_secret: 'e91533c9980219dfe0e7bafa370b0b67cc25ca57',
      //   code: req.query.code
      //   // redirect_uri: 'http://localhost:3000/secret'
      // }),
      headers: {
        'Accept': 'application/json',
        'X-OAuth-Scopes': 'user',
        'X-Accepted-OAuth-Scopes': 'user'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log('oauth access key data ', data)
        const id = uuid();
        const query = `
          INSERT INTO user_sessions ("_id", "session_id")
          VALUES ($1, $2);`;
        const params = [id, data.access_token];
        db.query(query, params)
          .then(response => {
            console.log('GitHub OAuth Data:\n', response.rows);
            return next();
          })
          .catch(error =>{
            console.log('db error happened')
            return next(error)

          })
      })
      .catch(err => {
        console.log('github access key error');
        console.log(err);
        return next(err);
      })
}