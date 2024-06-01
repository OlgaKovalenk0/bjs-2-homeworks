"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriment = Math.pow(b, 2) - 4 * a * c;
  if (discriment === 0) {
    let root = -b / (2 * a);
    arr.push(root);
  }
  else if (discriment > 0) {
    let root1 = (-b + Math.sqrt(discriment)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriment)) / (2 * a);
    arr.push(root1, root2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let rate = percent / 100 / 12;
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (rate + (rate / (Math.pow(1 + rate, countMonths) - 1)));
  let totalAmount = countMonths * monthlyPayment;
  return +totalAmount.toFixed(2);
}