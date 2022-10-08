"use strict";

function solveEquation(a, b, c) {
  let d = b ** 2 - 4 * a * c; 
  let arr = [];
  if(d > 0){
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  } else if(d === 0) {
      arr = [-b / (2 * a)];
  } 
  return arr; // array
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
