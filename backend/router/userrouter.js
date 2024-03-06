const express = require("express");
const {getAllUsers, getUserById ,deleteUser}= require("../controller/usercontroller.js");
const {verifyAdmin, verifyUser }= require("../utils/verifyToken.js");
const userRouter = express.Router();





// userRouter.get('/user',getAllUsers )


// userRouter.get('/user:id',getUserById)


userRouter.get('/user', getAllUsers)


userRouter.get('/user/:id', getUserById)
userRouter.delete('/deleteUser/:id',deleteUser)


module.exports = userRouter;