const { NotFound, BadRequest } = require("http-errors");
const { contactSchema } = require("../schemas/contactSchema");
const { getById } = require("../models/contacts");

const checkContactData = (req, _, next) => {
  try {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      throw new BadRequest("missing required name field");
    }
    next();
  } catch (error) {
    next(error);
  }
};

const checkContactId = async (req, _, next) => {
  try {
    const { contactId } = req.params;
    const contact = await getById(contactId);
    if (!contact) {
      throw new NotFound();
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  checkContactData,
  checkContactId,
};
