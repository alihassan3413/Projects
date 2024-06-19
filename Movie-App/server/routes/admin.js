const mongoose = require("mongoose");
const express = require("express");
const { USER, ADMIN, MOVIE } = require("../db");
const jwt = require("jsonwebtoken");
const { SECRET, authenticateJWT } = require("../middleware/auth");

const route = express.Router();

route.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const admin = await ADMIN.findOne({ username });

  if (admin) {
    return res.status(400).json({ message: "Username already exist" });
  } else {
    const newAdmin = new ADMIN({ username, password });
    await newAdmin.save();

    const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });
    res.json({ message: "Admin created successfully", token });
  }
});

route.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const admin = await ADMIN.findOne({ username, password });
  if (admin) {
    const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });
    res.status(200).json({ message: "Logged In successfully!", token });
  } else {
    res.status(400).json({ message: "Username or password incorrect" });
  }
});

route.post("/movies", authenticateJWT, async (req, res) => {
  try {
    const movieinfo = req.body;
    const movie = new MOVIE(movieinfo);
    await movie.save();
    res.status(200).json({ message: "Movie uploaded successfully" });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

route.get("/movies", authenticateJWT, async (req, res) => {
  try {
    const movies = await MOVIE.find({});
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

route.get("/movies/:movieId", authenticateJWT, async (req, res) => {
  const movieid = req.params.movieId;
  try {
    const movie = await MOVIE.findById(movieid);
    if (movie) {
      res.status(200).json(movie);
    }
  } catch (error) {
    res.status(400).json({ message: "Not found" });
  }
});

route.put("/movies/:movieId", authenticateJWT, async (req, res) => {
  try {
    await MOVIE.findByIdAndUpdate(req.params.movieId, req.body);
    res.status(200).json({ message: "Movie is updated successfully." });
  } catch (error) {
    res.status(400).json({ message: "Movie is not updated." });
  }
});

route.delete("/movies/:movieId", authenticateJWT, async (req, res) => {
  try {
    await MOVIE.findByIdAndDelete(req.params.movieId);
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
});
module.exports = route;
