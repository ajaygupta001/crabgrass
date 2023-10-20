const mongoose = require("mongoose");

const brandSchema = mongoose.Schema({
  brandName: String,
});
module.exports = mongoose.model("brandData", brandSchema);
