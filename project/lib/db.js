'use strict'
const MongoClient = require('mongodb').MongoClient;

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
let conneciton;

async function connectDB () {
    if (conneciton) return connection

    let client
    try {
        client = await MongoClient.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        connection = client.db(DB_NAME)
    } catch (error) {
        console.error('Connection error ' + error)
        process.exit(1)
    }

    return conneciton
}

module.exports = connectDB