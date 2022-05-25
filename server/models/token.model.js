const mongoose = require("mongoose");
const { Schema } = mongoose;

const TokenSchema = new Schema({
  code: {
    type: String,
    unique: true,
    required: true,
  },
  token: {
    type: String,
    unique: true,
    required: true,
  },
  time: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Token", TokenSchema);
