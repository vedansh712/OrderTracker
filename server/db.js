const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.MONGODB_URL, options)
  .then(() => {
    console.log("connexted to mongoose");
  })
  .catch((error) => {
    console.error("ERROR connecting top mongoose", error);
  });
