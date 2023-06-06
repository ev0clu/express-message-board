const express = require('express');
const router = express.Router();
const dateFns = require('date-fns');

const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: '05.06.2023 15:31'
    },
    {
        text: 'Hello World!',
        user: 'Charles',
        added: '05.06.2023 16:40'
    }
];

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Mini message board', messages: messages });
});

/* POST new message*/
router.post('/new', function (req, res, next) {
    const messageText = req.body.messageText;
    const userName = req.body.userName;
    messages.push({
        text: messageText,
        user: userName,
        added: dateFns.format(new Date(), 'MM/dd/yyy HH:mm')
    });
    res.redirect('/');
});

module.exports = router;
