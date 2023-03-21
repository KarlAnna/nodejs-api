const express = require("express");
const { ctrlWrapper, validation } = require("../../middlewares");
const { joiSchema, favJoiSchema } = require("../../models");
const { contacts: ctrl } = require("../../controllers");

const router = express.Router();

router
  .route("/")
  .get(ctrlWrapper(ctrl.getAll))
  .post(validation(joiSchema), ctrlWrapper(ctrl.add));

router
  .route("/:contactId")
  .get(ctrlWrapper(ctrl.getById))
  .delete(ctrlWrapper(ctrl.removeById))
  .put(validation(joiSchema), ctrlWrapper(ctrl.updateById));

router
  .route("/:contactId/favorite")
  .patch(validation(favJoiSchema), ctrlWrapper(ctrl.updateFavById));

module.exports = router;
