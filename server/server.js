// const path = import('path');
// const express = require('express');
// const app = express();
// const PORT = 3000;
// const dotenv = require('dotenv');
// const accountController = require('./controllers/accountController');
// const cors = require('cors');
import accountController from './controllers/accountController.js';
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
app.use(express.urlencoded());
app.use(cors());

// app.use(express.static(path.join(__dirname, 'build')));

//oauth login
app.get('/oauth', accountController.handleOAuth);

// app.get('/success', accountController.successfullOAuth, (req, res) => {
//   return res.redirect('http://localhost:3000/dashboard')
// });

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