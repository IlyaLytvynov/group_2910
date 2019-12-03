function getNumbers() {
  // 1.Запросить значение
  // 2.преобразовать значение в число
  // 3.число добавить в массив
  // 4.Вернуться в 1 если пользователь вводит число, если пользлватель
  // 5. запсутить цикл для расчета среднего арифметического
  // 6. Открыть модальное окно с результатом
  const numbers = [];
  let enteredValue = prompt("Enter number");
  let value = parseInt(enteredValue);

  while (!isNaN(value)) {
    numbers.push(value);
    enteredValue = prompt("Enter number");
    value = parseInt(enteredValue);
  }

  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  const result = total / numbers.length;
  alert(result.toFixed(3));
}

numbersButton.onclick = getNumbers;
