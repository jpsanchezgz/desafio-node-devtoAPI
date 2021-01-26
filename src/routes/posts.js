const express = require('express')

const posts = require('./../usecases/posts')

//agregar el middleware de autorización

const router = express.Router()

router.get('/', async (req, res) => { //preguntar a charles de esta ruta
    const allPosts = await posts.getAllPosts()

    res.json({
        success: true,
        data: allPosts
    })
})

router.post('/', async (req, res) => {
    const { date, name, lastName, savedPost, picUrl, title, tags, text } = req.body
    const postCreated = await posts.createPost(date, name, lastName, savedPost, picUrl, title, tags, text)

    res.json({
        success: true,
        data: postCreated
    })
})

module.exports = router