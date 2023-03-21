const Joi = require("joi");

const favJoiSchema = Joi.object({
  favorite: Joi.bool().required(),
});

module.exports = favJoiSchema;
