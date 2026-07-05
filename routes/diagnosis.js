// routes/diagnosis.js
const express = require("express");
const router = express.Router();

const forwardChaining = require("../services/forwardChaining");
const conclusions = require("../data/conclusions.json");

router.post("/", (req, res) => {
  const { symptoms } = req.body;

  const matchedRules = forwardChaining(symptoms);

  if (matchedRules.length === 0) {
    return res.json({
      status: false,
      message: "Tidak ditemukan rule yang cocok"
    });
  }

  const lastRule = matchedRules[matchedRules.length - 1];

  const conclusion = conclusions.find(
    (c) => c.id === lastRule.then
  );

  res.json({
    status: true,
    diagnosis: conclusion,
    activeRule: lastRule.id,
    reason: lastRule.reason,
    source: [conclusion.source],
    selectedSymptoms: symptoms,
    matchedRules
  });
});

module.exports = router;