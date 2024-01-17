import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbOptions = {
  dbName: process.env.ENVIRONMENT
}

export default async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING, dbOptions);
    console.log("Database connected:", connect.connection.host, connect.connection.name);
  } catch (err) {
    console.error("Error connecting to database:", err.message);
    process.exit(1);
  }
}