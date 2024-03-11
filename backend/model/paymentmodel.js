const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  paymentId:{type:Number,required:true},
  orderId: { type: String, required: true, unique: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  receipt: { type: String, required: true },
  status: { type: String },
  createdAt: { type: Date, default: Date.now },
  userId: { type: String, required: true } 

});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
