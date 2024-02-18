const connectDb = require('./mongoDb')
const express = require('express')
const routes = require('./routes')

require('dotenv').config()


connectDb()
const app = express()
app.use(express.json());

routes(app)

app.listen(7575, () => console.log('Server ON!!'))
