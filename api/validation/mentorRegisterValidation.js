const joi = require("@hapi/joi");

const schema = {
  ValidMentor: joi.object({
    name: joi.string().max(50).required(),
    username: joi.string().max(30).required(),
    email: joi.string().email().required(),
    password: joi
      .string()
      .min(3)
      .message("Password should be of atleast three characters")
      .max(20)
      .message("Password should be of 20 characters")
      .required(),
    expertise: joi.string().max(200).required(),
    ydesc: joi.string().max(500).required(),
  }),
};

module.exports = schema;
