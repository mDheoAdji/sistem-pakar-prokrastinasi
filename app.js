const express = require("express");
const cors = require("cors");

const diagnosisRoute = require("./routes/diagnosis");
const symptomsRoute = require("./routes/symptoms");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/diagnosis", diagnosisRoute);
app.use("/api/symptoms", symptomsRoute);

app.get("/", (req, res) => {
  res.send("Sistem Pakar Prokrastinasi Akademik");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});