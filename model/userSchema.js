const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  agent: { type: String },
  userType: { type: String },
  policy_mode: { type: String },
  producer: { type: String },
  policy_number: { type: String },
  premium_account: { type: String },
  policy_type: { type: String },
  company_name: { type: String },
  category_name: { type: String },
  policy_start_date: { type: Date },
  policy_end_date: { type: Date },
  csr: { type: String },
  account_name: { type: String },
  email: { type: String },
  firstname: { type: String },
  city: { type: String },
  account_type: { type: String },
  phone: { type: String },
  address: { type: String },
  state: { type: String },
  zip: { type: String},
  dob: { type: Date },
});

module.exports = new mongoose.model("User", userSchema);
