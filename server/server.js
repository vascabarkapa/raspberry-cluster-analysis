import express from 'express';
import dotenv from 'dotenv';
import loader from './loaders/index.js';
import {port} from './config/index.js';
import createAdminIfNotExists from "./shared/createAdmin.js";

dotenv.config();

const server = express();

loader(server);

createAdminIfNotExists();

server.listen(port, error => {
  if (error) {
    console.log(error);
    return process.exit(1);
  }
  console.log(`Server is running on ${port}`);
});