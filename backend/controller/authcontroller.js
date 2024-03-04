
const Role = require("../model/rolemodel");
const User = require("../model/usermodel");

const bcrypt = require('bcryptjs');
const{createError }=require('../utils/error')
const { createSuccess} = require('../utils/success');
const jwt =require("jsonwebtoken")

const Token = require("../model/usertoken");


 const register = async (req, res, next) => {
  const role = await Role.find({ role: 'User' });
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt)
  const newUser = new User({
   name: req.body.name,
    email: req.body.email,
    password: hashPassword,
    roles: role
  });
  await newUser.save();
  return res.json(createSuccess(200, "Registration Success")); 
}

 const registerAdmin = async (req, res, next) => {
  const role = await Role.find({});
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt)
  const newUser = new User({
  name: req.body.name,
    email: req.body.email,
    password: hashPassword,
    isAdmin: true,
    roles: role
  });
  await newUser.save();
  return res.json(createSuccess(200, "Admin Registered successfully!"))
}


const login = async (req, res, next) => {
  try {
 
      
   
    const user = await User.findOne({ email: req.body.email })
    .populate("roles","role");
    const{roles}=user ;   
if (!user) {
      return res.status(404).send("User not found");
    }

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
  
    if (!isPasswordCorrect) {
      return res.status(400).send("Password is incorrect");
    }
    

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin ,roles:roles}, 
    "thesecreatkey"
    

    );
  
    res.cookie("access", token, { httpOnly: true })
      .status(200)
      .json({
        status: 200,
        message: "Login success",
        token: token, 
        data: user
      });
  } catch (error) {
    console.log(error)
    return res.status(500).send("Internal Server Error");
  }
};

module.exports={login,register,registerAdmin
    
}