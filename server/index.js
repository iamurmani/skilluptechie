const path = require("path");
const connectDB = require("./config/dbConnection");

require("dotenv").config({
  path: '.env',
});

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { sendResponse } = require("./helper/responseHelper");

//Connect Mongodb
connectDB();

//App initialized :
let app = express();

// Middleware
app.use(cors());
app.use(express.json());

//Initialize DotEnv Datas :
let PORT = process.env.PORT || 8888;

app.use("/api/v1/admin", require("./router/admin/admin-router"));

// Test Router
app.get("/helloworld", (req, res) => {
  res.send(
    `server is running Sucessfully ${process.env.NAME} & ${process.env.NODE_ENV}`
  );
});

//Common Error handler
app.use((err, req, res, next) => {
  sendResponse(err.status || 500, err.message, null, res);
});

//MongoDB Conncetion established:
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
