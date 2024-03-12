const Razorpay = require('razorpay');
const Payment = require('../model/paymentmodel');

const razorpay = new Razorpay({
  key_id: 'rzp_test_XI7WHiqg2QZPmd',
  key_secret: 'LizSmj5FDtYJ1b4ocNLWFc5Q'
});

exports.createOrder = async (req, res) => {
  const { amount } = req.body;

  if (!amount) {
    return res.status(400).json({ error: 'Amount is required and should be a positive number.' });
  }

  try {
    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${new Date().getTime()}`,
      payment_capture: '1'
    };

    const order = await razorpay.orders.create(options);
    const paymentId= await generatepaymentId();
    const payment = new Payment({
      paymentId,
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
  

const generatepaymentId = async () => {
  try {
    const highestExistingPayment= await Payment.findOne().sort({ paymentId: -1 });
    let newPaymentId;
    if (highestExistingPayment && highestExistingPayment.paymentId) {
      newPaymentId = highestExistingPayment.PaymentId + 1;
    } else {
      newPaymentId = 1;
    }
    return newPaymentId;
  } catch (error) {
    console.error('Error generating userId:', error);
    throw new Error('Error generating userId');
  }
};
};
