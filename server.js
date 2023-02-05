const express = require('express');
const mongoose = require('mongoose');
const notesRouter = require('./routes/noteRoutes');
const userRouter = require('./routes/userRoutes');
require('dotenv').config();

//Setting up express app
const app = express();

//Middleware
app.use(express.json());

//Routes
app.use('/api/notes', notesRouter);
app.use('/user', userRouter);

//Listening for requests
mongoose.connect(process.env.MONGO_URI)
  .then (() => {
   app.listen(process.env.PORT, (req, res) => {
      console.log("Connected to database and listening on port ", process.env.PORT)
   }) 
})
  .catch((error) => console.log(error))