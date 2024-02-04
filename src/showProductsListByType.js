
const connectDb = require('./mongoDb')
const express = require('express')
const productsModel = require('./models/productsModel')


connectDb()
const app = express()
app.use(express.json());


const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

async function showProductsListByType(req, res) {

    await
    res.send()
}
module.exports = showProductsListByType
