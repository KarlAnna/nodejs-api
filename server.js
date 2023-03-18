const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();
const { PORT, MONGO_URL } = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
