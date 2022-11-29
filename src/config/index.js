const mongo = require('mongoose')

async function connect() {
    try {
        await mongo.connect("mongodb://127.0.0.1:27017/api_huet");
        console.log("Connected to database ");
    } catch (error) {
        console.log("Failed to connect");
    }
}

module.exports = {connect};