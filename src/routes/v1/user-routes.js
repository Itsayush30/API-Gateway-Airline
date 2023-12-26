const express = require("express");
const { UserController } = require("../../controllers");
const { AuthRequestMiddlewares } = require("../../middlewares");

const router = express.Router();

router.post(
  "/signup",
  AuthRequestMiddlewares.validateAuthRequest,
  UserController.signup
);
router.post(
  "/signin",
  AuthRequestMiddlewares.validateAuthRequest,
  UserController.signin
);
router.post("/role", UserController.addRoleToUser);

module.exports = router;
