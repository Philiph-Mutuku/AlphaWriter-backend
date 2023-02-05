const express = require('express');
const { createNewUser, deleteUser } = require('../controllers/userController');
const userRouter = express.Router();

//Creating a new User
userRouter.post('/new/', createNewUser);

//Deleting a user
userRouter.delete('/delete/:email', deleteUser);

//Login
userRouter.post('/login/', login);