import express from 'express';
import http from 'http';
import colors from 'colors';

const app = express();

import encrypt from './routes/encrypt.js';

const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Server is running...');
});

app.use('/encrypt/', encrypt);

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
