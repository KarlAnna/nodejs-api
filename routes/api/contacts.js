const express = require("express");
const {
  getContacts,
  createContact,
  getContactById,
  deleteContactById,
  updateContactById,
} = require("../../controllers/contactController");
const {
  checkContactData,
  checkContactId,
} = require("../../middlewares/contactMIddlewares");

const router = express.Router();

router.route("/").get(getContacts).post(checkContactData, createContact);

router.use("/:contactId", checkContactId);

router
  .route("/:contactId")
  .get(getContactById)
  .delete(deleteContactById)
  .put(checkContactData, updateContactById);

module.exports = router;
