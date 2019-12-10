// Functions
// Funtion params
// Function return
// Scopes, global|local
// Modules|WEBPACK
// FUNCTION DECLARATION vs FUNCTION EXPRESSION vs ARROW FUNCTIONS
// CLOJURES
// CONTEXT

function requestOperands() {
  const valueA = requestOperand("Enter A");
  const valueB = requestOperand("Enter B");
  return [valueA, valueB];
}

function requestValue(message) {
  let str = prompt(message);
  let number = parseInt(str);
  return number;
}

function requestOperand(message) {
  let number = requestValue(message);

  while (isNaN(number)) {
    number = requestValue(message);
  }

  return number;
}

function add(a, b) {
  return a + b;
}

function print(data) {
  display.textContent = "RESULT: " + data;
}

export function calc() {
  const [operandA, operandB] = requestOperands(); // 20, 15
  const result = add(operandA, operandB);
  print(result);
}
