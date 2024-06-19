const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  watchList: [{ type: mongoose.Schema.Types.ObjectId, ref: "MOVIE" }],
});

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  genre: String,
  releaseDate: Date,
  rating: Number,
  imageLink: String,
});

const USER = mongoose.model("USER", userSchema);
const ADMIN = mongoose.model("ADMIN", adminSchema);
const MOVIE = mongoose.model("MOVIE", movieSchema);

module.exports = {
  USER,
  ADMIN,
  MOVIE,
};
