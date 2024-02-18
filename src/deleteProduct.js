const connectDb = require('./mongoDb')
const express = require('express')
const productsModel = require("./models/productsModel")


async function deleteProduct(req, res) {
    const { name } = req.body
    if (!name) {
        res.send('Preencha com o nome de um produto')
        return
    }
    const productFinder = await productsModel.findOne({ name: name })
    if (!productFinder) {
        res.send('Insira um nome de produto válido')
        return
    }
    if (productFinder) {
        await productsModel.deleteOne({_id: productFinder._id})
        res.send('pronto')
    }
}
module.exports = deleteProduct