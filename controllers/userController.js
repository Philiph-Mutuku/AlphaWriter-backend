const { findOne } = require("../models/userModel");
const User = require("../models/userModel")

const createNewUser = async (req, res) => {
    const {name, userEmail, password} = req.body;
    const userCheck = await User.find({email: userEmail})

     //Check if user already exists in database
     if(userCheck) {
        res.status(200).json({mssg: `User already exists, I can prove it...`})
     } else {
         //If user doesn't exist, create new user
        const user = await User.create({username: username, email: email, password: password})

        res.status(200).json(user)
        //Redirect user to home page with updated information
        //res.status(200).redirect('/')
     }
}

const deleteUser = async (req, res) => {
    const {email, password} = req.body;

    //Find user
    const user = findOne({email: email});

    //Confirm User identity
    if(password == user.password) {
        res.status(200).json("User found")
    } else {
        res.status(404).json("User not found")
    }

    //Delete user
    User.findOneAndDelete(user)
}

const forgotPassword = async () => {
    const { email } = req. body;

    //Send email with confirmation code

    //redirect user to login screen
}

const login = async (req, res) => {
    const { username, password,email } = req.body;

    //Checking if user exists
    const user = await User.find({ email: email, username: username})
      .then(() => {
         //redirecting user to complete website
         res.status(200).redirect('/home/');
      })
      .catch((err) => {
        console.log(err);
      })
}

module.exports = {
    createNewUser,
    forgotPassword,
    deleteUser,
    login
}