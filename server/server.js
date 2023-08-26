const express = require("express");
require("./db");

const app = express();
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");
const morgan = require("morgan");

const port = process.env.PORT || 5000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/order", orderRoutes);
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
