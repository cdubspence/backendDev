const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const { title } = require('process');

const app = express();
app.set('view engine', 'ejs');

const titles = [];
const descrptions = [];
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res, next) => {
   res.render('prove02Page', {title: "Your Entries", books: titles, descriptions: descrptions});
});

app.post('/info', (req, res, next) => {
    titles.push(req.body.bookTitle);
    descrptions.push(req.body.bookDescription);
    res.render('prove02Page', {title: 'Your Entries', books: titles, descriptions: descrptions});
});

app.listen(5000);