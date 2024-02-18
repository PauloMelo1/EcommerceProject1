const createUser = require('./userCreation');
const createProduct = require('./productsCreation');
const showProductsList = require('./ShowProductsList');
const showProductsListByType = require('./ShowProductsListByType');
const loginAccess = require ('./login');
const listAllUsers = require ('./listAllUsers');
const verifyToken = require ('./jwtVerify');
const deleteProduct = require ('./deleteProduct');

function routes (app){
app.post('/users/create', createUser)
app.post('/products/create', createProduct)
app.post('/products/delete', deleteProduct)
app.post('/users/login', loginAccess)
app.post('/users/list', listAllUsers)
app.get('/products/list', verifyToken, showProductsList)
app.get('/products/list/by-type', verifyToken, showProductsListByType)}
module.exports = routes