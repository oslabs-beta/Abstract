const db = require('../db/db.js');
const fetch = require('node-fetch');
const { v4: uuid } = require('uuid');
const accountController = {};

accountController.handleOAuth = async (req, res, next) => {
    // req.params
    console.log('oauth req: ', req.query);
    // client_id and client_secret comes from GitHub OAuth settings
    await fetch(`https://github.com/login/oauth/access_token/?${process.env.GITHUB_OAUTH_CLIENT_ID}&${process.env.GITHUB_OAUTH_CLIENT_SECRET}&code=${req.query.code}`, {
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
        console.log('data', data)
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
          .catch(error => next(error))
      })
      .catch(err => console.error(err))
}