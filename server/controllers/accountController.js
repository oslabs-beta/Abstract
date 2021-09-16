import db from '../db/db.js';
import fetch from 'node-fetch';
import { v4 as uuid } from 'uuid';
import jwt from 'jsonwebtoken';
const accountController = {};
export default accountController;

// accountController.successfullOAuth = async (req, res, next) => {
//   await fetch('https://api.github.com/user', {
//     method: 'GET',
//     headers: {
//       Authorization: 'token ' + res.local.access_token,
//     }
//   })
//     .then((reponse) => {
//       return next();
//     })
//     .catch((error) => {
//       return next({
//         status: 500,
//         message: error
//       });
//     })
// }

accountController.handleOAuth = async (req, res, next) => {
  // deconstruct req.query to get code from first Github GET request
  const { code } = req.query;
  // handle edge case if code is not provided
  if (!code) {
    throw new Error("Missing code from Github!");
  }
  
  // once we get code back from Github, we need to make a POST to: https://github.com/login/oauth/access_token/
  // make sure to pass in client_id, client_secret, and code
  const accessToken = await fetch(`https://github.com/login/oauth/access_token/?client_id=${process.env.GITHUB_OAUTH_CLIENT_ID}&client_secret=${process.env.GITHUB_OAUTH_CLIENT_SECRET}&code=${code}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        // set scopes to allow access to more API endpoints (check Github docs)
        'X-OAuth-Scopes': 'user',
        'X-Accepted-OAuth-Scopes': 'user'
      }
    })
      .then(response => response.json())
      .then(data => {
        // db query: store access token in database under unique user _id and username
        // const id = uuid();
        // const query = `
        //   INSERT INTO user_sessions ("_id", "session_id")
        //   VALUES ($1, $2);`;
        // const params = [id, data.access_token];
        // db.query(query, params)
        //   .then(response => {
        //     console.log('GitHub OAuth Data:\n', response.rows);
        //     return next();
        //   })
        //   .catch(error => {
        //     console.log('db error happened')
        //     return next({
        //       status: 500,
        //       message: error
        //     })
        //   })
        return data;
      })
      .catch(error => {
        console.log('github access key error');
        console.log(error);
        return next({
          status: 500,
          message: error
        });
      })
  
  // store access token in a jwt cookie to send back to server on Github API request
  const token = jwt.sign(JSON.stringify(accessToken), process.env.USER_JWT_SECRET)
  res.cookie("github-token-jwt", token, {
    httpOnly: true,
    secure: true
  })

  // use access token from POST request above to access user
  console.log('accessToken', accessToken);
  const userData = await fetch('https://api.github.com/user', {
    method: 'GET',
    // pass in access token into authorization header
    headers: {
      Authorization: `token ${accessToken.access_token}`
    }
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      return next({
        status: 500,
        message: error
      })
    })
  
    // store user data in a jwt cookie to send back to server on Github API request
    const user = jwt.sign(JSON.stringify(userData), process.env.USER_JWT_SECRET)
    res.cookie("github-user-jwt", user, {
      httpOnly: true,
      secure: true
    })

    // redirect to dashboard with the username as a query paramater (to modify Redux store)
    return res.redirect(`http://localhost:3000/dashboard/username=${userData.login}`);
}