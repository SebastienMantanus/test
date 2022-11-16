const loanCompare = (totalLoaning, txInterest, txIinsurance) => {
  // tableau de comparaison
  const compareArray = [];

  for (i = 15; i <= 25; i++) {
    if (i === 15 || i === 20 || i === 25) {
      const durationM = i * 12;
      const durationMNegative = durationM - 2 * durationM;
      const monthTxInterest = txInterest / 100 / 12;
      const monthlyRepayment =
        (totalLoaning * monthTxInterest) /
        (1 - Math.pow(1 + monthTxInterest, durationMNegative));
      const loanCost = monthlyRepayment * durationM - totalLoaning;

      // calcul en intégrant l'assurance
      txIinsurance = txIinsurance / 100;
      const insuranceCost = (txIinsurance * totalLoaning) / 12;
      const totalInsuranceCost = insuranceCost * durationM;
      const totalmonthlyRepayment = insuranceCost + monthlyRepayment;
      const totalLoanCost = loanCost + totalInsuranceCost;

      // ajout de l'hypothèse au tableau de comparaison
      compareArray.push({
        Montant: totalLoaning,
        Duree: durationM,
        Taux: txInterest,
        Mesnualites: monthlyRepayment.toFixed(2),
        Assurance: insuranceCost.toFixed(2),
        Total: totalmonthlyRepayment.toFixed(2),
        Cout_avec_assurance: totalLoanCost.toFixed(2),
        Cout_sans_assurance: loanCost.toFixed(2),
        Revenu_minimum: ((100 * totalmonthlyRepayment) / 33).toFixed(0),
      });
      txIinsurance = txIinsurance * 100;
    }
  }

  return compareArray;
};

module.exports = loanCompare;
