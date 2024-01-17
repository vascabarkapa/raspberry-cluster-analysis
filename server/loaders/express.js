import express from 'express';
import cors from 'cors';
import errorHandler from './../middleware/errorHandler.js';

export default (server) => {
  const frontUrl = process.env.FRONT_URL;

  server.use(cors({origin: frontUrl}));
  server.use(express.static('public'));
  server.use(errorHandler);
};
