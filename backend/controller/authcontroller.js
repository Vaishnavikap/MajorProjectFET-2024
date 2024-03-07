
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
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  const userId= await generateuserId();
  const newUser = new User({
userId,
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    email: req.body.email,
    password: hashPassword,
    roles: role
  });
  await newUser.save();
  return res.json(createSuccess(200, "Registration Success")); 
}
const registerAdmin = async (req, res, next) => {
  try {
    console.log("Starting registerAdmin function...");
    const role = await Role.find({});
    console.log("Retrieved roles:", role);
    const salt = await bcrypt.genSalt(10);
    if (!salt) {
      throw new Error('Failed to generate salt');
    }
    console.log("Generated salt:", salt);
    const hashPassword = await bcrypt.hash(req.body.password || '', salt);
    console.log("Hashed password:", hashPassword);
    const userId= await generateuserId();
    const newUser = new User({
      userId,
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      email: req.body.email,
      password: hashPassword,
      isAdmin: true,
      roles: role
    });
    console.log("Created new user:", newUser);

    await newUser.save();
    console.log("User saved successfully.");

    return res.json(createSuccess(200, "Admin Registered successfully!"));
  } catch (error) {
    console.error("Error in registerAdmin function:", error);
    return res.status(500).json(createError(500, error.message || 'Internal Server Error'));
  }
}
const login = async (req, res, next) => {
  try {
    const userEmail = req.body.email;
    console.log("Attempting login for user with email:", userEmail);

    const user = await User.findOne({ email: userEmail }).populate("roles", "role");
    console.log("Retrieved user:", user);

    if (!user) {
      console.log("User not found for email:", userEmail);
      return res.status(404).send("User not found");
    }

    const { roles } = user;
    console.log("User roles:", roles);

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    console.log("Is password correct?", isPasswordCorrect);

    if (!isPasswordCorrect) {
      console.log("Password is incorrect for user with email:", userEmail);
      return res.status(400).send("Password is incorrect");
    }

    const isAdmin = roles.some(role => role.role === "Admin");
    const isUser = roles.some(role => role.role === "User");
    const roleNames = roles.map(role => role.role); 
    const token = jwt.sign(
      { id: user._id, isAdmin: isAdmin, roles: roles }, 
      "thesecreatkey"
    );

    res.cookie("access", token, { httpOnly: true });

    if (isAdmin) {
      console.log("Admin login success for user with email:", userEmail);
      return res.status(200).json({
        status: 200,
        message: "Admin login success",
        token: token, 
        roles: roleNames,
        data: user
      });
    } else if (isUser) {
      console.log("User login success for user with email:", userEmail);
      return res.status(200).json({
        status: 200,
        message: "User login success",
        token: token, 
        roles: roleNames,
        data: user
      });
    }
  } catch (error) {
    console.error("Error in login function:", error);
    return res.status(500).send("Internal Server Error");
  }
};



const generateuserId = async () => {
  try {
    const highestExistingUser = await User.findOne().sort({ userId: -1 });
    let newUserId;
    if (highestExistingUser && highestExistingUser.userId) {
      newUserId = highestExistingUser.userId + 1;
    } else {
      newUserId = 1;
    }
    return newUserId;
  } catch (error) {
    console.error('Error generating userId:', error);
    throw new Error('Error generating userId');
  }
};
;


module.exports={login,register,registerAdmin
    
}