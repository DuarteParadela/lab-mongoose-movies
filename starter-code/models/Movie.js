const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: String,
  genre: String,
  plot: String,
});

module.exports = mongoose.model("movie", movieSchema);
