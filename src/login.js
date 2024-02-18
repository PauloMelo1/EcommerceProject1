const userModel = require('./models/userModel')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

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
      const token = jwt.sign(userDTO, process.env.JWT_KEY, {
        expiresIn: "1h"
      })
      res.send('Logado com sucesso!')
      return
    } else {
      res.send('Usuário ou senha incorreto(s)')
      return
    }
  }

  module.exports = loginAccess