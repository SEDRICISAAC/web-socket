;
'use strict'

const env = require('dotenv').config()
const app = require('./app')
const port = process.env.PORT || 3000
const fs = require('fs')

const httpsOptions = {
    key: fs.readFileSync('./ssl/server.key'),
    cert: fs.readFileSync('./ssl/server.crt')
}


let https = require('https').Server(httpsOptions, app)
let io = require('../controls/chat.control')(https)

app.get('/', (req, res) => {
    res.send("Conected")
})

https.listen(port, () => {
    console.log(`The port is in https://localhost:${port}`)
})

