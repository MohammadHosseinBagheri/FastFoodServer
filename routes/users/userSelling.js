const express = require("express");
const router = express.Router();
const factorModal = require("../../src/models/factor");
const restaurants = require("../../src/models/restaurants");
router.post("/", (req, res) => {
  const data = req.body;
  const money = data.data;
  const person = data.userData.data;
  const mabda = data.mabda;
  const maghsad = data.maghsad;
  const food = data.food;
  const restaurantId = food.restaurantId;
  const personId = person._id;
  const personName = person.name + " " + person.lastName;
  console.log(person._id);
  restaurants.findOne({ id: restaurantId }, (error, data) => {
    if (error) {
      res.json({
        status: 400,
        essage: error
      });
      return;
    }
    // console.log(restaurantId)
    const restaurant = data;
    const resName = restaurant.name;
    const city = restaurant.city;
    const address = restaurant.address;
    const phone = restaurant.phone;
    console.log(resName, city, address, phone);
    const newFactor = new factorModal({
      price: money,
      time: new Date(),
      address: city + " " + address,
      personId: personId,
      personName: personName,
      maghsad: maghsad
    });
    newFactor.save();
    res.json({
      status: 200
    });
  });
});
module.exports = router;
