const connectDb = require('./mongoDb')
const express = require('express')
const userModel = require('./models/userModel')


async function deleteUser(req, res) {
    const { name } = req.body
    if (!name) {
        res.send('Preencha com o nome de um produto')
        return
    }
    const userFinder = await userModel.findOne({ name: name })
    if (!userFinder) {
        res.send('Insira um nome de produto válido')
        return
    }
    if (userFinder) {
        await productsModel.deleteOne({_id: userFinder._id})
        res.send('pronto')
    }
}
module.exports = deleteProduct