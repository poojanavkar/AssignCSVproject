var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var customersSchema = new Schema({
  startDate: String,
  endDate: String
});

module.exports.customersmodel = mongoose.model("customers", customersSchema);
