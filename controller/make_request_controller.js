const AddRequestService = require("../services/make.request.services");

exports.addRequestDetails = async (req,res,next) =>{
    try {
        const {service_type,service_center,specific_services,date_time} = req.body;

        const successRes = await AddRequestService.addRequestDetails(service_type,service_center,specific_services,date_time);

        res.json({ status:true, successRes:"Request added Successfully"})
    }catch (error){
        throw error
    }
}

