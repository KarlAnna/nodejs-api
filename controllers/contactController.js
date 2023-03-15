const {
  listContacts,
  getById,
  removeContact,
  addContact,
  updateContact,
} = require("../models/contacts");

// route("/")

const getContacts = async (_, res) => {
  try {
    const contacts = await listContacts();

    res.json({
      status: "success",
      code: 200,
      data: {
        result: contacts,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

const createContact = async (req, res) => {
  try {
    const result = await addContact(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

// route("/:contactId")

const getContactById = async (req, res) => {
  try {
    const { contactId } = req.params;
    const contact = await getById(contactId);
    res.json({
      status: "success",
      code: 200,
      data: {
        result: contact,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

const deleteContactById = async (req, res) => {
  try {
    const { contactId } = req.params;
    const result = await removeContact(contactId);
    res.json({
      status: "success",
      code: 200,
      message: "contact deleted",
      data: {
        result,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

const updateContactById = async (req, res) => {
  try {
    const { contactId } = req.params;
    const result = await updateContact(contactId, req.body);
    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  getContacts,
  createContact,
  getContactById,
  deleteContactById,
  updateContactById,
};
