//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();

const usernames = [];

router.get('/',(req, res, next) => {
    rendTA02(res);
});

router.post('/addUser', (req, res, next) => {
    usernames.push(req.body.username);
    rendTA02(res);
});

router.post('/removeUser', (req, res, next) => {
    const index = usernames.indexOf(req.body.username);
    if (index > -1) {
        usernames.splice(index, 1);
    }
    rendTA02(res);
});

function rendTA02(res) {
    res.render('pages', { 
        title: 'Team Activity 02', 
        names: usernames,
        path: '/ta02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
}

module.exports = router;