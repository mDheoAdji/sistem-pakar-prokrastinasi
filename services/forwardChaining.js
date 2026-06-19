// services/forwardChaining.js

const rules = require("../data/rules.json");

function forwardChaining(selectedSymptoms) {
  const matchedRules = [];

  for (const rule of rules) {
    const match = rule.if.every((symptom) =>
      selectedSymptoms.includes(symptom)
    );

    if (match) {
      matchedRules.push(rule);
    }
  }

  return matchedRules;
}

module.exports = forwardChaining;