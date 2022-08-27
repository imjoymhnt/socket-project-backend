const mongoose = require("mongoose");

const ButtonClickSchema = new mongoose.Schema({
  count: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("ButtonClick", ButtonClickSchema);
