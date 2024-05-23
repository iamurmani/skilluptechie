const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DATABASE);
    console.log(
      "Database Connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (er) {
    console.log("Database Connection Failed");
    console.log(er);
    process.exit(1);
  }
};

module.exports = connectDB;
