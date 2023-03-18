const express = require("express");
const {
  getContacts,
  createContact,
  getContactById,
  deleteContactById,
  updateContactById,
} = require("../../controllers/contactController");
const {
  validation,
  ctrlWrapper,
} = require("../../middlewares/contactMIddlewares");
const { contactJoiSchema } = require("../../models/contactModel");

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

module.exports = router;
