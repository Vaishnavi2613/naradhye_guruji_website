const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  dob: Date
});

module.exports = mongoose.model("Client", ClientSchema);
