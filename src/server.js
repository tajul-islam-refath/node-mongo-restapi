const { app, setupRoutes } = require("./app");
const { connect } = require("./database/mongo.db");

// database connection
connect()
  .then(function () {
    app.listen(4000, async () => {
      setupRoutes();
      console.log("listening on port " + 4000);
      console.log("Applycation running successfully");
    });
  })
  .catch((err) => {
    console.log(err);
  });
