const { getDb } = require("../database/mongo.db");

const getCollection = () => {
  let db = getDb();

  return db.collection("students", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["name", "email", "studentId", "age"],
        properties: {
          name: {
            bsonType: "string",
            description: "'name' must be a string and is required",
          },
          email: {
            bsonType: "string",
            description: "'email' must be a string and is required",
          },
          studentId: {
            bsonType: "string",
            description: "'studentId' must be a string and is required",
          },
          age: {
            bsonType: "number",
            description: "'age' must be a number and is required",
          },
        },
      },
    },
  });
};

module.exports = {
  Student: getCollection(),
};
