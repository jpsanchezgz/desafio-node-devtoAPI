const express = require('express')

const auth = require('./../usecases/auth')

const router = express.Router()

router.post('/signup', async (req, res) => {
    try {
        const { email, password} = req.body
        const userSignedUp = await auth.signup(email, password)

        res.json({
            success: true,
            data: userSignedUp
        })
    } catch (error) {
        res.status(400)
        res.json({
            success: false,
            message: error.message
        })
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const token = await auth.login(email, password)

        res.json({
            success: true,
            data: {
                token: token
            }
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