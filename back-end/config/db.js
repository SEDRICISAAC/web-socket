;
'use strict'

const {MongoClient} = require('mongodb')
const {USER_DB, HOST_DB, PASSWORD, NAME_DB} = process.env
const mongoURL = `mongodb+srv://${USER_DB}:${PASSWORD}@${HOST_DB}/${NAME_DB}?retryWrites=true&w=majority`

let connection
let connectDB = async () => {
    if (connection) return connection
    let client
    try {
        client = await MongoClient.connect(mongoURL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        connection = client.db(NAME_DB)
        console.log(`DB conected`)
    } catch (e) {
        console.log(e)
        process.exit(1)
    }
    return connection
}

module.exports = connectDB
