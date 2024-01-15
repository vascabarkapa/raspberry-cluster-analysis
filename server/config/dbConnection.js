const mongoose = require("mongoose");
const {ConnectOptions} = require("mongoose");

const dbOptions = {
  dbName: 'cloudberry_local'
}

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING, dbOptions);
    console.log("Database connected:", connect.connection.host, connect.connection.name);
  } catch (err) {
    console.error("Error connecting to database:", err.message);
    process.exit(1);
  }
}

module.exports = connectDb;
