//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();

const session = require('express-session');

router.get('/',(req, res, next) => {
    // if (!req.sessions.style) {
    //     session(style: '', counter: 0)
    // }
    res.render('pages/ta04', { 
        title: 'Team Activity 04', 
        path: '/ta04', // For pug, EJS 
        activeTA04: true, // For HBS
        contentCSS: true, // For HBS
    });
});

module.exports = router;