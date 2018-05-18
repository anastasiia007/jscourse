//Обязателен ли "else"?
//Оба варианта правильные и работают одинаково

//Перепишите функцию, используя оператор '?' или '||'
function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили?");
}

function checkAge(age) {
  return age > 18 || confirm("Родители разрешили?");
}
checkAge(age);

//Функция min
function min(a, b) {
  return a < b ? a : b;
}

var a = prompt("vvedite a", a);
var b = prompt("vvedite b", b);
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(min(a, b));

//Function pow
function pow(x, n) {
  var result = x;
  for (var i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
var x = prompt("vvedite x", x);
var n = prompt("vvedite n", n);

if (n <= 1) {
  alert("pow don't work");
} else {
  console.log(pow(x, n));
}

//Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n
//1. С использованием цикла.
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumTo(100));

//Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) для n > 1
function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}
console.log(sumTo(100));

//С использованием формулы для суммы арифметической прогрессии.
function sumTo(n) {
  return n * (n + 1) / 2;
}
console.log(sumTo(100));

//Вычислить факториал
function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
  //return n ? n * factorial(n - 1) : 1;
}
console.log(factorial(4));

//Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.
//рекурсия
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
console.log(fib(7));

//цикл
function fib(n) {
  let a = 1;
  b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log(fib(77));

//Проверка на NFE

/*Каков будет результат выполнения кода?
function g() { return 1; }
alert(g);

Функция отработает потому что обычное объявление ф-ции Function Declaration*/

/*А такого? Будет ли разница, если да – почему?
(function g() { return 1; });
alert(g);

Здесь выведет ошибку, т.к. Named Function Expression, ф-ция является частью выражения и ее имя видно
только внутри себя*/
