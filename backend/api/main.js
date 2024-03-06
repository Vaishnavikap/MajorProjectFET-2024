

const express = require("express");
require("../ConnectionConfig/connect");
const paymentRouter=require("../router/paymentrouter")
const cors=require("cors");
const ex = express();
ex.use(express.json())
ex.use(cors())
ex.use(express.urlencoded({extended:false}))
ex.use("/",paymentRouter);

ex.listen(3000,function () {
    console.log("server is running");
});

