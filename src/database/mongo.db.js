// Import mongo client
const { MongoClient } = require("mongodb");

// db variable
let _db = null;
// connect to MongoDB
const connect = async () => {
  try {
    const client = new MongoClient("mongodb://localhost:27017", {
      useNewUrlParser: true,
    });

    console.log(`Connecting to MongoDB....`);
    await client.connect();
    _db = client.db("schooldb");
    console.log(`Connecting to MongoDB Success`);
  } catch (err) {
    console.log("Database connection error");
  }
};

// get db
const getDb = () => {
  return _db;
};

module.exports = {
  connect,
  getDb,
};
