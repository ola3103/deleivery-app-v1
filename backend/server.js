require("dotenv").config();
require("express-async-errors");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRouter = require("./routes/auth");
const globalErrorHandler = require("./controller/errorController");

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/v1/auth", authRouter);
app.use(globalErrorHandler);
app.all("*", (req, res) => {
  res
    .status(404)
    .json({ message: `cannot find the url ${req.originalUrl} on this server` });
});

const PORT = process.env.PORT;

const startApp = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_DB_CONNECTION_STRING)
      .then(() => console.log("DB CONNECTED SUCCESSFULLY"));
    app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

startApp();
