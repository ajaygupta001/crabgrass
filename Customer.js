const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  date: String,
  customer_name: String,
  customer_contact: String,
  items: Number,
  totalAmount: Number,
  pay_price: Number,
  due_price: Number,
  payment_mode:String,
  discountPer:Number,
});
module.exports = mongoose.model("customer", customerSchema);
