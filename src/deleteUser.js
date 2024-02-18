const connectDb = require('./mongoDb')
const express = require('express')
const userModel = require('./models/userModel')


async function deleteUser(req, res) {
    const { document } = req.body
    if (!document) {
        res.send('Preencha com o nome de um produto')
        return
    }
    const userFinder = await userModel.findOne({ document: document })
    if (!userFinder) {
        res.send('Insira um nome de usuário válido')
        return
    }
    if (userFinder) {
        await userModel.deleteOne({_id: userFinder._id})
        res.send(`Usuário de ${userFinder.name} foi removido com sucesso.`)
    }
}
module.exports = deleteUser