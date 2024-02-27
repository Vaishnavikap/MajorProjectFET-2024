const stripeController= require("../controller/stripe.controller")
const express=require("express");
const app=express();
const cors= require("cors");
const corsOpt={
    origin:'*',
    methods:[
        'post'
    ],
    allowedHeaders:[
        'Acess-control-allow-origin',
        'origin'
    ]
    
};
app.use(cors(corsOpt));
app.use(express.json());
app.listen(4000,function(){
    console.log("server started");
})
const router=express.Router();
router.post("/create-checkout-session",stripeController.createPaymentSession);
