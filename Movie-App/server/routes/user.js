const mongoose = require("mongoose");
const express = require("express");
const { USER, ADMIN, MOVIE } = require("../db");
const jwt = require("jsonwebtoken");
const { SECRET, authenticateJWT } = require("../middleware/auth");

const route = express.Router();

route.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const user = await USER.findOne({ username });

  if (user) {
    res.status(400).json({ message: "User with that username already exist" });
  } else {
    const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });
    const User = new USER({ username, password });
    await User.save();
    res.status(200).json({ message: "User created successfully", token });
  }
});

route.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const User = await USER.findOne({ username, password });

  if (User) {
    const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });
    res.status(200).json({ message: "Logged in successfully", token });
  } else {
    res.status(400).json({ message: "Username or password incorrect" });
  }
});

route.get("/movies", authenticateJWT, async (req, res) => {
  const movies = await MOVIE.find({});
  res.status(200).json(movies);
});

route.get("/movies/:movieId", authenticateJWT, async (req, res) => {
  const movie = await MOVIE.findById(req.params.movieId);
  res.json(movie);
});

route.post("/watchList/add/:movieId", authenticateJWT, async (req, res) => {
  //   const { movieId } = req.body;
  const movie = await MOVIE.findById(req.params.movieId);
  if (movie) {
    const user = await USER.findOne({ username: req.user.username });
    if (user) {
      if (user.watchList.includes(req.params.movieId)) {
        res
          .status(400)
          .json({ message: "Movie already present in watch list" });
      } else {
        user.watchList.push(movie);
        await user.save();
        res.status(200).json({ message: "Added to watch list" });
      }
    } else {
      res.status(400).json({ message: "Something went wrong" });
    }
  }
});

route.get("/watchList", authenticateJWT, async (req, res) => {
  try {
    const user = await USER.findOne({ username: req.user.username }).populate(
      "watchList"
    );
    res.status(200).json(user.watchList || []);
  } catch (error) {
    res.status(400).json({ message: "Error!" });
  }
});

module.exports = route;
