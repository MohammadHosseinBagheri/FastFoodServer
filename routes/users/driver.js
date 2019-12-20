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
  // const restaurantId = data.restaurantId;
  driverModel.findOne(
    { nationalCode: nationalCode
      //restaurantId: restaurantId 
    },
    (error, myData) => {
      if (error) {
        res.json({
          message: error,
          status: 400
        });
        return;
      }
      if (myData) {
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
         // restaurantId: restaurantId
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

// router.post("/", (req, res) => {
//   const data = req.body;
 // const restaurantId = data.restaurantId;
//  console.log(restaurantId);
//   driverModel.find({ restaurantId: restaurantId }, (error, myData) => {
//     if (error) {
//       res.json({
//         message: error,
//         status: 400
//       });
//       return;
//     }
//     if (myData) {
//       res.json({
//         status: 200,
//         data: myData
//       });
//       return;
//     }
//   });
// });

// router.post("/remove", (req, res) => {
//   const data = req.body;
//   const restaurantId = data.data.restaurantId;
//   const nationalCode = data.data.nationalCode;
//   //console.log(restaurantId, driverId);
//   driverModel.findOneAndDelete(
//     { restaurantId: restaurantId, nationalCode: nationalCode },
//     (error, data) => {
//       if (error) {
//         res.json({
//           message: error,
//           status: 400
//         });
//       } else {
//         res.json({
//           status: 200,
//           data: data
//         });
//       }
//     }
//   );
// });

router.post("/update", (req, res) => {
  const data = req.body;
  //const restaurantId = data.restaurantId;
  const name = data.name;
  const lastName = data.lastName;
  const nationalCode = data.nationalCode;
  const pelak = data.pelak;
  const phone = data.phone;
  const id = data._id;
  console.log(id);
  driverModel.findOneAndUpdate(
    { _id: id, 
    //  restaurantId: restaurantId 
    },
    {
      name: name,
      lastName: lastName,
      nationalCode: nationalCode,
      pelak: pelak,
      phone: phone
    },
    { multi: true },
    (error, data) => {
      if (error) {
        res.json({
          message: error,
          status: 400
        });
        return;
      }
      data.save();
      console.log(data);
      res.json({
        data: data,
        status: 200
      });
    }
  );
});

module.exports = router;
