const express = require("express");
const router = express.Router();

const symptoms = require("../data/symptoms.json");

router.get("/", (req, res) => {
  res.json(symptoms);
});

module.exports = router;