const connectDb = require('../mongoDb')
const express = require('express')
const userModel = require('../models/userModel')


async function updateUserEmail(req, res) {
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
        await userModel.updateOne(
            { _id: userFinder._id },
            { accessLevel: req.body.accessLevel }
        )
        res.send(`Você alterou a permissão do usuário ${userFinder.name}  com sucesso para ${req.body.accessLevel}`)
    }
}
module.exports = updateUserEmail