import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {environment, connectionString} from './../config/index.js';

dotenv.config();

const dbOptions = {
  dbName: environment
}

export default async () => {
  try {
    const connect = await mongoose.connect(connectionString, dbOptions);
    console.log("Database connected:", connect.connection.host, connect.connection.name);
  } catch (err) {
    console.error("Error connecting to database:", err.message);
    process.exit(1);
  }
}