import db from '../db/db.js';
import fetch from 'node-fetch';
import { v4 as uuid } from 'uuid';
import jwt from 'jsonwebtoken';
import { Octokit } from "@octokit/core";
import jwt_decode from 'jwt-decode';
import { Buffer } from 'buffer';

const accountController = {};

// OAuth
accountController.handleOAuth = async (req, res, next) => {
  // deconstruct req.query to get code from first Github GET request
  const { code } = req.query;
  // handle edge case if code is not provided
  if (!code) {
    throw new Error("Missing code from Github!");
  }
  
  // once we get code back from Github, we need to make a POST to: https://github.com/login/oauth/access_token/
  const accessToken = await fetch(`https://github.com/login/oauth/access_token/?client_id=${process.env.GITHUB_OAUTH_CLIENT_ID}&client_secret=${process.env.GITHUB_OAUTH_CLIENT_SECRET}&code=${code}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        return next({
          status: 500,
          message: error
        });
      })

  // db query: store access token in database under unique user _id and username
  const id = uuid();
  const query = `
    INSERT INTO user_sessions ("_id", "session_id")
    VALUES ($1, $2);`;
  const params = [id, accessToken];
  const dbResponse = await db.query(query, params)
    .then(response => {
      return response;
    })
    .catch(error => {
      return next({
        status: 500,
        message: error
      })
    })
      
  // store access token in a jwt cookie to send back to server on Github API request
  const token = jwt.sign(JSON.stringify(accessToken), process.env.USER_JWT_SECRET)

  res.cookie("github-token-jwt", token, {
    httpOnly: true,
    secure: true
  })

  // use access token from POST request above to access user
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
    return res.redirect(`https://abstractreact.herokuapp.com/dashboard/username=${userData.login}`);
}

//create github repo
accountController.createRepo = async (req, res, next) => {
  try {
    //get access token for octokit
    const cookie = req.cookies["github-token-jwt"];
    const decodedCookie = jwt_decode(cookie).access_token;
    const repo_name = req.body.repository_name;

    const octokit = new Octokit({ auth: `${decodedCookie}` });
    const createResponse = await octokit.request(`POST /user/repos`, {
      name: `${repo_name}`,
      private: true,
      auto_init: true,
    });
    return next();
  }
  catch (error) {
    return next({
      status: 500,
      message: error
    })
  }
}

//update repo with files
accountController.updateRepo = async (req, res, next) => {
  try {
    const username = req.body.username;
    const commit_msg = req.body.commit_message;
    const repo_name = req.body.repository_name.replace(' ', '-');
    
    const cookie = req.cookies["github-token-jwt"];
    const decodedCookie = jwt_decode(cookie).access_token;
    const prototypeCode = Buffer.from(`${req.body.prototypeCode}`, 'binary').toString('base64');

    const octokit = new Octokit({ auth: `${decodedCookie}` });
    const updateResponse = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
      owner: `${username}`,
      repo: `${repo_name}`,
      message: `${commit_msg}`,
      content: `${prototypeCode}`,
      path: `App.jsx`,
    })
    return next();
  }
  catch (error) {
    return next({
      status: 500,
      message: error
    })
  }
}


export default accountController;