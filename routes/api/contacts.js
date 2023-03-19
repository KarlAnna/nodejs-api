const express = require("express");
const {
  getContacts,
  createContact,
  getContactById,
  deleteContactById,
  updateContactById,
  updateFavoriteById,
} = require("../../controllers/contactController");
const {
  validation,
  ctrlWrapper,
} = require("../../middlewares/contactMIddlewares");
const {
  contactJoiSchema,
  contactFavoriteJoiSchema,
} = require("../../models/contactModel");

const router = express.Router();

router
  .route("/")
  .get(ctrlWrapper(getContacts))
  .post(validation(contactJoiSchema), ctrlWrapper(createContact));

router
  .route("/:contactId")
  .get(ctrlWrapper(getContactById))
  .delete(ctrlWrapper(deleteContactById))
  .put(validation(contactJoiSchema), ctrlWrapper(updateContactById));

router
  .route("/:contactId/favorite")
  .patch(validation(contactFavoriteJoiSchema), ctrlWrapper(updateFavoriteById));

module.exports = router;
