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
  const userManagement = "res" + managePhone;
  //const date = new Date().getMilliseconds() + new Date().getDate();
  // console.log(date);
  const sixDigit = phone.slice(0, 6);
  const id = sixDigit;
  //console.log(id);
  restauranModel.findOne({ id: sixDigit }, (error, findData) => {
    if (error)
      res.json({
        status: 400
      });
    if (findData) {
      res.json({
        data: findData,
        status: 300
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
      return
    }
  });

  // console.log(manageName);
  // const array = [];
  // for (let index = 1; index <= manageName.length; index++) {
  //   array.push(manageName.slice(index - 1, index));
  // }
  // array.forEach(element => {
  //   console.log(element);
  // });
});

module.exports = router;
