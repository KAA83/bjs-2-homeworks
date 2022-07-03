"use strict";

function solveEquation(a, b, c) {
  if(a === 0)
        return false;
  let arr = {};
  let D = b ** 2 - 4 * a * c;
    console.log('D = ' + D);
    if(D < 0)
        return false;
    arr['discriminant'] = D;
    if(D === 0)
        arr["quadratic roots"] = (-b + Math.sqrt(D)) / (2 * a);
    else if(D > 0){
        let tmp = [];
        tmp.push((-b + Math.sqrt(D)) / (2 * a));
        tmp.push((-b - Math.sqrt(D)) / (2 * a));
        arr["quadratic roots"] = tmp;
    }
    
  // код для задачи №1 писать здесь
  return arr; // array
}

let result = solveEquation(2, 16, 8);
console.log(result);

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
