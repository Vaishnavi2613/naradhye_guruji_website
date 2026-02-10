var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var mongoose = require("mongoose");

require("dotenv").config();

/* -------------------- MongoDB Connection -------------------- */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

/* -------------------- App Init -------------------- */
var app = express();

/* -------------------- Middlewares -------------------- */
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* -------------------- Routes -------------------- */
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

app.use("/", indexRouter);      // 👉 POST /bookings
app.use("/users", usersRouter); // 👉 GET /users/:name

/* -------------------- Health Check (VERY IMPORTANT) -------------------- */
app.get("/health", (req, res) => {
  res.json({ status: "Backend is running" });
});

/* -------------------- 404 Handler -------------------- */
app.use(function (req, res, next) {
  res.status(404).json({
    error: "Route not found",
  });
});

/* -------------------- Error Handler -------------------- */
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
  });
});

module.exports = app;

