const createUser = require('./userCreation');
const createProduct = require('./productsCreation');
const showProductsList = require('./ShowProductsList');
const showProductsListByType = require('./ShowProductsListByType');
const loginAccess = require ('./login');
const listAllUsers = require ('./listAllUsers');
const verifyToken = require ('./jwtVerify');
const deleteProduct = require ('./deleteProduct');
const updateProductPrice = require ('./updateProductPrice');
const updateProductInventory = require ('./updateProductInventory');
const updateProductGroup = require ('./updateProductGroup');
const updateUserPassword = require ('./updateUserPassword');
const updateUserEmail = require ('./updateUserEmail');
const updateUserPhone = require ('./updateUserPhone');
const deleteUser = require ('./deleteUser');

function routes (app){
app.post('/users/create', createUser)
app.post('/products/create', createProduct)
app.post('/products/delete', deleteProduct)
app.post('/products/update/price', updateProductPrice)
app.post('/products/update/inventory', updateProductInventory)
app.post('/products/update/group', updateProductGroup)
app.post('/users/delete', deleteUser)
app.post('/users/update/password', updateUserPassword)
app.post('/users/update/email', updateUserEmail)
app.post('/users/update/phone', updateUserPhone)
app.post('/users/login', loginAccess)
app.post('/users/list', listAllUsers)
app.get('/products/list', verifyToken, showProductsList)
app.get('/products/list/by-type', verifyToken, showProductsListByType)}
module.exports = routes