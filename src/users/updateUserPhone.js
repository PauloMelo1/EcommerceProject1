const connectDb = require('./mongoDb')
const express = require('express')
const userModel = require('./models/userModel')


async function updateUserPhone(req, res) {
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
            { phone: req.body.phone }
        )
        res.send(`${userFinder.name} você alterou seu contato para ${req.body.phone}!`)
    }
}
module.exports = updateUserPhone