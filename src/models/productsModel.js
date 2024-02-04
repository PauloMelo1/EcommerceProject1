const mongoose = require('mongoose');


const ProductsSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true}, 
    stamp: {type: String, required: true, unique: true}, 
    price: {type: String, required: true, unique: true}, 
    categorie: {type: String, required: true, unique: true}, //alimentação, limpeza, mobilia, eletro
    group: {type: String, required: true, unique: true}, //normal, campanha, promo, desconto
});

module.exports = mongoose.model('product', ProductsSchema);
//.model me libera funcionalidades no banco de dados para operar em cima do msm (ex: .create, .find, .delete...)
//primeiro parametro ('user') é o nome da coleçao
//segundo parametro (UserSchema) é o nome do Schema
//se ja existir a coleçao citada, ele preenche dentro, se nao existir, ele cria uma nova