const userModel = require('../models/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const signupController = (req, res) => {
    const { name, avatar, email, password } = req.body;
    if (!name || !avatar || !email || !password) {
        return res.status(400).send('Missing required information');
    }
    bcrypt.hash(password, 5, function (err, hash) {
        if (err) {
            return res.send("Error while hashing password")
        }
        try {
            const user = new userModel({ name, avatar, email, password: hash })
            user.save();
            return res.status(201).send('Register Successfull');
        } catch (error) {
            console.log(error)
            return res.status(500).send('Internal server error')
        }
    })
}

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email: email });
        const userId = user._id.toString()
        const hash = user.password

        bcrypt.compare(password, hash, function (err, result) {
            if (err) {
                console.log('Error during comparion:', err)
                return res.status(500).send({ message: 'An error occured while verifying the password.' })
            }
            if (result) {
                const token = jwt.sign({ userId: userId }, process.env.SECRETE_KEY);
                console.log('Token generated:', token)
                return res.status(201).send({ token: token })
            } else {
                return res.status(401).send({ message: 'Authentication failed. Invalid password.' })
            }
        });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).send({ message: 'Internal server error.' });
    }
}
module.exports = { signupController, loginController }