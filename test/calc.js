// variables du crédit
const totalUmprunt = 340000;
const txInteret = 2.2 / 100;
const txInteret2 = txInteret * 100;
const nbAnnees = 20;

// calcul de la mensualité
const nbMois = nbAnnees * 12;
const nbMoisNegatif = nbMois - 2 * nbMois;
const txMensuels = txInteret / 12;

const mensualites = (
  (totalUmprunt * txMensuels) /
  (1 - Math.pow(1 + txMensuels, nbMoisNegatif))
).toFixed(2);

// coût du crédit
creditCost = (mensualites * nbMois - totalUmprunt).toFixed(2);

// tableau d'amortissement
// premier mois
let restOf = totalUmprunt;
let interestPaid = (restOf * txMensuels).toFixed(2);
let capitalPaid = mensualites - interestPaid;

console.log(
  `MOIS 1 :` +
    "\n" +
    `Capital restant ${restOf} € // Capital amorti : ${capitalPaid} € // Intérêts payés : ${interestPaid} €`
);
console.log("----------");

//boucle des mois restants
for (let i = 2; i <= nbMois; i++) {
  console.log(`MOIS ${i} :`);
  restOf = (restOf - capitalPaid).toFixed(2);
  interestPaid = (restOf * txMensuels).toFixed(2);
  capitalPaid = (mensualites - interestPaid).toFixed(2);
  console.log(
    `Capital restant ${restOf} € // Capital amorti : ${capitalPaid} € // Intérêts payés : ${interestPaid} €`
  );
  console.log("----------");
}
console.log("RESUME");
console.log(`Montant umprunté : ${totalUmprunt} €`);
console.log(`Taux d'intérêt : ${txInteret2} %`);
console.log(`Coût du crédit : ${creditCost} €`);
console.log(`Mensualités : ${mensualites} €`);
