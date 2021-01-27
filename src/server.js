const express = require('express')

const cors = require('cors')

const postsRouter = require('./routes/posts')

const authRouter = require('./routes/auth')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/posts', postsRouter)
app.use('/auth', authRouter)

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'DevToAPI : )'
    })
})

module.exports = app