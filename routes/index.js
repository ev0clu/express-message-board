const express = require('express');
const router = express.Router();
const dateFns = require('date-fns');

const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: dateFns.format(new Date(), 'MM/dd/yyy HH:mm')
    },
    {
        text: 'Hello World!',
        user: 'Charles',
        added: dateFns.format(new Date(), 'MM/dd/yyy HH:mm')
    }
];

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Mini message board', messages: messages });
});

module.exports = router;
