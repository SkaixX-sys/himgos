const express = require('express')
const env = require('dotenv').config()
const sequelize = require('./db')
const app = express()

const port = process.env.PORT || 4000

try {
    app.listen(port, () => console.log(`Server starts on port: ${port}`))

} catch (e) {
    console.log(e);
}