const express = require('express');
const paymentRouter = express.Router();
const paymentController = require('../controller/paymentcontroller');
const { getPaymentByUserId } = require('../controller/paymentcontroller');

paymentRouter.post('/create-order', paymentController.createOrder);
paymentRouter.get('/payment/userId/:userId', getPaymentByUserId);

module.exports = paymentRouter;
