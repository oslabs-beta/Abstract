const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const dotenv = require('dotenv');

dotenv.config();

const AccessKey = process.env.GITHUB_OAUTH_CLIENT_ID;
const SecretKey = process.env.GITHUB_OAUTH_CLIENT_SECRET;

app.use(express.json());

//oauth login
app.get('/oauth', (req, res) => {
  console.log('made it to the oauth route. AccessKey:', AccessKey)
  return res.sendStatus(200);
});


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