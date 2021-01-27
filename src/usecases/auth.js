const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const Users = require('./../models/users')

async function signup (email, password) {
    const passwordEncrypted = await bcrypt.hash(password, 15)
    return Users.create( { email, password: passwordEncrypted} )
}

async function login (email, password) {
    const userFound = await Users.findOne( { email } )

    if (!userFound) throw new Error('Invalid data')

    const isPasswordValid = await bcrypt.compare(password, userFound.password)

    if (!isPasswordValid) throw new Error('Invalid data')

    const token = jwt.sign( {id: userFound._id}, 'miPalabraClave' )

    return token
}

module.exports = {
    signup,
    login
}