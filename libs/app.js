const express = require('express');
const body_parser = require('body-parser');
const userRouter = require('../routes/user.routes');
const makeRequestRouter = require('../routes/make_request_routes');

const app = express();

app.use(body_parser.json());
app.use('/',userRouter);
app.use('/',makeRequestRouter);
module.exports =app;