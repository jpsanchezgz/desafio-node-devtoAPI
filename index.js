require('dotenv').config() //se v a traer nuestras variables de nuestro archivo .env Es decir las va a cargar. documentacion de dotenv.

const server = require('./src/server')

const db = require('./src/lib/db')

db.connect
    .then( () => {
        server.listen('8081', () => {
            console.log('Server is listening :D')
        })
    })
    .catch( error => console.error('Error: ', error))
    