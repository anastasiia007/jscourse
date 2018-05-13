//Посмотрите, понятно ли вам, почему код ниже работает именно так?

var a = 1,
  b = 1,
  c,
  d;

c = ++a;
alert(c); // 2
d = b++;
alert(d); // 1

c = 2 + ++a;
alert(c); // 5
d = 2 + b++;
alert(d); // 4

alert(a); // 3
alert(b); // 3

/*
1.Переменной c присвоено значение переменной а. Префиксная форма, переменная а возвращает значение увеличенное на единицу. с = 2 и а = 2
2.Переменной d присвоено значение переменной b. Постфиксная форма, переменная сначала возвратит значение переменно b до увеличения
и присвоит значение переменной d, а после увеличит себя еще на 1. d=1, b=2 
3. с = (2 + 3) с = 5 Сначала переменная а (2+1) увеличилась еще на единицу, потому что у инкремента приоритетность выше, потом сработало обычное сложение.
4. d = (2 + 2) d = 4 Постфиксная форма возвращает предыдущеее значение b=2, потом сработало обычное сложение, а после перпеменная b увеличилась на 1. b=3.
5. а и b были увеличины на единицу 2 раза, поэтому равны 3. 
*/

//Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
// x = 1 + (2*2)
//x = 5

/*Логические операторы*/

//Что выведет код ниже?
alert(null || 2 || undefined);
//Выведет 2 потому что первое значение, которое возвращает true

//Что выведет код ниже?
alert(alert(1) || 2 || alert(3));
/*Выведет 2, потому что первый alert(1) = undefined, следующее значение возвращает true,
на этом проверка остановится, alert(3) проверяться уже не будет.*/

//Что выведет код ниже?
alert(1 && null && 2);
//Выведет null, потому что это первое false из списка.

//Что выведет код ниже?
alert(alert(1) && alert(2));
//1, потом undefined. Вызов alert не возвращает значение, поэтому до alert(2) дело не дойдет.

//Что выведет код ниже?
alert(null || (2 && 3) || 4);
/*Выведет 3. Приоритет оператора && выше, чем ||, поэтому он выполнится первым. Т.к. оба оператора истинны, он вернет последнее значение 3.
Потом оператор || выведет первое истинное значение из примера равное 3*/

/*Напишите условие if для проверки того факта, что age НЕ находится между 14 и 90 включительно.
Сделайте два варианта условия: первый с использованием оператора НЕ !, второй – без этого оператора.*/
if (age > 14 || age < 90);
if (!(age >= 14 && age <= 90));

/*Какие из этих if верны, т.е. выполнятся?
Какие конкретно значения будут результатами выражений в условиях if(...)?*/
if (-1 || 0) alert("первое"); // -1
if (-1 && 0) alert("второе"); // 0
if (null || -1 && 1) alert("третье"); // 1

//Преобразования
"" + 1 + 0; // false + 1 + 0 = "10" преобразование к строчному типу и конкатенация
"" - 1 + 0; //false - 1 + 0 = - 1 математическая операция
true + false; // 1 потому что true = 1, false = 0
6 / "3"; //2 - приводятся к численному типу
"2" * "3"; //6 - приводятся к численному типу
4 + 5 + "px"; //9px - сначала выполнится сложение, а потом преобразование к строчному типу и конкатенация
"$" + 4 + 5; //$45 - сначала преобразует 4 в строчний тип, потом 5
"4" - 2; // 2 потому что "-" не преобразует к строчному типу и выполняет математическиую операцию.
"4px" - 2; // NaN потому что при преобразовании числа к строки "4px" даст NaN, далее все матем. операции с  NaN так же будут NaN.
7 / 0; // infinity при делении на 0
"  -9\n" + 5; // " -9\n5" преобразование к строчному типу и конкатенация
"  -9\n" - 5; // -14
5 && 2; // 2 возвращает последнее истинное значение
2 && 5; //5
5 || 0; //5 возвращает первое истинное значение
0 || 5; //5
null + 1; // 1 потому что null становится 0 при численном преобразовании
undefined + 1; // NaN потому что undefined становится NaN при численном преобразовании
null == "\n0\n" //false потому что есть правило, что null == undefined
+null == +"\n0\n"// true потому что обе части преобразовываются к 0
