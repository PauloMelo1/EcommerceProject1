const connectDb = require('../mongoDb')
const express = require('express')
const productsModel = require("../models/productsModel")


async function updateProductPrice(req, res) {
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
        await productsModel.updateOne(
            { _id: productFinder._id },
            { price: req.body.price }
        )
        res.send(`O valor de ${productFinder.name} foi alterado para R$${req.body.price}`)
    }
}
module.exports = updateProductPrice