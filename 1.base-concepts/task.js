"use strict";

function solveEquation(a, b, c) {
  let D = b ** 2 - 4 * a * c; 
  let arr = [];
  if(D > 0){
    arr = [];
    arr.push((-b + Math.sqrt(D)) / (2 * a));
    arr.push((-b - Math.sqrt(D)) / (2 * a));
  } else if(D === 0) {
      arr = [-b / (2 * a)];
  } else if(D < 0) {
      arr = []; 
  }

  return arr; // array
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
