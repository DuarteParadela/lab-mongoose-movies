const express = require("express");
const router = express.Router();
const MovieModel = require("../models/Movie");

//ITERATION 2 LISTING OUR CELEBRITIES
router.get("/", async (req, res, next) => {
  try {
    const movies = await MovieModel.find();
    res.render("movies/index", { movies });
  } catch (err) {
    next(err);
  }
});

// ITERATION 4 ADDING NEW CELEBRITIES
router.get("/new", (req, res) => {
  res.render("movies/new");
});

router.post("/new", async function (req, res, next) {
  try {
    const newMovie = await MovieModel.create(req.body);
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

// ITERATION 3 THE MOVIE DETAILS PAGE
router.get("/:id", async (req, res, next) => {
  try {
    const movieInfo = await MovieModel.findById(req.params.id);
    res.render("movies/show", { movieInfo });
  } catch (err) {
    next(err);
  }
});

// ITERATION 5 DELETING CELEBRITIES
router.get("/:id/delete", async function (req, res, next) {
  try {
    await MovieModel.findByIdAndRemove(req.params.id);
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

// ITERATION 6 EDITING CELEBRITIES

router.get("/:id/update", async function (req, res, next) {
  try {
    const oneMovie = await MovieModel.findById(req.params.id);
    res.render("movies/edit", oneMovie);
  } catch (err) {
    next(err);
  }
});

router.post("/:id/update", async function (req, res, next) {
  try {
    const updatedOne = await MovieModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
