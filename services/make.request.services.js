const RequestModel = require('../models/make_request_model')

class MakeRequestServices{

    static async addRequestDetails(service_type,service_center,specific_services,date_time){
        try {

            const addRequestDetails = new RequestModel({service_type,service_center,specific_services,date_time});
            return await addRequestDetails.save();

        }catch (err){
            throw err;
        }

    }

}

module.exports = MakeRequestServices;