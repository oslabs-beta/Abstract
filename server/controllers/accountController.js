import db from '../db/db.js';
import fetch from 'node-fetch';
import { v4 as uuid } from 'uuid';
import jwt from 'jsonwebtoken';
import { Octokit } from "@octokit/core";
import jwt_decode from 'jwt-decode';
import { request } from '@octokit/request';
import { Buffer } from 'buffer';

const accountController = {};

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

//OAuth
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
        // 'X-OAuth-Scopes': ['user', 'repo'],
        // 'X-Accepted-OAuth-Scopes': ['user', 'repo']
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
  // console.log('token: ', token)
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
//create github repo
accountController.createRepo = async (req, res, next) => {
  try {
  //get access token for octokit
  const cookie = req.cookies["github-token-jwt"]
    const decodedCookie = jwt_decode(cookie).access_token
    console.log('decoded cookie :', decodedCookie)

  const repo_name = req.body.repository_name;

  // console.log('repo: ',`${repo_name}`)
  const octokit = new Octokit({ auth: `${decodedCookie}` });
  const createResponse = await octokit.request(`POST /user/repos`, {
    name: `${repo_name}`,
    private: true,
    auto_init: true,
  });
  // console.log('Finished post req')
  return next();
}
 catch (e) {
  console.log('catch: ', e)
  }
}

//update repo with files
accountController.updateRepo = async (req, res, next) => {
  // console.log('got to update Repo')
  try {
    const username = req.body.username;
    const commit_msg = req.body.commit_message;
    const repo_name = req.body.repository_name;

    const cookie = req.cookies["github-token-jwt"]
    const decodedCookie = jwt_decode(cookie).access_token
    // console.log('decoded cookie :', decodedCookie)

    // console.log('repo: ',`${repo_name}`)
    const octokit = new Octokit({ auth: `${decodedCookie}` });
    console.log('we better be getting this: ', req.body.prototypeCode)
    const prototypeCode = Buffer.from(`${req.body.prototypeCode}`, 'binary').toString('base64');
    console.log('base64: ', prototypeCode)
    const updateResponse = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
      owner: `${username}`,
      repo: `${repo_name}`,
      message: `${commit_msg}`,
      content: `${prototypeCode}`,
      path: `App.jsx`,
    })
    return next();
  }
  catch(e) {
    console.log('catch: ', e)
  }
}


export default accountController;