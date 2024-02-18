const connectDb = require('./mongoDb')
const express = require('express')
const productsModel = require("./models/productsModel")


async function updateProductInventory(req, res) {
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
            { inventory: req.body.inventory }
        )
        res.send(`O estoque de ${productFinder.name} foi ajustado para ${req.body.inventory}`)
    }
}
module.exports = updateProductInventory