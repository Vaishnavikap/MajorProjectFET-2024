<<<<<<< HEAD

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
=======
const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define payment schema
const paymentSchema = new Schema({
  orderId: { type: String, required: true, unique: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  receipt: { type: String, required: true },
  paymentId: { type: String },
  status: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Payment = mongoose.model('Payment', paymentSchema);

mongoose.connect('mongodb://localhost:27017/payment', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const app = express();
app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: 'rzp_test_XI7WHiqg2QZPmd',
  key_secret: 'LizSmj5FDtYJ1b4ocNLWFc5Q'
});

app.post('/create-order', async (req, res) => {
  const { amount } = req.body;
  console.log(amount)

  // Validate request body
  if (!amount) {
    return res.status(400).json({ error: 'Amount is required and should be a positive number.' });
  }

  try {
    const options = {
      amount:  amount*100, // Convert amount to smallest currency unit (e.g., paise for INR)
      currency: "INR",
      receipt: `receipt_${new Date().getTime()}`, // Generate a unique receipt number
      payment_capture: '1'
    };
    

    const order = await razorpay.orders.create(options);

    // Save payment details to MongoDB
    const payment = new Payment({
      orderId: order.id,
      amount: amount,
      currency: "INR",
      receipt: options.receipt
    });
    await payment.save();

    res.json(order);
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(error.statusCode || 500).send({ error: error.message });
  }
});

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
>>>>>>> 8ad86ea62112c0169735b111bda31052ad9fc059
