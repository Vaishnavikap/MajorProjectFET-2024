const stripeServices= require("../../backend/ConnectionConfig/connect")
exports.createPaymentSession= (req, res, next)=>{
    stripeServices.createSession({priceId:req.body.priceId},(response)=>{
        return res.status(200).send(response);
    })
    
}
const express=require('express');
const router=express.Router();                                   
