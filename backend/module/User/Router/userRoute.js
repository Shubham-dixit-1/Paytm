const express = require('express');
const userController = require("../Controller/userController.js");

const router = express.Router();

// Define routes
router.post('/user', userController.createUser);
router.get('/users', userController.getUser);
router.post('/userlogin', userController.login);

module.exports = router;
