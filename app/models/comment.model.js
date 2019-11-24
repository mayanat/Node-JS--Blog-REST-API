const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    name: String,
    comment: String,
    bId:String,
    date: { type: Date, default: Date.now },
}, {
    timestamps: true
});

module.exports = mongoose.model('Comment', CommentSchema);