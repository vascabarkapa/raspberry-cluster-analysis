import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {connectionString} from './../config/index.js';

dotenv.config();

export default async () => {
  try {
    const connect = await mongoose.connect(connectionString);
    console.log("Database connected:", connect.connection.host, connect.connection.name);
  } catch (err) {
    console.error("Error connecting to database:", err.message);
    process.exit(1);
  }
}