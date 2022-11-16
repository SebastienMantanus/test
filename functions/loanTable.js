const loanTable = (totalLoaning, txInterest, durationY) => {
  // calcul du crédit
  const durationM = durationY * 12;
  const durationMNegative = durationM - 2 * durationM;
  const monthTxInterest = txInterest / 100 / 12;
  const monthlyRepayment = (
    (totalLoaning * monthTxInterest) /
    (1 - Math.pow(1 + monthTxInterest, durationMNegative))
  ).toFixed(2);
  const loanCost = (monthlyRepayment * durationM - totalLoaning).toFixed(2);

  const array = [];

  // premier mois
  let restOf = totalLoaning;
  let interestPaid = (restOf * monthTxInterest).toFixed(2);
  let capitalPaid = monthlyRepayment - interestPaid;
  array.push({
    mois: "premier mois",
    reste: restOf,
    amorti: capitalPaid,
    interets: interestPaid,
  });

  // mois suivants
  for (let i = 2; i <= durationM; i++) {
    const mounth = i;
    restOf = (restOf - capitalPaid).toFixed(2);
    interestPaid = (restOf * monthTxInterest).toFixed(2);
    capitalPaid = (monthlyRepayment - interestPaid).toFixed(2);
    array.push({
      mois: mounth,
      reste: restOf,
      amorti: capitalPaid,
      interets: interestPaid,
    });
  }

  return array;
};

module.exports = loanTable;
