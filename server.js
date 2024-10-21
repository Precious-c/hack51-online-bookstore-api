const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });
const logger = require("morgan");
const connectDB = require("./config/database");
const bookRoutes = require("./routes/bookRoutes");

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(cors({ origin: process.env.CLIENT_URL }));

//Routes
app.use("/api/books/", bookRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server runnning on port ${process.env.PORT}`);
});
