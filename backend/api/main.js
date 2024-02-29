const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: 'rzp_test_bhM3BI609c1bUe',
  key_secret: 'Rtm2qkeKZ9oyfd3rlHjDW4m2'
});

app.post('/create-order', async (req, res) => {
  const { amount } = req.body;

  // Validate request body
  if (!amount) {
    return res.status(400).json({ error: 'Amount is required and should be a positive number.' });
  }

  try {
    const options = {
      amount: amount*100, // Convert amount to smallest currency unit (e.g., paise for INR)
      currency: "INR",
      receipt: `receipt_${new Date().getTime()}`, // Generate a unique receipt number
      payment_capture: '1'
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(error.statusCode || 500).send({ error: error.message });
  }
});

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));



