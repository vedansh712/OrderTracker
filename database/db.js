const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://admin:admin@ordertracker.zq8fvlr.mongodb.net/?retryWrites=true&w=majority";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(mongoURL, options)
  .then(() => {
    console.log("connexted to mongoose");
  })
  .catch((error) => {
    console.error("ERROR connecting top mongoose", error);
  });
