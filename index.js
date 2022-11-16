const express = require("express");
const app = express();

const loanCalc = require("./functions/loanCalc");
const loanTable = require("./functions/loanTable");
const loanCompare = require("./functions/loanCompare");

app.get("/summary", (req, res) => {
  try {
    // console.log(req.query);
    const summary = loanCalc(
      req.query.montant,
      req.query.taux,
      req.query.duree,
      req.query.assurance
    );

    res.status(200).json(summary);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.get("/table", (req, res) => {
  try {
    const loanArray = loanTable(
      req.query.montant,
      req.query.taux,
      req.query.duree
    );

    res.status(200).json(loanArray);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/compare", (req, res) => {
  try {
    const compareArray = loanCompare(
      req.query.montant,
      req.query.taux,
      req.query.assurance
    );
    res.status(200).json(compareArray);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.all("*", (req, res) => {
  try {
    res.status(404).json("Not found for now");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// lancement du serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is on fire 🔥 on port " + PORT);
});
