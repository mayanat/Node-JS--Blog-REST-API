const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
    title: String,
    autor: String,
    autorPic:String,
    content: String,
    contentPic:String,
    commats:[String],
    likes:Number,
    date: { type: Date, default: Date.now },
}, {
    timestamps: true
});

module.exports = mongoose.model('Blog', BlogSchema);