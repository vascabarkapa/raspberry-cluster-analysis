import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import {accessTokenSecret} from './../config/index.js';

const validateToken = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader || !authHeader.toLowerCase().startsWith("bearer ")) {
    res.status(401);
    throw new Error("User is not authorized or token is missing!");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, accessTokenSecret);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401);
    throw new Error("User is not authorized!");
  }
});

export default validateToken;
