const mongoose = require("mongoose");

const customerDataSchema = mongoose.Schema({
  customer_name: String,
  customer_contact: String,
});
module.exports = mongoose.model("customerData", customerDataSchema);
