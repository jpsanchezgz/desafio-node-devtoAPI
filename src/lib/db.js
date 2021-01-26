const mongoose = require('mongoose')

const url = 'mongodb+srv://juanpablosg:ff6.61aJJJ@kodemiajp.gv2bg.mongodb.net/devto'

const connect = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

module.exports = {
    connect
}