const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    date: {
        type: Date,
        minlength: 10,
        required: true,
        maxlength: 50
    },
    name: {
        type: String,
        minlength: 2,
        maxlength: 25,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        minlength: 2,
        maxlength: 50,
        required: true,
        trim: true
    },
    savedPost: {
        type: Boolean,
        required: true
    },
    picUrl: {
        type: String,
        trim: true
    },
    title: {
        type: String,
        minlength: 1,
        maxlength: 50,
        required: true,
        trim: true
    },
    tags: {
        type: Array,
        minlength: 2,
        maxlength: 50,
        trim: true
    },
    text: {
        type: String,
        minlength: 2,
        required: true
    }
})

module.exports = mongoose.model('posts', schema)