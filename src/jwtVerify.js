function verifyToken(req, res, next) {
    try {
      const token = req.headers.authorization
      if (!token) {
        throw new Error('Token invalidado')
      }
      const checkToken = jwt.verify(token, process.env.JWT_KEY)
      next()
    } catch (error) {
      res.status(401).json({ error: 'Token invalido, faça login novamente' })
    }
  }

  module.exports = verifyToken