//Сумма через замыкание
//Напишите функцию sum, которая работает так: sum(a)(b) = a+b.
function sum(a) {
  return function (b) {
    return a + b;
  };
}
console.log(sum(5)(7));

////////////////////////////////////////////////////////

//Функция - строковый буфер
function makeBuffer() {
  let str = '';
  return function (text) {
    if (arguments.length == 0) { // вызов без аргументов
      return str;
    }
    str += text; //преобразование к строковому типу
  };
};

let buffer = makeBuffer();
// добавить значения к буферу
buffer('Замыкания');
buffer('Использовать');
buffer('Нужно!');
console.log(buffer());

let buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(5);
console.log(buffer2());

//Строковый буфер с очисткой
function makeBuffer() {
  let str = '';

  function buffer(text) {
    if (arguments.length == 0) { // вызов без аргументов
      return str;
    }
    str += text; //преобразование к строковому типу
  };
  buffer.clear = function () {
    str = "";
  }
  return buffer;
};

let buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
console.log(buffer()); // Тест тебя не съест

buffer.clear();

console.log(buffer()); // ""

//Сортировка
let users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];

function byField(field) {
  return function (a, b) {
    return a[field] > b[field] ? 1 : -1;
  }
}
users.sort(byField('name'));
users.forEach(function (user) {
  console.log(user.name);
});

users.sort(byField('age'));
users.forEach(function (user) {
  console.log(user.name);
});

//Фильтрация через функцию
//Функция фильтрации
function filter(arr, func) {
  return arr.filter(func);
  // let result = [];
  // for (let i = 0; i < array.length; i++) {
  //   let val = [i];
  //   if (func(val)) {
  //     result.push(val);
  //   }
  // }
  // return result;
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(filter(arr, function (a) {
  return a % 2 == 0
})); // 2,4,6

//inBetween
function filter(arr, func) {
  return arr.filter(func);
}

function inBetween(a, b) {
  return function (x) {
    return (x >= a) && (x <= b);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(filter(arr, inBetween(3, 6))); // 3,4,5,6

//inArray
function filter(arr, func) {
  return arr.filter(func);
}

function inArray(arr) {
  return function (x) {
    return arr.indexOf(x) != -1;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(filter(arr, inArray([1, 2, 10]))); // 1,2


//Армия функций
function makeArmy() {
  let shooters = [];
  for (let i = 0; i < 10; i++) {
    let shooter = function () { // функция-стрелок
      console.log(i); // выводит свой номер
    };
    shooters.push(shooter);
  }
  return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5
army[9](); // 9