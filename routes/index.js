const express = require("express");
const router = express.Router();
const api = require("./api/api");
const users = require("./users/users");
const restaurants = require("./restaurants/restaurants");
router.use("/api", api);
router.use("/users", users);
router.use("/restaurants", restaurants);
module.exports = router;
