const express = require("express");

const { InfoController } = require("../../controllers");
const { AuthRequestMiddlewares } = require("../../middlewares");
const UserRoutes = require("./user-routes");

const router = express.Router();

router.get("/info", AuthRequestMiddlewares.checkAuth, InfoController.info);

router.use("/user", UserRoutes);

module.exports = router;
