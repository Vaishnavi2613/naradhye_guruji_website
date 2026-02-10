const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  service: String,
  date: Date,
  birthdayAbhishek: Boolean,
  confirmed: { type: Boolean, default: false }
});

module.exports = mongoose.model("Booking", BookingSchema);
