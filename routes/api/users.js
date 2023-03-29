const express = require("express");
const { ctrlWrapper, validation, auth } = require("../../middlewares");
const { registerJoiSchema, loginJoiSchema } = require("../../models/user");
const { users: ctrl } = require("../../controllers");

const router = express.Router();

router.post("/register", validation(registerJoiSchema), ctrlWrapper(ctrl.register));

router.post("/login", validation(loginJoiSchema), ctrlWrapper(ctrl.login));

router.post("/logout", auth, ctrlWrapper(ctrl.logout));

router.post("/current", auth, ctrlWrapper(ctrl.current));

module.exports = router;
