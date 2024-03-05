const app = require('./app.js');
const db = require('../config/db')
const UserModel = require('../models/user_model')

const port = 3000;
 app.listen(port, ()=>{
     console.log('Server lisening on port http://localhost:${port}')
 })