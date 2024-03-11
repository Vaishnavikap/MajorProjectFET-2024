const Razorpay = require('razorpay');
const Payment = require('../model/paymentmodel');
const User = require("../model/usermodel");

const razorpay = new Razorpay({
  key_id: 'rzp_test_XI7WHiqg2QZPmd',
  key_secret: 'LizSmj5FDtYJ1b4ocNLWFc5Q'
});

// Define the generatepaymentId function
const generatepaymentId = async () => {
  try {
    const highestExistingPayment = await Payment.findOne().sort({ paymentId: -1 });
    let newPaymentId;
    if (highestExistingPayment && highestExistingPayment.paymentId) {
      newPaymentId = highestExistingPayment.paymentId + 1;
    } else {
      newPaymentId = 1;
    }
    return newPaymentId;
  } catch (error) {
    console.error('Error generating userId:', error);
    throw new Error('Error generating userId');
  }
};

exports.createOrder = async (req, res) => {
  const { amount, userId } = req.body; // Assuming userId is provided in the request body

  if (!amount || !userId) {
    return res.status(400).json({ error: 'Amount and userId are required.' });
  }

  try {
    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${new Date().getTime()}`,
      payment_capture: '1'
    };

    const order = await razorpay.orders.create(options);
    const paymentId = await generatepaymentId(); // Use the generatepaymentId function
    const payment = new Payment({
      paymentId,
      orderId: order.id,
      amount,
      currency: "INR",
      receipt: options.receipt,
      userId,
      
    });

    await payment.save();

    res.json(order);
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(error.statusCode || 500).send({ error: error.message });
  }
};

exports.getPaymentByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const payments = await Payment.find({ userId });

    // If payments are found, send them to the client
    if (payments && payments.length > 0) {
      return res.status(200).json(payments);
    }
    
    // If no payments are found, send 'N/A' as the response
    return res.status(200).json({ message: 'N/A' });
  } catch (error) {
    // If an error occurs during fetching payments, send an internal server error response
    console.error('Error fetching payments by user ID:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
