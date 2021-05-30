const express = require('express');
const { check, body} = require('express-validator/check');

const authController = require('../controllers/auth');
const User = require('../models/user');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.get('/reset', authController.getReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/login', [
    body('email', 'Enter a valid Email.')
        .isEmail()
        //.withMessage('Enter a valid Email.')
        .normalizeEmail(),
    body('password', 'Incorrect Password')
        //.withMessage('Incorrect Password')
        .isLength({min: 6})
        .trim()
], authController.postLogin);

router.post('/signup', 
    check('email', 'Email is not Valid')
        .isEmail()
        //.withMessage('Email is not Valid')
        .custom((value, { req }) => {
            return User.findOne({ email: value })
            .then(userDoc => {
                if (userDoc) {
                    return Promise.reject('Email already exists');
                }
            });
        })
        .normalizeEmail(),
    body('password', 'Password must be at least 6 characters.').isLength({min: 6}).trim(),
    body('confirmPassword')
        .trim()
        .custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Passwords must match.');
        }
    }),
    authController.postSignup);

router.post('/reset', authController.postReset);

router.post('/new-password', authController.postNewPassword);

router.post('/logout', authController.postLogout);

module.exports = router;