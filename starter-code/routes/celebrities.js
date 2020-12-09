const express = require("express");
const router = express.Router();
const CelebrityModel = require("../models/Celebrity");

router.get("/", async (req, res, next) => {
  try {
    const celebrities = await CelebrityModel.find();
    console.log(celebrities);
    res.render("celebrities/index", { celebrities });
  } catch (err) {
    next(err);
  }
});

router.get("/new", (req, res) => {
  res.render("celebrities/new");
});

router.get("/:id", async (req, res, next) => {
  try {
    const celebInfo = await CelebrityModel.findById(req.params.id);
    res.render("celebrities/show", { celebInfo });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
