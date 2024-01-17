import express from 'express';
import cors from 'cors';
import routes from './../routes/index.js';
import errorHandler from './../middleware/errorHandler.js';

export default (server) => {
  const frontUrl = process.env.FRONT_URL;

  server.use(cors({origin: frontUrl}));
  server.use(express.static('public'));
  server.use(process.env.PREFIX, routes);
  server.use(errorHandler);

  server.get('/', (_req, res) => {
    return res.status(200).json('Project is successfully working...').end();
  });
};
