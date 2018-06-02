//Замыкания, функции изнутри
//Что будет, если вызов say('Вася'); стоит в самом-самом начале, в первой строке кода?
say('Вася'); // Что выведет? Не будет ли ошибки?
var phrase = 'Привет';

function say(name) {
  alert(name + ", " + phrase);
}
//Ответ:Выведет "Вася, undefined" потому что переменная обозначена, но еще не найдена.

////////////////////////////////////////////////////////////

/*В какую переменную будет присвоено значение?
Каков будет результат выполнения этого кода?*/
var value = 0;

function f() {
  if (1) {
    value = true;
  } else {
    var value = false;
  }
  alert(value);
}
f();
//Ответ: true. Переменная будет создана до выполнения кода. Внешняя переменная неизменится.
/*Даже если убрать var перед value = false, ответ будет true, но внешняя переменная уже будет другая, т.к
обращение уже будет к window.*/

////////////////////////////////////////////////////////

//var window
//Каков будет результат выполнения этого кода? Почему?
function test() {
  alert(window);
  var window = 5;
  alert(window);
}
test();
/*Ответ: Сначала выведет undefined, потом 5.
Потому что вначале переменная window не определена, а после принимает значение 5*/

////////////////////////////////////////////////////////

//Вызов "на месте"
//Каков будет результат выполнения кода? Почему?
var a = 5 //нет ;
(function () {
  alert(a)
})()
//Ответ: Будет ошибка, т.к. пропущена ;

////////////////////////////////////////////////////////

//Перекрытие переменной
/*Если во внутренней функции есть своя переменная с именем
currentCount – можно ли в ней получить currentCount из внешней функции?*/
function makeCounter() {
  var currentCount = 1;
  return function () {
    var currentCount;
    // можно ли здесь вывести currentCount из внешней функции (равный 1)?
  };
}
//Ответ: Нет, потому что локальная переменная перекрывает внешнюю.

/////////////////////////////////////////////////////////

//Глобальный счётчик
//Что выведут эти вызовы, если переменная currentCount находится вне makeCounter?
var currentCount = 1;

function makeCounter() {
  return function () {
    return currentCount++;
  };
}

var counter = makeCounter();
var counter2 = makeCounter();

alert(counter()); // 1
alert(counter()); // 2

alert(counter2()); // 3
alert(counter2()); // 4

//Данные высчитываются из глобальной переменной