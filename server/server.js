const express = require('express');
import loader from './loaders/index.js';

const server = express();

loader(server);

server.listen(5001, err => {
  if (err) {
    console.log(err);
    return process.exit(1);
  }
  console.log(`Server is running on ${port}`);
});

export default server