const express = require("express");
const { ctrlWrapper, validation, auth } = require("../../middlewares");
const { joiSchema, favJoiSchema } = require("../../models/contact");
const { contacts: ctrl } = require("../../controllers");

const router = express.Router();

router
  .route("/")
  .get(auth, ctrlWrapper(ctrl.getAll))
  .post(auth, validation(joiSchema), ctrlWrapper(ctrl.add));

router
  .route("/:contactId")
  .get(ctrlWrapper(ctrl.getById))
  .delete(ctrlWrapper(ctrl.removeById))
  .put(validation(joiSchema), ctrlWrapper(ctrl.updateById));

router
  .route("/:contactId/favorite")
  .patch(validation(favJoiSchema), ctrlWrapper(ctrl.updateFavById));

module.exports = router;
