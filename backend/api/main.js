


const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const express = require("express");


require("../ConnectionConfig/connect");

const songRouter=require("../router/songrouter")
const roleRouter=require("../router/rolerouter")
const authRouter=require("../router/authrouter")
const userRouter=require("../router/userrouter")
const paymentRouter=require("../router/paymentrouter")
const playlistRouter = require("../router/playlistrouter");
const cors=require("cors");


const ex = express();
ex.use(express.json())
ex.use(cors())
ex.use(express.urlencoded({extended:false}))
ex.use(cookieParser());
ex.use("/", songRouter);
ex.use("/", roleRouter);
ex.use("/", authRouter);
ex.use("/",userRouter);
ex.use("/",paymentRouter);
ex.use("/", playlistRouter);
ex.use('/uploads/images', express.static('uploads/images'));





ex.listen(3000,function () {
    console.log("server is running");
});