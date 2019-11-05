const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const model=require('../models/addRestaurants');
mongoose.connect("mongodb://localhost/test");



const router=require('../../routes/index');

app.use(router);
app.listen(port, () => console.log(`server is running on port ${port}`));
