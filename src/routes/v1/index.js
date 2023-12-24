const express = require("express");

const { InfoController } = require("../../controllers");
const UserRoutes  = require("./user-routes");

const router = express.Router();

router.get("/info", InfoController.info);

router.use("/user", UserRoutes);

module.exports = router;
