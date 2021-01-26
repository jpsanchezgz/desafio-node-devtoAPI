const express = require('express')

const postsRouter = require('./routes/posts')

const app = express()

app.use(express.json())
app.use('/posts', postsRouter)

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'DevToAPI : )'
    })
})

module.exports = app