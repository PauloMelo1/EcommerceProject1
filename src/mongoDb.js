const mongoose = require('mongoose');
require('dotenv').config()
async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        //depois do barra de .net/ é o nome do banco de dados que vai ser usado
//se ja existir o banco de dados ja citado, ele preenche dentro, se nao existir, ele cria um novo
        console.log('DB connected')
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = connectDb