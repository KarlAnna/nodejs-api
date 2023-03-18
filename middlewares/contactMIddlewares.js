const validation = (schema) => {
  return (req, _, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      error.status = 400;
      next(error);
    }
    next();
  };
};

const ctrlWrapper = (ctrl) => {
  return async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

// const checkContactId = async (req, _, next) => {
//   try {
//     const { contactId } = req.params;
//     const contact = await Contact.findById(contactId);
//     if (!contact) {
//       throw new NotFound();
//     }
//     next();
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = {
  validation,
  ctrlWrapper,
};
