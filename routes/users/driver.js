const express = require("express");
const router = express.Router();
const driverModel = require("../../src/models/driver");

router.post("/register", (req, res) => {
  const data = req.body;
  const name = data.name;
  const lastName = data.lastName;
  const nationalCode = data.nationalCode;
  const pelak = data.pelak;
  const phone = data.phone;
  const restaurantId = data.restaurantId;
  driverModel.find(
    { nationalCode: nationalCode, restaurantId: restaurantId },
    (error, myData) => {
      if (error) {
        res.json({
          message: error,
          status: 400
        });
        return;
      }
      if (myData.length != 0) {
        res.json({
          status: 403,
          message: "این یوزر قبلا ثبت شده است"
        });
        return;
      } else {
        const newDriver = new driverModel({
          name: name,
          lastName: lastName,
          nationalCode: nationalCode,
          pelak: pelak,
          phone: phone,
          restaurantId: restaurantId
        });
        newDriver.save();
        res.json({
          status: 200,
          data: data
        });
      }
    }
  );
});

router.post("/", (req, res) => {
  const data = req.body;
  const restaurantId = data.restaurantId;
  console.log(restaurantId);
  driverModel.find({ restaurantId: restaurantId }, (error, myData) => {
    if (error) {
      res.json({
        message: error,
        status: 400
      });
      return;
    }
    if (myData) {
      res.json({
        status: 200,
        data: myData
      });
      return;
    }
  });
});

module.exports = router;
