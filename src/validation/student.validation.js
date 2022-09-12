const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "bd"] } })
    .required(),
  studentId: Joi.string().required(),
  age: Joi.number().required(),
});

const studentValidation = (body) => {
  const res = schema.validate(body);
  return res;
};

module.exports = {
  studentValidation,
};
