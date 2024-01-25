import {User} from '../models/index.js';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import {accessTokenSecret} from './../config/index.js';

export default asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader || !authHeader.toLowerCase().startsWith("bearer ")) {
    res.status(401);
    throw new Error("Token is missing");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, accessTokenSecret);

    const exists = await User.exists({_id: decoded.user.id})
      .catch((err) => {
        return res.status(500).json("Internal Server Error");
      });

    if (!exists) return res.status(400).json("User doesn't exists");

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401);
    throw new Error("User is not authorized");
  }
});
