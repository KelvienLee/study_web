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
