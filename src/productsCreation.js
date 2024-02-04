
const connectDb = require('./mongoDb')
const express = require('express')
const productsModel = require('./models/productsModel')


connectDb()
const app = express()
app.use(express.json());


const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

async function createProduct(req, res) {
    const input = {
        product: req.body.product,
        characteristics: req.body.characteristics,
        stamp: req.body.stamp,
        price: req.body.price,
        categorie: req.body.categorie,
        subCategorie: req.body.subCategorie,
        group: req.body.group,
        inventory: req.body.inventory,
        name: req.body.product + req.body.characteristics + req.body.stamp
    }

    if (!input.product) {
        res.send('Insira o produto (bistoito, panela, sabão ...)')
        return
    }
    if (!input.characteristics) {
        res.send(`Insira as caracteristas de ${input.product} (peso, volume, sabor e etc...)`)
        return
    }
    if (!input.stamp) {
        res.send(`Insira a marca de ${input.product + " " + input.characteristics} (Nestlé, Omo, Vonix...)`)
        return
    }
    if (!input.price) {
        res.send(`Insira o preço do ${input.product + " " + input.characteristics} (EX: 1800,25)`)
        return
    }
    if (isNaN(input.price)) {
        res.send('Insira o preço apenas com números (EX: 1800,25)')
    }
    if (!input.categorie) {
        res.send(`Indique a qual categoria  ${input.product + " " + input.characteristics} pertence (alimentação, limpeza, eletro...)`)
        return
    }
    if (!input.subCategorie) {
        res.send(`Indique a qual subcategoria  ${input.product + " " + input.characteristics} pertence (frios, higiene poessoal, escritório...)`)
        return
    }
    if (!input.group) {
        res.send(`Indique a qual grupo  ${input.product + " " + input.characteristics} pertence (normal, campanha, promo, desconto)`)
        return
    }
    if (!input.inventory) {
        res.send(`Informe quantas unidades de ${input.product + " " + input.characteristics} serão disponibilizadas no estoque`)
        return
    }
    if (isNaN(input.inventory)) {
        res.send('Digite apenas números para a quantidade do estoque')
        return
    }

    await productsModel.create(input)
    res.send(`Produto ${input.product + " " + input.characteristics + " " + input.stamp} cadastrado com sucesso!!!`  )
}
module.exports = createProduct
