// // // while (true) {
// // //   let a = 1;
// // console.log("Hello world!");
// // // }
// // const ProductAmount = 6;

// // let discountAmount = 0;
// // let productCount = 0;

// // while (productCount < ProductAmount && discountAmount <= 10) {
// //   productCount++;

// //   if (productCount <= 3) {
// //     discountAmount += 1;
// //   } else if (productCount > 3 && productCount <= 5) {
// //     discountAmount += 1.5;
// //   } else if (productCount > 5 && productCount <= 8) {
// //     discountAmount += 2;
// //   } else if (productCount > 8) {
// //     discountAmount += 2.5;
// //   }
// //   console.log(productCount, discountAmount);
// // }
// // console.log("Discount:", discountAmount, "%");

// // let word = "";
// // while (word.length < 5) {
// //   const value = prompt("Insert a letter");
// //   if (value.length === 0) {
// //     break;
// //   }
// //   word = word + value;
// //   console.log(word);
// // }

// // let x = 0;
// // do {
// //   console.log(x);
// //   x++;
// // } while (x < 3);

// // const input = prompt("Input a number");
// // const number = Number(input);

// // if (!isNaN(number)) {
// //   for (let i = 1; i <= 10; i++) {
// //     console.log(number + " * " + i + " = " + i * number);
// //   }
// // }
// // for (let i = 1; i <= 10; i++) {
// //   console.log(i);
// // }

// // let x = 1;
// // while (x <= 10) {
// //   console.log(x);
// //   x++;
// // }

// // const input = prompt("Input any number");
// // const number = number(input);

// // for(let x = 1; x = x, x++) {

// //   console.log(number + " + " + i + " = " + i * number);
// // function showMessage() {
// //   console.log("ben buradayim");
// // }
// // showMessage();

// // function calculateNumber(initialValue) {
// //   let x = initialValue;
// //   x = x + 100;
// //   x = x / 5;

// //   return x;
// // }
// // const result = calculateNumber(1000);
// // const result1 = calculateNumber(1002450);

// // console.log(result);
// // console.log(result1);

// // function calculateCircleArea(circleRadius) {
// //   const area = 3.14 * circleRadius ** 2;
// //   return area;
// // }
// // const circleArea1 = calculateCircleArea(5);
// // console.log(circleArea1);

// // const circleArea2 = calculateCircleArea(6);
// // console.log(circleArea2);

// // const input = prompt("Input any number");
// // for (x = input; x <= input; x--) {
// //   if ((x = x % x && 1));
// //   console.log(x);
// //   break;
// // }
// function isPositiveNumber(num) {
//   if (num > 0) {
//     // Перевіряємо, чи число num більше 0
//     return true;
//   } // Якщо так, то num є позитивним, тому повертаємо true
//   else num <= 0;
//   return false; // В іншому випадку, якщо num менше або дорівнює 0, то num не є позитивним, тому повертаємо false
// }

// console.log("Завдання 4 ====================================");
// console.log("isPositiveNumber(5)", isPositiveNumber(5)); // Виведе: true
// console.log("isPositiveNumber(-2)", isPositiveNumber(-2)); // Виведе: false

// // Задача 5: Напишіть функцію, яка перевіряє, чи є заданий рядок пустим. Використовуйте умовний оператор та властивість довжини рядка для перевірки.

// function isEmptyString(str) {
//   if (str === "") {
//     // Перевіряємо, чи рядок str дорівнює пустому рядку ('')
//     return true;
//   } // Якщо так, то str є порожнім рядком, тому повертаємо true
//   else str.length > 0;
//   return false; // В іншому випадку, якщо str містить хоча б один символ, то str не є порожнім рядком, тому повертаємо false
// }

// console.log("Завдання 5 ====================================");
// console.log('isEmptyString("")', isEmptyString("")); // Виведе: true
// console.log('isEmptyString("Hello")', isEmptyString("Hello")); // Виведе: false

// // Задача 8: Напишіть функцію getUserStatus, яка приймає вік користувача age і повертає рядок, що вказує на його статус.
// // Якщо вік менше 18 років, функція повертає "Неповнолітній". Якщо вік від 18 до 65 років, функція повертає "Дорослий". Якщо вік більше або дорівнює 65 рокам, функція повертає "Пенсіонер".
// // Використовуйте умовний оператор if, else if та оператори порівняння для визначення статусу користувача.

// function getUserStatus(age) {
//   if (age < 18) {
//     // Перевіряємо вік за допомогою умовних операторів
//     return "Неповнолітній";
//   } else if (age >= 18 && age < 65) {
//     return "Дорослий";
//   } else {
//     return "Пенсіонер";
//   }

//   // Якщо age менше 18, то користувач є "Неповнолітнім"
//   // Якщо age більше або дорівнює 18 і менше 65, то користувач є "Дорослим"
//   // В іншому випадку (якщо age більше або дорівнює 65), то користувач є "Пенсіонером"
// }

// // Приклади виклику функції
// console.log("Завдання 8 ====================================");
// console.log("getUserStatus(15)", getUserStatus(15)); // Виведе: "Неповнолітній"
// console.log("getUserStatus(25)", getUserStatus(25)); // Виведе: "Дорослий"
// console.log("getUserStatus(70)", getUserStatus(70)); // Виведе: "Пенсіонер"

// // Задача 9: Напишіть функцію getDayOfWeek, яка приймає номер дня тижня dayNumber (1-7) і повертає рядок, що відповідає цьому дню тижня.
// // Використовуйте конструкцію switch case для визначення дня тижня за його номером.

// function getDayOfWeek(dayNumber) {
//   let day;

//   switch (dayNumber) {
//     case 1:
//       day = "Понеділок";
//       break;
//     case 2:
//       day = "Вівторок";
//       break;
//     case 3:
//       day = "Середа";
//       break;
//     case 4:
//       day = "Четвер";
//       break;
//     case 5:
//       day = "П'ятниця";
//       break;
//     case 6:
//       day = "Субота";
//       break;
//     case 7:
//       day = "Неділя";
//       break;
//     default:
//       day = "Невірний номер дня";
//   }
//   return day;
// }

// // Приклади виклику функції
// console.log("Завдання 9 ====================================");
// console.log("getDayOfWeek(1)", getDayOfWeek(1)); // Виведе: "Понеділок"
// console.log("getDayOfWeek(3)", getDayOfWeek(3)); // Виведе: "Середа"
// console.log("getDayOfWeek(6)", getDayOfWeek(6)); // Виведе: "Субота"
// console.log("getDayOfWeek(8)", getDayOfWeek(8)); // Виведе: "Невірний номер дня"

// // Задача 2: Напишіть функцію, яка обчислює суму чисел від 1 до заданого числа. Використовуйте цикл для послідовного додавання чисел.
// function calculateSum(n) {
//   let sum = 0; // Ініціалізувати змінну sum зі значенням 0
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   } // Запустити цикл для змінної i від 1 до n
//   // Додати поточне значення i до змінної sum
//   // Повернути значення змінної sum
//   return sum;
// }

// console.log("Завдання 2 ====================================");
// console.log("calculateSum(5)", calculateSum(5)); // Виведе: 15
// console.log("calculateSum(10)", calculateSum(10)); // Виведе: "55"

// function isEvenNumber(num) {
//   return num % 2 === 0; // Перевірити, чи число num є парним
//   // Повернути результат перевірки (true або false) як результат функції
// }

// console.log("Завдання 1 ====================================");
// console.log("isEvenNumber(10)", isEvenNumber(10)); // Виведе: true
// console.log("isEvenNumber(7)", isEvenNumber(7)); // Виведе: false

// // Задача 3: Напишіть функцію, яка перевіряє, чи є задане число простим(ділиться без остачі тільки на себе та на 1).
// // Використовуйте цикл для перевірки ділення числа на всі можливі дільники.

// function isPrimeNumber(num) {
//   if (num <= 1) {
//     return false;
//   }
//   // Якщо число num менше або дорівнює 1, то воно не є простим, тому повертаємо false
//   // В іншому випадку продовжуємо перевірку
//   for (let i = 2; i <= num - 1; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   // Запускаємо цикл для змінної i від 2 до num-1
//   // Перевіряємо, чи num ділиться націло на поточне значення i
//   // Якщо так, то num не є простим, тому повертаємо false
//   return true; // Якщо під час циклу не знайдено дільників, то num є простим, тому повертаємо true
// }

// console.log("Завдання 3 ====================================");
// console.log("isPrimeNumber(7)", isPrimeNumber(7)); // Виведе: true
// console.log("isPrimeNumber(10)", isPrimeNumber(10)); // Виведе: false

// // Задача 6: Напишіть функцію checkDataType, яка приймає параметр value і перевіряє його тип даних. Функція повинна використовувати оператор typeof для визначення типу значення.
// // Виведіть в консоль повідомлення з результатом перевірки типу, наприклад, Значення "hello" має тип "string"

// function checkDataType(value) {
//   const typeOfValue = typeof value;
//   // Отримуємо тип значення value за допомогою оператора typeof
//   console.log(`Значення "${value}" має тип "${typeOfValue}"`); // Виводимо у консоль повідомлення, яке містить значення value та його тип
//   return typeOfValue; // Повертаємо тип значення value
// }

// // Приклади виклику функції
// console.log("Завдання 6 ====================================");
// console.log("checkDataType(42)", checkDataType(42)); // Виведе: Значення "42" має тип "number".
// console.log("checkDataType('Hello')", checkDataType("Hello")); // Виведе: Значення "Hello" має тип "string".
// console.log("checkDataType(true)", checkDataType(true)); // Виведе: Значення "true" має тип "boolean".
// console.log("checkDataType(undefined)", checkDataType(undefined)); // Виведе: Значення "undefined" має тип "undefined".

// // Задача 7: Напишіть функцію findMax, яка приймає два числа num1 і num2 і повертає більше з них. Використовуйте умовний оператор if та оператор порівняння для визначення більшого числа.

// function findMax(num1, num2) {
//   num1 == num2; // Порівнюємо num1 та num2
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   } // Якщо num1 більше num2, то num1 є максимальним, тому повертаємо num1
//   // В іншому випадку (якщо num2 більше або дорівнює num1), то num2 є максимальним, тому повертаємо num2
// }

// // Приклади виклику функції
// console.log("Завдання 7 ====================================");
// console.log("findMax(10, 5)", findMax(10, 5)); // Виведе: 10
// console.log("findMax(8,12)", findMax(8, 12)); // Виведе: 12
// console.log("findMax(7, 7)", findMax(7, 7)); // Виведе: 7

// // Задача 10: Напишіть функцію getVariableType, яка приймає змінну variable і повертає рядок, що відповідає типу цієї змінної. Використовуйте тернарний оператор для визначення типу змінної.

// function getVariableType(variable) {
//   const typeOfVar = typeof variable; // Отримуємо тип змінної variable за допомогою оператора typeof
//   const message =
//     typeOfVar === "number"
//       ? "Це число"
//       : typeOfVar === "string"
//       ? "Це рядок"
//       : typeOfVar === "boolean"
//       ? "Це булеве значення"
//       : "Це інший тип";
//   // Встановлюємо відповідне повідомлення залежно від отриманого типу
//   // Якщо тип змінної - number, то повідомлення = "Це число"
//   // Якщо тип змінної - string, то повідомлення = "Це рядок"
//   // Якщо тип змінної - boolean, то повідомлення = "Це булеве значення"
//   // В іншому випадку (якщо тип змінної не входить у попередні категорії), то повідомлення = "Це інший тип"
//   // Повертаємо встановлене повідомлення як результат функції
//   return message;
// }

// // Приклади виклику функції
// console.log("Завдання 10 ====================================");
// console.log("getVariableType(10)", getVariableType(10)); // Виведе: "Це число"
// console.log('getVariableType("Hello")', getVariableType("Hello")); // Виведе: "Це рядок"
// console.log("getVariableType(true)", getVariableType(true)); // Виведе: "Це булеве значення"
// console.log("getVariableType([1, 2, 3])", getVariableType([1, 2, 3])); // Виведе: "Це інший тип"

// // Задача 11:Напишіть рекурсивну функцію, яка обчислює суму чисел від 1 до заданого числа.
// // Факторіал числа - це добуток всіх цілих чисел від 1 до цього числа. Наприклад, факторіал 5 (записується як 5!) дорівнює 1*2*3*4*5 = 120.

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     // Якщо n дорівнює 0 або 1, повертаємо 1, оскільки факторіал 0 і 1 завжди дорівнює 1.
//     return 1; // Якщо n більше за 1, ми множимо n на результат виклику тієї самої функції з n-1.
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// console.log("Завдання 11 ====================================");
// console.log("factorial(5)", factorial(5)); // Виведе: 120
// console.log("factorial(10)", factorial(10)); // Виведе: 3628800

// // Задача 12: створити функцію `makeAdder`, яка приймає число `x` і повертає нову функцію, що приймає число `y` і повертає суму `x` та `y`.
// function makeAdder(x) {
//   return function (y) {
//     // Вертаємо нову функцію, яка приймає `y`
//     return x + y; // Сумуємо `x` та `y` і повертаємо результат
//   };
// }

// let getAdder = makeAdder(5); // Створюємо змінну getAdder якій присвоємо результат виконання функції makeAdder з аргументом 5

// console.log("Завдання 12 ====================================");
// // Розкоментуйте після виконання завдання
// console.log("getAdder(10)", getAdder(10)); // Виведе: 15
// console.log("makeAdder(5)(10)", makeAdder(5)(10)); // Виведе: 15

// // Задача 13: Задача: створити стрілкову функцію, яка приймає два числа і повертає їх добуток.
// let multiply = (x, y) => {
//   return x * y; // Повертаємо добуток x та y
// };

// console.log("Завдання 13 ====================================");
// console.log("multiply(5, 3)", multiply(5, 3)); // Виведе: 15

// // Задача 14: Задача: створити каріровану функцію `divide`, яка може бути викликана як `divide(x)(y)`, щоб отримати результат ділення `x` на `y`.

// function divide(x) {
//   return function (y) {
//     // Повертаємо нову функцію, яка приймає `y`
//     return x / y;
//     // Ділимо `x` на `y` і повертаємо результат
//   };
// }
// let getDivider = divide(2); // Створюємо змінну getDivider якій присвоємо результат виконання функції divide з аргументом 2

// console.log("Завдання 14 ====================================");
// console.log("getDivider(10)", getDivider(10)); // Виведе: 0.2;
// console.log("divide(2)(10)", divide(2)(10)); // Виведе: 0.2;

// // Задача 15: Створити мемоізовану версію функції, яка обчислює площу квадрата на основі довжини його сторони.

// function memoizedArea() {
//   let primSide = null;
//   let primResult = null; // Ініціалізуємо примітивні змінні для зберігання попереднього аргументу та результату

//   return function (side) {
//     // Повертаємо функцію яка приймає аргумент side - сторону квадрата
//     if (primSide === side) {
//       // Перевіряємо, чи є введена сторона такою ж, як і в попередньому виклику
//       console.log("Fetching from cache"); // Виводимо повідомлення Fetching from cache
//       return primResult; // Повертаємо попереднє значення
//     }
//     // Якщо сторона відрізняється від попередньої, обчислюємо площу та зберігаємо результат та аргумент для майбутнього використання
//     console.log("Calculating result"); // Виводимо повідомлення Calculating result

//     const result = side * side; // Розраховуємо площу
//     primSide = side; // prevSide присвоюємо сторону квадрата
//     primResult = squareArea; // prevResult просвоюємо площу квадрата
//     return result; // Повертаємо площу
//   };
// }

// const squareArea = memoizedArea(); //Створюємо змінну squareArea якій присвоємо результат виконання функції memoizedArea

// console.log("Завдання 15 ====================================");
// // Розкоментуйте після виконаня завдання
// console.log("squareArea(5)", squareArea(5)); // Обчислює і виводить 25
// console.log("squareArea(5)", squareArea(5)); // Виводить "Fetching from cache" і виводить 25 з кешу
// console.log("squareArea(6)", squareArea(6)); // Обчислює і виводить 36
// console.log("squareArea(6)", squareArea(6)); // Виводить "Fetching from cache" і виводить 36 з кешу

// // Задача 16: Задача: створити функціональний вираз для обчислення кубу числа.
// let cube = function (n) {
//   return n ** 3; // Повертаємо n в кубі
// };

// console.log("Завдання 16 ====================================");
// console.log("cube(3)", cube(3)); // Виведе: 27

// // Задача 17: створити дві функції, одна з яких збільшує число на 1, а інша - множить число на 2, а потім створити композицію цих функцій.
// function increment(n) {
// //   return n + 1; // Повертаємо n + 1
// // }

// // function double(n) {
// //   return n * 2; // Повертаємо n*2
// // }

// // function compose(func1, func2) {
// //   return function calculateProduct(n) {
// //     // Повертаємо нову функцію, яка приймає аргумент n
// //     const resultFunc1 = func1(n);
// //     const resultFunc2 = func2(resultFunc1);
// //     return resultFunc2; // Повертаємо func2, в яку передаємо func1 з аргументом n
// //   };
// // }

// // const createCompose = compose(increment, double);
// // // Створюємо змінну createCompose якій присвоємо результат виконання функції compose з аргументами increment та double
// // console.log("Завдання 17 ====================================");
// // // Розкоментуйте після виконаня завдання
// // console.log("createCompose(5)", createCompose(5)); // Виведе: 12 (5+1=6, 6*2=12)
// const code = "console.log('Hello!')";

// eval(code);

// function calcScreenRation(w, h) {
//   let result = w / h;
//   return isFinite(result) ? result : null;
// }
// console.log(calcScreenRation(1920, "1800"));

//Задача 1: Напишіть функцію, яка буде виконувати js код який передали в функцію через аргумент в форматі тексту

// Створюємо функцію з назвою calculateExpression, яка приймає один аргумент expression
function calculateExpression(expression) {
  if (typeof expression === "string") {
    //Преревіряємо чи аргумент є рядком
    return eval(expression); //Якщо так повертаємо виконананий код
  }

  return "Argument is not a string"; // Якщо ні повертаємо текст "Argument is not a string"
}

console.log("Завдання 1 ====================================");
console.log(
  'calculateExpression("3 + 5 * 2")',
  calculateExpression("3 + 5 * 2")
); // Виведе 13

// Задача 2: Напишіть функцію, яка приймає рядок та повертає число з цього рядка або повідомлення про помилку.

// Створюємо функцію з назвою getNumberFromString, яка приймає один аргумент s
function getNumberFromString(s) {
  if (isNaN(parseFloat(s))) {
    // Використовуємо функцію parseFloat для того, щоб спробувати отримати число з рядка
    // Перевіряємо, чи є отримане значення числом за допомогою isNaN
    return "Couldn't extract a number from the provided string."; // Якщо значення не є числом, повертаємо текст "Couldn't extract a number from the provided string."
  }
  return parseFloat(s); // Якщо значення є числом, повертаємо його
}

// Виводимо результати виклику функції
console.log("Завдання 2 ====================================");
console.log(
  'getNumberFromString("100.5 apples")',
  getNumberFromString("100.5 apples")
); // Виведе 100.5
console.log(
  'getNumberFromString("No numbers here")',
  getNumberFromString("No numbers here")
); // Виведе повідомлення про помилку

// Задача 3: Напишіть функцію, яка приймає рядок та повертає ціле число з цього рядка або повідомлення про помилку.

// Створюємо функцію з назвою getIntegerFromString, яка приймає один аргумент s
function getIntegerFromString(s) {
  if (isNaN(parseInt(s))) {
    // Використовуємо функцію parseInt для того, щоб спробувати отримати ціле число з рядка
    // Перевіряємо, чи є отримане значення числом за допомогою isNaN
    return "Couldn't extract an integer from the provided string."; // Якщо значення не є числом, повертаємо текст "Couldn't extract an integer from the provided string."
  }
  return parseInt(s); // Якщо значення є числом, повертаємо його
}

// Виводимо результати виклику функції
console.log("Завдання 3 ====================================");
console.log(
  'getIntegerFromString("100 apples")',
  getIntegerFromString("100 apples")
); // Виведе 100
console.log(
  'getIntegerFromString("No integers here")',
  getIntegerFromString("No integers here")
); // Виведе повідомлення про помилку

// Задача 4: Напишіть функцію, яка перевіряє, чи є введене число скінченним.

// Створюємо функцію з назвою isNumberFinite, яка приймає один аргумент - num
function isNumberFinite(num) {
  if (isFinite(num)) {
    // Використовуємо вбудовану функцію isFinite, щоб перевірити, чи є введене число скінченним.
    // Ця функція повертає true, якщо число є скінченним, і false, якщо число є нескінченним або не є числом.
    // За допомогою оператора if перевіряємо, чи є число скінченним.
    return "The number is finite."; // Якщо число є скінченним, повертаємо текст "The number is finite.".
  }
  return "The number is not finite."; // Якщо число не є скінченним, повертаємо текст "The number is not finite.".
}

// Виконуємо функцію з різними вхідними даними і виводимо результат.
console.log("Завдання 4 ====================================");
console.log("isNumberFinite(100)", isNumberFinite(100)); // Виведе "The number is finite."
console.log("isNumberFinite(Infinity)", isNumberFinite(Infinity)); // Виведе "The number is not finite."

// Задача 5: Напишіть функцію, яка перевіряє, чи є введене значення NaN.

// Створюємо функцію з назвою isValueNaN, яка приймає один аргумент - value
function isValueNaN(value) {
  if (isNaN(value)) {
    // Використовуємо вбудовану функцію isNaN, щоб перевірити, чи є введене значення NaN.
    // Ця функція повертає true, якщо значення є NaN, і false, якщо значення не є NaN.
    // За допомогою оператора if перевіряємо, чи є значення NaN.
    return "The value is NaN."; // Якщо значення є NaN, повертаємо текст "The value is NaN.".
  }
  return "The value is not NaN."; // Якщо значення не є NaN, повертаємо текст  "The value is not NaN.".
}

// Виконуємо функцію з різними вхідними даними і виводимо результат.
console.log("Завдання 5 ====================================");
console.log("isValueNaN(NaN)", isValueNaN(NaN)); // Виведе "The value is NaN."
console.log("isValueNaN(100)", isValueNaN(100)); // Виведе "The value is not NaN."

// Задача 6: Напишіть функцію, яка кодує компонент URL.

// Створюємо функцію з назвою encodeURLComponent, яка приймає один аргумент - urlComponent
function encodeURLComponent(urlComponent) {
  encodeURIComponent(urlComponent); // Використовуємо вбудовану функцію encodeURIComponent, щоб закодувати введений компонент URL.
  // Ця функція повертає закодований компонент URL, замінивши небезпечні символи на їх процентне кодування.
  return encodeURIComponent(urlComponent); // Повертаємо закодований компонент URL.
}

// Виконуємо функцію з вхідними даними і виводимо результат.
console.log("Завдання 6 ====================================");
console.log(
  'encodeURLComponent("Hello World!")',
  encodeURLComponent("Hello World!")
); // Виведе "Hello%20World!"

// Задача 7: Напишіть функцію, яка кодує URL.

// Створюємо функцію з назвою encodeURL, яка приймає один аргумент - url
function encodeURL(url) {
  // Використовуємо вбудовану функцію encodeURI, щоб закодувати введений URL.
  // Ця функція повертає закодований URL, замінивши небезпечні символи на їх процентне кодування.
  return encodeURI(url); // Повертаємо закодований URL.
}

// Виконуємо функцію з вхідними даними і виводимо результат.
console.log("Завдання 7 ====================================");
console.log(
  'encodeURL("https://ex ample.com")',
  encodeURL("https://ex ample.com")
); // Виведе "https://ex%20ample.com"

// Задача 8: Напишіть функцію, яка декодує закодований компонент URL.

// Створюємо функцію з назвою decodeURLComponent, яка приймає один аргумент - urlComponent
function decodeURLComponent(urlComponent) {
  // Використовуємо вбудовану функцію decodeURIComponent, щоб декодувати введений закодований компонент URL.
  // Ця функція повертає декодований компонент URL, замінивши процентне кодування символів на їх реальні значення.
  return decodeURIComponent(urlComponent); // Повертаємо декодований компонент URL.
}

// Виконуємо функцію з вхідними даними і виводимо результат.
console.log("Завдання 8 ====================================");
console.log(
  'decodeURLComponent("Hello%20World%21")',
  decodeURLComponent("Hello%20World%21")
); // Виведе "Hello World!"

// Задача 9: Напишіть функцію, яка декодує закодований URL.

// Створюємо функцію з назвою decodeURL, яка приймає один аргумент - url
function decodeURL(url) {
  // Використовуємо вбудовану функцію decodeURI, щоб декодувати введений закодований URL.
  // Ця функція повертає декодований URL, замінивши процентне кодування символів на їх реальні значення.
  return decodeURI(url); // Повертаємо декодований URL.
}

// Виконуємо функцію з вхідними даними і виводимо результат.
console.log("Завдання 9 ====================================");
console.log(
  'decodeURL("https://ex%20ample.com")',
  decodeURL("https://ex%20ample.com")
); // Виведе "https://ex ample.com"
