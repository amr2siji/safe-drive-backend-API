const mongoose = require('mongoose');
const db = require('../config/db');

const {Schema} = mongoose;

const makeRequestSchema = new Schema({
    service_type:{
        type:String,
        lowercase: true,
        required:true,

    },
    service_center:{
        type:String,
        lowercase: true,
        required:true,

    },
    specific_services:{
        type:String,
        lowercase: true,
        required:true,

    },
    date_time:{
        type:String,
        lowercase: true,
        required:true,

    }

});

const makeRequestModel = db.model('Request_Details',makeRequestSchema);
module.exports = makeRequestModel;