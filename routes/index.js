const express = require('express');
const router = express.Router();
const dateFns = require('date-fns');
const mongoose = require('mongoose');
const Message = require('../models/Message');
require('dotenv').config();

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set('strictQuery', false);

// Define the database URL to connect to.
const mongoDB = `mongodb+srv://ev0clu:${process.env.KEY}@cluster0.6ywffwq.mongodb.net/mini_message_board?retryWrites=true&w=majority`;

init();

async function init() {
    try {
        await mongoose.connect(mongoDB);
    } catch (err) {
        console.log(err);
    }
}

async function createMessage(text, user) {
    try {
        const newMessage = new Message({
            text: text,
            user: user
        });
        await newMessage.save();
    } catch (err) {
        console.log(err);
    }
}

async function getMessage() {
    try {
        const messages = await Message.find();

        console.log('dd:', messages);

        const updatedMessages = messages.map((message) => {
            const formattedDate = dateFns.format(message.createdAt, 'MM/dd/yyy HH:mm');
            return {
                text: message._doc.text,
                user: message._doc.user,
                createdAt: formattedDate
            };
        });
        console.log('arr:', updatedMessages);
        return updatedMessages;
    } catch (err) {
        console.log(err);
    }
}

/* GET home page. */
router.get('/', async function (req, res, next) {
    res.render('index', { title: 'Mini message board', messages: await getMessage() });
});

/* POST new message*/
router.post('/new', async function (req, res, next) {
    const messageText = req.body.messageText;
    const userName = req.body.userName;

    await createMessage(messageText, userName);

    res.redirect('/');
});

module.exports = router;
