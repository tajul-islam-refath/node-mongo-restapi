const { Student } = require("../models/student.model");

exports.insertOne = async (document) => {
  try {
    const res = await Student.insertOne(document);
    return res;
  } catch (error) {
    if (error.code == 121) {
      const errors = error.errInfo.details.schemaRulesNotSatisfied.find(
        (x) => x.operatorName == "properties"
      ).propertiesNotSatisfied;

      const response = errors.map((error) => {
        return {
          property: error.propertyName,
          errors: error.details.map((e) => e.reason),
        };
      });

      return new Error(JSON.stringify(response));
    }

    return error;
  }
};

exports.findAll = async () => {
  const res = await Student.find().toArray();
  return res;
};
