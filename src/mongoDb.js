const mongoose = require('mongoose');

async function connectDb() {
    try {
        await mongoose.connect('mongodb+srv://pauloeduardojob01:renekton2510@pauloteste1.lqgjzwp.mongodb.net/Projetos');
        //depois do barra de .net/ é o nome do banco de dados que vai ser usado
//se ja existir o banco de dados ja citado, ele preenche dentro, se nao existir, ele cria um novo
        console.log('DB connected')
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = connectDb