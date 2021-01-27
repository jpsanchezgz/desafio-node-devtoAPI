const jwt = require('jsonwebtoken')

function auth (req, res, next) {
    try {
        const token = req.headers.authorization

        if(!token) throw new Error('Token required')

        const payloadDecoded = jwt.verify(token, 'miPalabraClave')

        if(!payloadDecoded) throw new Error('Invalid token')

        next()

    } catch (error) {
        res.status(401)
        res.json({
            success: false,
            message: error.message
        })
    }
}

module.exports = auth