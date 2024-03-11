const express = require('express');
const contactRouter = express.Router();
const contactController = require('../controller/contactUscontroller');

contactRouter.post('/submit-form', contactController.submitForm);

module.exports = contactRouter;
