const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

//Setting up express app
const app = express();

//Middleware
app.use(express.json());

//Routes

//Listening for requests
mongoose.connect(process.env.MONGO_URI)
  .then (() => {
   app.listen(process.env.PORT, (req, res) => {
      console.log("Connected to database and listening on port ", process.env.PORT)
   }) 
})
  .catch((error) => console.log(error))