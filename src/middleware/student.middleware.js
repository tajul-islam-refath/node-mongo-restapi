const {
  studentValidation: validation,
} = require("../validation/student.validation");

exports.studentValidation = function (req, res, next) {
  const result = validation(req.body);
  const isValid = result.error == null;
  if (!isValid) {
    return res.status(400).json({
      message: result.error,
    });
  }

  next();
};
