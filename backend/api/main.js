const mongoose = require("mongoose");
const express = require("express");
require("../ConnectionConfig/connect");

//song-upload
const songRouter=require("../router/songrouter")
const cors=require("cors");
const ex = express();
ex.use(express.json())
ex.use(cors())
ex.use(express.urlencoded({extended:false}))

ex.use("/", songRouter);
ex.listen(3000,function () {
    console.log("server is running");
});