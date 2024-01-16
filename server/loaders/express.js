import express from 'express';
import cors from 'cors';
const errorHandler = require("./middleware/errorHandler");

export default (server) => {
    server.use(cors({ origin: process.env.FRONT_URL }));
    server.use(express.static('public'));
    server.use(errorHandler);
}