function Calculator(event) {
  event.preventDefault();

  // Fetch data
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  var operator = document.getElementById("operator").value;

  // Calculation
  var result;
  if (operator === "+") {
    result = number1 + number2;
  } else if (operator === "-") {
    result = number1 - number2;
  } else if (operator === "*") {
    result = number1 * number2;
  } else if (operator === "/") {
    result = number1 / number2;
  }

  // Display the result
  console.log("Result: " + result);
}