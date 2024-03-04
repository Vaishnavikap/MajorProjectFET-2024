const express = require("express");
const {getAllUsers, getUserById }= require("../controller/usercontroller.js");
const {verifyAdmin, verifyUser }= require("../utils/verifyToken.js");
const userRouter = express.Router();






userRouter.get('/', verifyAdmin, getAllUsers)


userRouter.get('/:id', verifyUser, getUserById)



module.exports = userRouter;