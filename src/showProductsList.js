
const connectDb = require('./mongoDb')
const express = require('express')
const productsModel = require('./models/productsModel')
const userModel = require('./models/userModel')




const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

async function showProductsList(req, res) {

    const response = await productsModel.find().select({
        inventory: 0,
        product: 0,
        characteristics: 0,
        stamp: 0,
        group: 0
    });
    res.send(response);

}
module.exports = showProductsList