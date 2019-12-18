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
  const day = new Date().getDay();
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const miliseconds = new Date().getMilliseconds();
  // console.log(day, year, month, hour, minute, miliseconds);
  const id = `${year}${day}${month}${hour}${minute}${miliseconds}`;
  restauranModel.findOne({ id: id }, (error, findData) => {
    if (error) {
      res.json({
        status: 400,
        message: error
      });
      return;
    }
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
  const myId = data.id;
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
  restauranModel.findOneAndUpdate(
    { id: myId },
    { latitude: latitude, longitude: longitude },
    { upsert: true, new: true },
    (error, myData) => {
      if (error) {
        res.json({
          message: error,
          status: 400
        });
        return;
      } else {
        myData.save();

        // await myData.update({ latitude: latitude, longitude: longitude });
        // await myData.save();
        console.log(myData);

        res.json({
          status: 200,
          data: myData
        });
      }
    }
  );
});

module.exports = router;
