const router = require('express').Router();
const MakeRequestController = require("../controller/make_request_controller");

router.post('/addRequestDetails',MakeRequestController.addRequestDetails);

module.exports = router;