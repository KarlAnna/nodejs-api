const Joi = require("joi");

const joiSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(7).required(),
  favorite: Joi.bool(),
});

module.exports = joiSchema;
