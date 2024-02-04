const connectDb = require('./mongoDb')
const express = require('express')
const userModel = require('./models/userModel')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const createUser = require ('./usersCreation');
const createProduct = require ('./productsCreation');
const showProductsList = require ('./ShowProductsList');
const showProductsListByType = require ('./ShowProductsListByType');

connectDb()
const app = express()
app.use(express.json());


const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';



function listAllUsers(req, res) {

  res.send('teste11')
}



async function loginAccess(req, res) {
  const { email, password } = req.body
  if (!password || !email) {
    res.send('Preencha ambos os campos solicitados')
    return
  }
  const user = await userModel.findOne({ email: email })
  if (!user) {
    res.send('Nada encontrado')
    return
  }
  const passwordValidate = bcrypt.compareSync(password, user.password)

  if (passwordValidate) {
    const userDTO = {
      name: user.name,
      document: user.document,
      email: user.email,
      phone: user.phone
    }
    const token = jwt.sign(userDTO, "assinaturaDeConexao", {
      expiresIn: "1h"
    })
    res.json({
      name: user.name,
      token: token
    })
    return
  } else {
    res.send('Usuário ou senha incorreto(s)')
    return
  }
}

function verifyToken(req, res, next) {
  try {
    const checkToken = jwt.verify(req.body.token, "assinaturaDeConexao")
    next()
  } catch (error) {
    res.status(401).json({ error: 'Token invalido, faça login novamente' })
  }
}

// if (userLogin && userPassword) {
//   res.send('Logado com sucesso')
// } else {
//   res.send ('Usuário e/ou senha incorrento(s)!')
// }


app.post('/users/create', createUser)
app.post('/products/create', createProduct)
app.post('/users/login', loginAccess)
app.post('/users/list', verifyToken, listAllUsers)
app.get('/products/list', showProductsList)
app.get('/products/list/by-type', showProductsListByType)





app.listen(7575, () => console.log('Server ON!!'))
