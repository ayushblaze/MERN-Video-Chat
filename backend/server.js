const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json()); //all of the data will be returned as JSON.
app.use(cors()); //since we are not passing any config inside cors() our server will allow anyone to connect.

//Registering the Routes
app.use("/api/auth", authRoutes);

const server = http.createServer(app); //READ ABOUT HTTP in NODE DOC.

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server running on PORT: ${PORT}`);
    });
  })
  .catch(e => {
    console.log("Database connection failed. Server not started.");
    console.error(e);
  });