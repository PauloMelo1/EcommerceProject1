const connectDb = require('./mongoDb')
const express = require('express')
const userModel = require('./models/userModel')


async function updateUserPassword(req, res) {
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
            { password: req.body.password }
        )
        res.send(`${userFinder.name} sua senha foi alterada com sucesso!`)
    }
}
module.exports = updateUserPassword