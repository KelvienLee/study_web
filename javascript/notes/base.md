# Javascript 基础知识

## 变量

```javascript
// 定义变量
var name = "kelvin";

// 推荐使用驼峰命名法
var fontColor = "green";

var a = 1;
var b = 2;
var c = a + b;

console.log(name);
console.log(fontColor);
console.log(a + b);
console.log(c);

// 常量的定义
const FIVE_SECONDS = 5000;
console.log(FIVE_SECONDS);
```

## 数据类型

```javascript
//定义数据类型
// boolean 布尔值
var exists = false;

var isBoy = true;

// 整数类型
var temperature = 36;

// 字符串
var str = "hello!";

// 未定义，变量未初始化
var notExists;
console.log(notExists);
// undefined
var notExists = undefined;
// 等同于
console.log(notExists);

// null, 变量已被赋值，但为空
var emptyValue = null;
console.log(emptyValue);
// null
```

## 数据类型转换

```javascript
// 检测数据类型

console.log(typeof isBoy);
// boolean
console.log(typeof str);
// string
console.log(typeof temperature);
// number
console.log(notExists);
// undefined
console.log(emptyValue);
// null ！早期标准会返回为 object 类型

// 动态数据类型转换

age = 18;
console.log(typeof age);
// number

age = "18";
console.log(typeof age);
// string

var num = 100;
var str = "hello!";
var result = num + str;

console.log(result);
// 100hello!

var strNum = "123";
console.log(typeof strNum);
//string
parseInt(strNum);
console.log(typeof strNum);
// !仍然是 string
console.log(parseInt(strNum) + num);
// 223  ！应该这样用
```

## 注释

```javascript
// ------------------------
// --------------------------------- 注释
// ------------------------

// 这是普通的单行注释

/*
这是一个多行注释
1. 第一行
2. 第二行
3. 第三行
*/

/** 文档注释写法 */

/**
 * 对两个操作数进行加法运算
 * @param {number} a 第一个操作数
 * @param {number} b 第二个操作数
 * @returns 两个操作数的和
 */
function add(a, b) {
  return a + b;
}

var result = add(1, 2);
console.log(result);
// 3
```

## 一元操作符

```javascript
// ------------------------
// --------------------------------- 一元操作符
// ------------------------

var negativeNum = -5;

console.log(typeof negativeNum);
// number

// + 加号充当了一元操作符,将数据类型转变为number
var strNum = +"3";
console.log(typeof strNum);
// number

var num = 8;
// 加号放在后面，先返回变量值，再对其进行加一操作
console.log(num++);
// 8
console.log(num);
// 9

// 加号放在前面，自增1，不再变化
console.log(++num);
// 10
console.log(num);
// 10

// - 减号也是同样的道理
console.log(num--);
// 10
console.log(num);
// 9

console.log(--num);
// 8
console.log(num);
// 8
```

## 运算符

```javascript
// ------------------------
// --------------------------------- 算数操作符
// ------------------------

console.clear();
// 加法 addition
var add = 1 + 2;
// 减法 subtraction
var subtraction = 8 - 2;
// 乘法 multiplication
var mul = 6 * 6;
// 除法 division
var div = 99 / 9;

// 余数 reminder
var rem = 11 % 5;
// 指数 exponent
var exponent = 4 ** 2;

console.log(add);
console.log(subtraction);
console.log(mul);
console.log(div);
console.log(rem);
console.log(exponent);

// ------------------------
// --------------------------------- 比较操作符
// ------------------------

console.log(3 > 1);
// true
console.log(4 < 2);
// false
console.log(9 >= 8);
// true
console.log(9 >= 9);
// true
console.log(3 <= 5);
// true
console.log(3 <= 1);
// false

console.clear();
console.log(5 == 5);
// true
console.log(5 == "5");
// !true 两个等号 == 的时候，自动进行类型转换
console.log(5 === "5");
// !false 三个等号才进行严格类型比较

// 一元操作符简单运用
console.log(5 === +"5");
// true

console.log(undefined == null);
// true
console.log(undefined === null);
// false

// ------------------------
// --------------------------------- 逻辑操作符
// ------------------------

console.clear();

// js 默认假值：
// false,
// 0,
// "",
// null,
// undefined

// 逻辑与

console.log(true && true);
// true
console.log(true && false);
// false

// 逻辑或
console.log(false || true);
// true
console.log(true || false);
// true
console.log(false || false);
// false

// 逻辑非
console.log(!false);
// true
console.log(!true);
// false

// 一些简单运用
console.log(true && "hello!");
// hello!
// 前端开发中，可将前面设为判断条件，返回真值时，再显示某些内容，某个组件等。

console.log(false || "default");
// default

// 默认值的设置
// 未赋值，使用默认值 `5`
var a = null;
b = a || 5;
console.log(b);
// 5

// 已赋值，使用给出的值 `6`
var c = 6;
d = c || 5;
console.log(d);
// 6

// 小技巧
// !一个 `!`, 返回false
console.log(!10);
// false
console.log(!"hello");
// false

// !两个 `!!`, 返回true
console.log(!!10);
// true
console.log(!!"hello");
// true

// ------------------------
// !--------------------------------- 位运算符 待研究
// ------------------------

// 5 101
// 3 011

console.clear();

console.log(5 & 3);
console.log(5 | 3);
console.log(5 ^ 3);

console.log(~5);
console.log(~3);

// ------------------------
// --------------------------------- 三目运算符
// ------------------------

var age = 18;

// [条件] ? <为真> : <为假>;
var isAdult = age >= 18 ? "成年了" : "未成年";
console.log(isAdult);
// 成年了

age = 10;
isAdult = age >= 18 ? "成年了" : "未成年";
console.log(isAdult);
// 未成年
```

## 流程控制

```javascript
// ------------------------
// --------------------------------- 流程控制
// ------------------------

// 语句块

// 定义了一个语句块
{
  var globalName = "lucy";
  console.log(globalName);
  // lucy

  let localName = "jack";
  console.log(localName);
  // jack

  const GENDER = "male";
  console.log(GENDER);
  // male
}

// `var`定义的变量全局可访问
console.log(globalName);
// lucy

// `let` 定义的变量无法在语句块外被访问
console.log(localName);
// !报错 语句块外无法访问 `let`定义的局部变量

// `const` 定义的变量同样无法在语句块外被访问
console.log(GENDER);
// !报错 语句块外同样无法访问 `const`定义的局部变量

// if..else

var passcode = prompt("天王盖地虎");
if (passcode === "宝塔镇河妖") {
  alert("success!");
} else {
  alert("defeat!");
}

var role = prompt("用户权限：");
if (role === "admin") {
  alert("redirect to admin page");
} else if (role === "super admin") {
  alert("redirect to super admin page");
} else if (role === "") {
  alert("redirect to empty page");
} else {
  alert("redirect to user page");
}

var role = prompt("who are you?");
switch (role) {
  case "admin":
    alert("admin");
    break;
  case "super admin":
    alert("super admin");
    break;
  case "":
    alert("empty user");
    break;
  default:
    alert("user!");
}

// ------------------------
// --------------------------------- 流程控制 while
// ------------------------

var password = "";

while (password !== "123456") {
  password = prompt("input password");
}

console.log("hello");

// do while

// !将条件检查放到下面，先执行一遍循环体，然后再检查条件，当条件为真时，重复执行循环体。
var x = 5;
do {
  console.log(x++);
} while (x > 5 && x <= 10);

// for 循环
// `i++` == `i += 1`
for (let i = 0; i <= 10; i += 1) {
  console.log(i);
}

// while 循环写法
var index = 0;
while (index <= 10) {
  console.log(index);
  index++;
}

// !可以省略判断条件,谨慎执行！死循环!
// for (;;) {
//   console.log("true");
// }

// break continue

// break
for (let i = 0; i <= 10; i++) {
  if (i === 6) {
    break;
  }
  console.log(i);
}

// continue
for (let i = 0; i <= 10; i++) {
  if (i === 6) {
    continue;
  }
  console.log(i);
}
```

## 函数

### 函数的定义和使用

```javascript
// ------------------------
// --------------------------------- 函数
// ------------------------

console.clear();

// 定义函数
function putInRefrigerator() {
  console.log("open refrigerator");
  console.log("put elephant in");
  console.log("close refrigerator");
  return "success!";
}

function putAnythingInRefrigerator(anything) {
  console.log("open refrigerator");
  console.log("put " + anything + " in");
  console.log("close refrigerator");
  return "success!";
}

// 调用函数
info = putInRefrigerator();
console.log(info);

console.log(putAnythingInRefrigerator("apple"));
```

### 函数表达式匿名函数 变量提升 默认值 递归 不定长参数

```javascript
//函数表达式

function plus(a, b) {
  return a + b;
}
console.log(plus(3, 8));
// 11

var res = plus(2, 4);
console.log(res);
// 6

// 匿名函数
var multiply = function (a, b) {
  return a * b;
};

console.log(multiply(5, 5));
// 25

// 变量和函数提升
// 可以将函数放在底部，这样也能在函数定义的前方调用函数
console.clear();

// 调用函数，在函数声明的上方
console.log(divide(10, 5));

// 定义函数，在函数块之前也能调用函数
function divide(a, b) {
  return a / b;
}

// 默认参数

function greeting(name = "kelvin") {
  console.log("hello " + name + " !");
}

greeting();
// hello kelvin !
greeting("lucy");
// hello lucy !

function greetingWithWeather(name = "kelvin", weather) {
  console.log("你好 " + name + "，今天是： " + weather);
}

// 调用顺序
greetingWithWeather(undefined, "晴天");

// 函数的递归
console.clear();

function sum(n) {
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
}
console.log(sum(100));

// arguments 不定长参数
function log() {
  for (let i = 0; i < arguments.length; i++) console.log(arguments[i]);
}

log("info_1", "info_2", "info_3");
```

### 函数作用域 与 `let` `var` 的区别

```javascript
// 函数作用域

var z = 10;
function add_02(a) {
  // 函数内调用全局变量
  return a + z;
}

console.log(add_02(4));

function add_03(a) {
  // 定义了一个局部变量
  var local_a = 10;
  console.log(a);
  console.log(local_a);
}

add_03(3);
// 函数内的局部变量 `local_a`无法在全局被访问
// console.log(local_a);
// !报错

// `var` 和 `let`的区别

console.clear();

var z = 10;
if (z > 2) {
  console.log(z);
  var innerZ = 17;
  let innerY = 20;
}

// if 语句块内定义的var定义的变量能被全局调用
console.log(innerZ);
// 17
// if 语句块内定义的`let'变量变量不能被全局引用
// console.log(innerY);
// 报错

console.clear();

// `var`
for (var innerI = 1; innerI < 6; innerI++) {
  console.log(innerI);
}
console.log("var innerI: " + innerI);
// 1, 2, 3, 4, 5

// `let`
for (let innerJ = 1; innerJ < 6; innerJ++) {
  console.log(innerJ);
}

// !`let`定义的局部变量外部无法访问
// console.log("var innerJ: " + innerJ);
// 报错

console.clear();
```

### 箭头函数 闭包 柯里化 回调函数

```javascript
// 箭头函数

// 没用携带参数，必须写出`()`括号
var greeting = () => {
  console.log("hello!");
};

greeting();

// 尽管携带参数，也推荐使用小括号包裹
var greetingWithName = (name, weather) => {
  console.log("hello " + name + weather);
};

greetingWithName("kelvin", ", sunny today");

// 一行简写, 省略return关键词
var increment = (x) => x + 1;
console.log(increment(5));
// 6

// 闭包

function squareSum(a, b) {
  function square(x) {
    return x * x;
  }

  return square(a) + square(b);
}

console.log(squareSum(2, 3));
// 13

console.clear();
// 高阶函数 higher-order-function

function person() {
  let name = "kelvin";
  // 闭包函数
  function getName() {
    return name;
  }
  // 外界只能访问 `name`而不能修改
  return getName;
}

var getName = person();
console.log(getName);
console.log(getName());

console.clear();
// 柯里化

function addThreeNums(a, b, c) {
  return a + b + c;
}
console.log(addThreeNums(1, 2, 3));
// 6

function addThreeNumsCurry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(addThreeNumsCurry(1)(2)(3));
// 6

// 柯里化，函数保存结果
var fixedTwo = addThreeNumsCurry(1)(2);
console.log(fixedTwo(4));
// 1 + 2 + 4 = 7
console.log(fixedTwo(10));
// 1 + 2 + 10 = 13

console.clear();
// 自执行函数
var num1 = 10;

// 自执行函数内部变量不会影响外部
(function () {
  var num1 = 20;
  console.log(num1);
  // 20
})(); // 小括号表示自执行

// 不受自执行函数影响
console.log(num1);
// 10

// 回调函数
console.clear();

function request(cd, name1) {
  console.log("请求数据");
  // 执行回调函数
  cd(name1);
  console.log("请求结束");
}

// 定义回调函数
function callback(name) {
  console.log("执行回调");
  console.log(name);
}

request(callback, "kelvin");
// 请求数据
// 执行回调
// kelvin
// 请求结束

// 箭头函数简写式回调函数（不可复用）
request((name) => {
  console.log("执行回调");
  console.log(name);
}, "lucy");
// 请求数据
// 执行回调
// lucy
// 请求结束
```

## 数组

```javascript
// ------------------------
// --------------------------------- 数组
// ------------------------

console.clear();

var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = new Array(4, 5, 6);
console.log(arr2);

var arr3 = Array(7, 8, 9);
console.log(arr3);

var arr4 = Array.of(10, 11, 12);
console.log(arr4);

// 如果创建一个数组只有一个值
// `Array`方法会创建n个空值
var arrSingle = Array(6);
console.log(arrSingle);
// empty x 6

// `new Array`方法也会创建n个空值
var arrSingle2 = new Array(7);
console.log(arrSingle2);
// empty x 7

// `Array.of`方法可以创建单个值的数组
var arrSingle3 = Array.of(8);
console.log(arrSingle3);
// 8

// 字面意义直接创建单个值的数组
var arrSingle4 = [9];
console.log(arrSingle4);
// 9

// 访问数组
// 通过下标或索引

console.clear();
var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.length);
console.log(arr[0]);
// 超过索引
console.log(arr[10]);
// undefined

// 添加元素
console.clear();

var arr5 = [1, 2, 3];
arr5[0] = 0;
console.log(arr5);
// 0, 2, 3

arr5[6] = 6;
console.log(arr5);
//  [0, 2, 3, empty × 3, 6]

console.clear();
// 删除元素
var arr6 = [1, 2, 3, 4, 5];
// 删除末端
arr6.length = 3;
console.log(arr6);
// [1, 2, 3]

// 清空
arr6.length = 0;
console.log(arr6);
// []

console.clear();
var arr = [1, 2, 3, 4, 5, 6];

// splice 删除替换的使用
// (删除索引，删除的数量)
arr.splice(2, 1);
console.log(arr);
// 1,2,4,5,6

var arr = [1, 2, 3, 4, 5, 6];
arr.splice(1, 2);
console.log(arr);
// 1, 4, 5, 6

var arr = [1, 2, 3, 4, 5, 6];
arr.splice(1, 2, 7, 8, 9);
console.log(arr);
// 1, 7, 8, 9, 4, 5, 6

// 数组的遍历
// 数组的长度比索引多一 `i < arr.length`
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// `for...of`
console.log("for...of");
for (let ele of arr) {
  console.log(ele);
}

// forEach

arr.forEach((ele, index, self) => {
  console.log(ele, index, self);
});

console.clear();

// 栈模式

// 入栈
var stack = [1, 2, 3];
stack.push(4);
console.log(stack);
// [1, 2, 3, 4]
stack.push(5, 6, 7);
console.log(stack);
// [1, 2, 3, 4, 5, 6, 7]

// 出栈
// `pop`方法会移除最后一个值
var last = stack.pop();

// 最后一个数字
console.log(last);
// 7

console.log(stack);
// 7 已被移除
// [1, 2, 3, 4, 5, 6]

console.log(stack[stack.length - 1]);
// 最后一个值

// 队列模式

// 入队
var queue = [1, 2, 3];
queue.push(4, 5, 6);
console.log(queue);
// [1, 2, 3, 4, 5, 6]

// 出队
var first = queue.shift();
console.log(first);
// 1
console.log(queue);
// 2, 3, 4, 5, 6

// 插队
queue.unshift(10, 11, 12);
console.log(queue);
// [10, 11, 12, 2, 3, 4, 5, 6]

console.clear();

// 翻转数组
var arr = [1, 2, 3, 4, 5, 6];
console.log(arr.reverse());
// [6, 5, 4, 3, 2, 1]
console.log(arr);
// [6, 5, 4, 3, 2, 1]

var str = "hello".split("");
console.log(str);
// ['h', 'e', 'l', 'l', 'o']
console.log(str.reverse());
// ['o', 'l', 'l', 'e', 'h']

console.clear();

// 数组排序

var arr = [2, 5, 8, 1, 3, 6];

arr.sort();
console.log(arr);
// [1, 2, 3, 5, 6, 8]

// 自定义一个排序函数 倒序只是例子，可自行编写功能
// arr.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (a < b) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// 上面函数的简写，妙不可言~
arr.sort((a, b) => b - a);

console.log(arr);

console.clear();
// 数组连接

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];

console.log(arr1.concat(arr2, arr3));
//  [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.clear();

// 数组切片

var arr = [1, 2, 3, 4, 5, 6];

console.log(arr.slice(1));
// 同python, 不包含右值
console.log(arr.slice(2, 4));
console.log(arr.slice(3, -1));

console.clear();

// map 数组
// 返回组成一个新数组

var arr = [1, 2, 3, 4, 5, 6];
var mappedArr = arr.map((ele) => ele * 2);
console.log(mappedArr);
console.log(arr);

// 数组 reduce
console.clear();
var arr = [1, 2, 3, 4, 5, 6];
var result = arr.reduce((previous, current) => previous + current, 0);
console.log(result);

var result2 = arr.reduce((first, second) => first + second);
console.log(result2);

// 数组过滤
console.clear();
var arr = [1, 2, 3, 4, 5, 6];
var filteredArr = arr.filter((item) => item > 4);
console.log(filteredArr);
// 5,6

// 数组测试
console.clear();

var arr = [1, 2, 3, 4, 5, 6];

// 检测每一个数值
var result = arr.every((item) => item > 0);
console.log(result);
// true

// 检测一些数值
var resultSome = arr.some((item) => item > 5);
console.log(resultSome);

// 解构操作符
console.clear();
var arr = [1, 2, 3, 4, 5, 6];
var [a, b, c, d, e, f] = arr;
console.log(a, b, c, d, e, f);

// rest操作符

console.clear();
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var [a, b, ...rest] = arr;
console.log(a, b, rest);
// 1 2 (6) [3, 4, 5, 6, 7, 8]

// 不定长参数的函数
function variousArgs(...args) {
  console.log(args);
}

variousArgs(1, 3, 5);
// (3) [1, 3, 5]

// 多维数组

console.clear();
var arr = [];
for (let i = 0; i < 5; i++) {
  arr[i] = [];
  for (let j = 0; j < 4; j++) {
    arr[i][j] = i + j;
  }
}
console.log(arr);
```

## 对象
