const dateFns = require('date-fns');
const Message = require('../models/Message');

exports.render_index_page = async function (req, res, next) {
    try {
        const messages = await Message.find();

        const updatedMessages = messages.map((message) => {
            const formattedDate = dateFns.format(message.createdAt, 'MM/dd/yyy HH:mm');
            return {
                text: message._doc.text,
                user: message._doc.user,
                createdAt: formattedDate
            };
        });

        res.render('index', { title: 'Mini message board', messages: updatedMessages });
    } catch (err) {
        return next(err);
    }
};

exports.add_new_message = async function (req, res, next) {
    try {
        const messageText = req.body.messageText;
        const userName = req.body.userName;

        const newMessage = new Message({
            text: messageText,
            user: userName
        });

        await newMessage.save();
        res.redirect('/');
    } catch (err) {
        return next(err);
    }
};
