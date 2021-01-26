const Posts = require('./../models/posts')

function getAllPosts () {
    return Posts.find({})
}

function createPost (date, name, lastName, savedPost, picUrl, title, tags, text) {
    return Posts.create( {date, name, lastName, savedPost, picUrl, title, tags, text})
}

module.exports = {
    getAllPosts,
    createPost
}