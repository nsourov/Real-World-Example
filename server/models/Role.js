const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  role: String,
  resource: String,
  action: String,
  attributes: {
    type: String,
    default: "*"
  }
});
mongoose.model("Role", RoleSchema);