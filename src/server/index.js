const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const model=require('../models/addRestaurants');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))
mongoose.connect("mongodb://localhost/test");



const router=require('../../routes/index');

app.use(router);
app.listen(port, () => console.log(`server is running on port ${port}`));
