const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    text: { type: String, required: true },
    user: { type: String, required: true },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    }
});

module.exports = mongoose.model('messages', messageSchema);
