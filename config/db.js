const mongoose = require('mongoose');
const connection = mongoose.createConnection('mongodb+srv://ammar:ammar123@vehicle.hsros5q.mongodb.net/').on('open',()=>{
   console.log("Mongo DB Connected")

}).on('error',()=>{
   console.log("Mongodb connected Error")
});

module.exports = connection;