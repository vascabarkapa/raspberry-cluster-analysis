import express from 'express';
import cors from 'cors';
import {prefix, frontUrl} from './../config/index.js';
import routes from './../routes/index.js';
import errorHandler from './../middleware/errorHandler.js';

export default (server) => {
  server.use(cors({origin: frontUrl}));
  server.use(express.static('public'));
  server.use(prefix, routes);
  server.use(errorHandler);

  server.get('/', (_req, res) => {
    return res.status(200).json('Project is successfully working...').end();
  });
};
