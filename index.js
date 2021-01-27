require('dotenv').config()

const server = require('./src/server')

const db = require('./src/lib/db')

db.connect
    .then( () => {
        server.listen('8081', () => {
            console.log('Server is listening :D')
        })
    })
    .catch( error => console.error('Error: ', error))
    