const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");

connectDb();

const server = express();
const port = process.env.PORT || 5000;

server.use(cors({ origin: process.env.FRONT_URL }));
server.use(express.json());
server.use(errorHandler);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
