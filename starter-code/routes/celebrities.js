const express = require("express");
const router = express.Router();
const CelebrityModel = require("../models/Celebrity");

//ITERATION 2 LISTING OUR CELEBRITIES
router.get("/", async (req, res, next) => {
  try {
    await CelebrityModel.find();
    res.render("celebrities/index", { celebrities });
  } catch (err) {
    next(err);
  }
});

// ITERATION 4 ADDING NEW CELEBRITIES
router.get("/new", (req, res) => {
  res.render("celebrities/new");
});

router.post("/new", async function (req, res, next) {
  try {
    await CelebrityModel.create(req.body);
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

// ITERATION 3 THE CELEBRITY DETAILS PAGE
router.get("/:id", async (req, res, next) => {
  try {
    const celebInfo = await CelebrityModel.findById(req.params.id);
    res.render("celebrities/show", { celebInfo });
  } catch (err) {
    next(err);
  }
});

// ITERATION 5 DELETING CELEBRITIES
router.get("/:id/delete", async function (req, res, next) {
  try {
    await CelebrityModel.findByIdAndRemove(req.params.id);
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

// ITERATION 6 EDITING CELEBRITIES

router.get("/:id/update", async function (req, res, next) {
  try {
    const oneCeleb = await CelebrityModel.findById(req.params.id);
    res.render("celebrities/edit", oneCeleb);
  } catch (err) {
    next(err);
  }
});

router.post("/:id/update", async function (req, res, next) {
  try {
    const updatedOne = await CelebrityModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
