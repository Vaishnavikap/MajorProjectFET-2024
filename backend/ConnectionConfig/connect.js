const mongoose=require("mongoose")

const stripe_config ={
    secret_key:"",
    currency: "INR",
    success_url:"http://locahost:4200/success?session_id={checkout_session_id} ",
    cancel_url: "http://localhost:4200/payment ",
}
const stripe= require ("stripe")(stripe_config.secret_key);
async function createSession(params,callback){
    const session= await stripe.checkout.sessions.create({
        payment_method_types:['card'],
        line_items:[{price:params.priceId,quantity:1}],
        mode:payment,
        Success_url:stripe.success_url,
        Cancel_url:stripe.cancel_url

    })
    callback({id: session.id})
}

module.exports={
    stripe_config,
    createSession
}