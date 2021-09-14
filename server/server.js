// const path = import('path');
// const express = require('express');
// const app = express();
// const PORT = 3000;
// const dotenv = require('dotenv');
// const accountController = require('./controllers/accountController');
// const cors = require('cors');
import accountController from '/home/ray/Abstract/server/controllers/accountController.js';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import express from 'express';
const app = express();
const PORT = 5000;

dotenv.config();

const AccessKey = process.env.GITHUB_OAUTH_CLIENT_ID;
const SecretKey = process.env.GITHUB_OAUTH_CLIENT_SECRET;

app.use(express.json());
app.use(cors());

// app.use(express.static(path.join(__dirname, 'build')));

//oauth login
app.get('/oauth', accountController.handleOAuth, (req, res) => {
  console.log('made it to the oauth route. AccessKey:', AccessKey)
  return res.status(200).send('Oauth Completed');
  // try {
  //   const url = 'https://github.com/login/oauth/authorize?client_id=46fc52b044a6de2f4a82&scope=read:user&redirect_uri=http://localhost:3000/oauth&clientID=';
  //   return res.status(200).redirect(url);
  // }
  // catch (e) {
  //   console.log(e)
  // } 
});

// app.get('/', (req, res) => {
//   return res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('Page not Found'));

//global err handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//server listening
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});