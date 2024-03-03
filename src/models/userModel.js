const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    document: {type: String, required: true, unique: true}, //cpf
    email: {type: String, required: true, unique: true}, //unique > evita repetiçoes se for TRUE, se for FALSE aceita repetiçao
    password: {type: String, required: true},
    phone: {type: String, required: true, unique: true},
    accessLevel: {type: String, required: true, unique: true},
    // preference: {type: String, required: true},
});

module.exports = mongoose.model('user', UserSchema);
//.model me libera funcionalidades no banco de dados para operar em cima do msm (ex: .create, .find, .delete...)
//primeiro parametro ('user') é o nome da coleçao
//segundo parametro (UserSchema) é o nome do Schema
//se ja existir a coleçao citada, ele preenche dentro, se nao existir, ele cria uma nova