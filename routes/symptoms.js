const express = require("express");
const router = express.Router();

const symptoms = require("../data/symptoms.json");

console.log("SYMPTOMS YANG DIBACA:");
console.log(symptoms);

router.get("/", (req, res) => {
  res.json(symptoms);
});

module.exports = router;