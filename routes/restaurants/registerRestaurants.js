const express = require("express");
const router = express.Router();
const restauranModel = require("../../src/models/restaurants");
router.post("/", (req, res) => {
  const data = req.body;
  const restaurantName = data.name;
  const cityName = data.city;
  const address = data.address;
  const phone = data.phone;
  const manageName = data.manageName;
  const managePhone = data.managePhone;
  const userManagement = `res${managePhone}${phone}`;
  //const date = new Date().getMilliseconds() + new Date().getDate();
  // console.log(date);
  // const sixDigit = phone.slice(0, 6);
  const id = `${phone}${managePhone}`;
  console.log(id);
  restauranModel.findOne({ id: id }, (error, findData) => {
    if (error)
      res.json({
        status: 400,
        message: error
      });
    if (findData) {
      res.json({
        data: findData,
        status: 300,
        message: "این رستوران قبلا ثبت شده است"
      });
    } else {
      const newRestaurant = new restauranModel({
        name: restaurantName,
        city: cityName,
        address: address,
        phone: phone,
        manageName: manageName,
        managePhone: managePhone,
        id: id,
        userManagement: userManagement
      });
      newRestaurant.save();
      res.json({
        data: data,
        id: id,
        status: 200
      });
      return;
    }
  });
});
router.post("/location", (req, res) => {
  // console.log(req.body);
  const data = req.body;
  const id = data.id;
  const latitude = data.location.latitude;
  const longitude = data.location.longitude;
  const location = data.location;
  // console.log(myId);
  if (location == 0) {
    res.json({
      message: "لوکیشن را درست انتخاب کنید",
      status: 400
    });
    return;
  }
  var query = { id: id };
  console.log(location, latitude, longitude);
  restauranModel.findOneAndUpdate(
    query,
    { latitude: latitude, longitude: longitude },
    { new: true }
  );
  restauranModel.findOne({ id: id }, (error, myData) => {
    if (error) {
      res.json({
        message: error,
        status: 400
      });
      return;
    } else {
      console.log(myData);
      res.json({
        status: 200,
        data: myData
      });
    }
  });
});

module.exports = router;
