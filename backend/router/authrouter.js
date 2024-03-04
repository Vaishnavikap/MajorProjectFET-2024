


const express = require("express");
const {login, register, registerAdmin, }= require("../controller/authcontroller.js");
const authRouter = express.Router();



authRouter.post("/register",register)
authRouter.post("/login", login)
authRouter.post("/register-admin", registerAdmin)

module.exports = authRouter;