const express = require('express');
const router = express.Router();
const dateFns = require('date-fns');

/* GET new message page */
router.get('/', function (req, res, next) {
    res.render('form', { title: 'New message' });
});

module.exports = router;
