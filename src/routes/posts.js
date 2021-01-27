const express = require('express')

const posts = require('./../usecases/posts')

const authMiddleware = require('./../middlewares/auth')//agregar el middleware de autorización

const router = express.Router()

router.get('/', authMiddleware, async (req, res) => { //preguntar a charles de esta ruta
    const allPosts = await posts.getAllPosts()

    res.json({
        success: true,
        data: allPosts
    })
})

router.post('/', authMiddleware, async (req, res) => {
    try {
        const { date, name, lastName, savedPost, picUrl, title, tags, text } = req.body
        const postCreated = await posts.createPost(date, name, lastName, savedPost, picUrl, title, tags, text)
    
        res.json({
            success: true,
            data: postCreated
        }) 
    } catch (error) {
        res.status(401)
        res.json({
            success: false,
            message: error.message
        })
    }
})

module.exports = router