const express = require("express");
require("./db");

const app = express();
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");
const morgan = require("morgan");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/order", orderRoutes);
app.listen(4000, () => {
  console.log("The server is running on port 4000");
});
