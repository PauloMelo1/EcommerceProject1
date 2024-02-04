const mongoose = require('mongoose');


const ProductsSchema = new mongoose.Schema({
    product: {type: String, required: true}, //biscoito, bolacha, pao, manteiga...
    characteristics: {type: String, required: true}, //15g, 60ml, 1L....
    stamp: { type: String, required: true }, //richester, omo, qualy
    price: { type: Number, required: true }, //"R$" + valor
    categorie: { type: String, required: true }, //alimentação, limpeza, mobilia, eletro
    subCategorie: { type: String, required: true }, //higiene pessoal, frios, enlatados, graos...
    group: { type: String, required: true}, //normal, campanha, promo, desconto
    inventory: {type: Number, required: true}, //quantidade
    name: { type: String, required: true, unique: true }, //product + characteristics + stamp
});

module.exports = mongoose.model('product', ProductsSchema);
//.model me libera funcionalidades no banco de dados para operar em cima do msm (ex: .create, .find, .delete...)
//primeiro parametro ('user') é o nome da coleçao
//segundo parametro (UserSchema) é o nome do Schema
//se ja existir a coleçao citada, ele preenche dentro, se nao existir, ele cria uma nova
