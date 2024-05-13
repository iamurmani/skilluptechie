const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`),
});

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

//App initialized :
let app = express();

// Middleware
app.use(cors());
app.use(express.json());

//Initialize DotEnv Datas :
let PORT = process.env.PORT || 3000;

// Test Router
app.get("/helloworld", (req, res) => {
  res.send(
    `server is running Sucessfully ${process.env.NAME} & ${process.env.NODE_ENV}`
  );
});

//MongoDB Conncetion established:
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ${process.env.NAME}`);
});
