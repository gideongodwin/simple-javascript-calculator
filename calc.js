let operator = prompt("Select an Operator (+, -, *, /)");
let firstValue = prompt("Enter First Number");
let secondValue = prompt(`Enter Second Number \n ${firstValue} ${operator}`);
let result;

if (operator === "+") {
  result = parseInt(firstValue) + parseInt(secondValue);
} else if (operator === "-") {
  result = firstValue - secondValue;
} else if (operator === "*") {
  result = firstValue * secondValue;
} else if (operator === "/") {
  result = firstValue / secondValue;
} else {
  alert("Not Valid");
}

alert(`Result is ${result}`);
