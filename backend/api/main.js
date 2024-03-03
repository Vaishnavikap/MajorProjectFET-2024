const mongoose = require("mongoose");
const express = require("express");
require("../ConnectionConfig/connect");

const path = require('path');
//song-upload
const songRouter=require("../router/songrouter")
const cors=require("cors");
const Song = require("../model/songmodel");
const ex = express();
ex.use(express.json())
ex.use(cors())
ex.use(express.urlencoded({extended:false}))

ex.use("/", songRouter);
// ex.use('/uploads', express.static(path.join(__dirname, 'api', 'upload')));







ex.listen(3000,function () {
    console.log("server is running");
});