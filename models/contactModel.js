const { Schema, model } = require("mongoose");
const Joi = require("joi");

const contactJoiSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(7).required(),
  favorite: Joi.bool(),
});

const contactFavoriteJoiSchema = Joi.object({
  favorite: Joi.bool().required(),
});

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

const Contact = model("contact", contactSchema);

module.exports = { Contact, contactJoiSchema, contactFavoriteJoiSchema };
