const connectDb = require('./mongoDb')
const express = require('express')
const userModel = require('./models/userModel')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


connectDb()
const app = express()
app.use(express.json());


const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';


async function createUser(req, res) {
    const passwordHash = await bcrypt.hash(req.body.password, 10)
    const input = {
      name: req.body.name,
      document: req.body.document,
      email: req.body.email,
      password: passwordHash,
      phone: req.body.phone
    }
  
  
    if (input.name.length < 2) {
      res.send('Preencha seu nome')
      return app.post('/users/create', createUser)
    }
    const userDocument = await userModel.findOne({ document: input.document })
    if (userDocument) {
      res.send('CPF já cadastrado')
      return
    }
    if (isNaN(input.document)) {
      res.send('Insira apenas números no seu CPF')
      return
    }
    if (input.document.length < 11) {
      res.send('O CPF está incorreto, preencha novamente menor')
      return
    }
    if (input.document.length > 11) {
      res.send('O CPF está incorreto, preencha novamente maior')
      return
    }
    //userModel (arquivo) .findOne ({primeiroParam é o atributo do schema/banco (email, name, document), 
    //segundoParam é o atributo do objeto input})
    const userEmail = await userModel.findOne({ email: input.email })
    if (userEmail) {
      res.send('E-mail já cadastrado')
      return
    }
    if ((input.email.indexOf("@") == -1) || (input.email.indexOf(".") == - 1) || (input.email.length < 10)) {
      res.send('Insira um e-mail válido e completo')
      return
    }
    // if (input.email == userModel.search(input.email)) {
    //   res.send('O e-mail já está em uso')
    //   createUser()
    // }
    if (req.body.password.length < 6) {
      res.send('Crie uma senha com pelo menos 6 digitos')
      return
    }
    const userPhone = await userModel.findOne({ phone: input.phone })
    if (userPhone) {
      res.send('Telefone já cadastrado')
      return
    }
    if (isNaN(input.phone)) {
      res.send('Insira apenas números no seu telefone')
      return
    }
    if (input.phone.length < 11) {
      res.send('Insira seu telefone completo incluindo o DDD como no exemplo: xx9xxxxXXXX')
      return
    }
    // if (input.document == userModel.search(input.document)) {
    //   res.send('O CPF já está em uso')
    //   createUser()
    // }
  
    await userModel.create(input)

    res.send('Usuário cadastrado com sucesso!')
    res.send(input)
  
  }

module.exports = createUser
