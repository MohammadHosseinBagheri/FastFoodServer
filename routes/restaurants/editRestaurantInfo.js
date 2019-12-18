const express = require("express");
const router = express.Router();
const restaurantModel = require("../../src/models/restaurants");

router.post("/", (req, res) => {
  const data = req.body;
  // console.log(req.body);
  const reqData = req.body.data;
  const id = reqData.id;
  //console.log(reqData)
  const restaurantName = data.restaurantName;
  const restaurantCity = data.restaurantCity;
  const restaurantAddress = data.restaurantAddress;
  const restaurantTelephone = data.restaurantTelephone;
  const restaurantMangerName = data.restaurantMangerName;
  const restaurantManagerPhone = data.restaurantManagerPhone;
  const userManagement = `res${restaurantManagerPhone}${restaurantTelephone}`;
  restaurantModel.findOneAndUpdate(
    { id: id },
    {
      name: restaurantName,
      city: restaurantCity,
      address: restaurantAddress,
      phone: restaurantTelephone,
      manageName: restaurantMangerName,
      managePhone: restaurantManagerPhone,
      userManagement: userManagement
    },
    { multi: true },
    (error, data) => {
      if (error) {
        res.json({
          status: 400,
          message: error
        });
      } else {
        data.save();
        console.log(data);
        res.json({
          status: 200,
          data: data
        });
      }
    }
  );
});

module.exports = router;
