const express = require('express');
const { signupController, loginController }=require('../controllers/userController')
const router = express.Router();

router.post('/login', loginController);
router.post('/register',signupController);

module.exports=router;