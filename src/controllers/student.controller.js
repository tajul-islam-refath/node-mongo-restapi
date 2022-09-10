const { insertOne, findAll } = require("../services/student.service");

exports.getStudents = async function (req, res, next) {
  try {
    const result = await findAll();
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.createStudents = async function (req, res, next) {
  //   console.log(req.body);

  const result = await insertOne(req.body);

  if (result instanceof Error) {
    return res.status(400).json(JSON.parse(result.message));
  }

  res.send(result);
};
