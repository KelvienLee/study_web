// 类型检测

var num = 1;
var float_num = 3.14;
console.log(typeof num);
// number
console.log(typeof float_num);
// number

var str = "hello!";
console.log(typeof str);
// string

var bool = true;
console.log(typeof bool);
// boolean

var ob = {
  name: "kelvin",
  age: 18,
};

console.log(typeof ob);
// object

var nullDemo = null;
console.log(typeof nullDemo);
// object

var und = undefined;
console.log(typeof und);
// undefined

var aw = [];
console.log(typeof aw);
// object

// 原型链检测
// 原型链属性检测
console.log(aw instanceof Array);
// true
console.log(ob instanceof Object);
// true

function Person() {
  console.log("this is a normal person");
}

let lily = new Person();

console.log(lily instanceof Person);
// true;

console.clear();

// 字符串转义与模板字面量使用

// 从对象中提取字符串
let strOb = new String("some string here");
console.log(strOb.toString());

let str01 = "hello";
console.log(str01);

// \ 转义
// \t 制表符
// \n 换行
let sayHello = "lily say \thello";
console.log(sayHello);

// 字面量使用
{
  let name = "kelvin",
    age = 18,
    gender = "male";
  console.log(`${name} is ${age} year old, and is a ${gender}`);
  // kelvin is 18 year old, and is a male

  // 换行也会被保留
  let strDemo = `hello
  some        space here
  and new
  line here.`;
  console.log(strDemo);
}

console.clear();
// 模板字面量嵌套使用
// 模板字面量内支持表达式嵌套
function show() {
  return "example.com";
}

let address = `www.${show()}`;
console.log(address);
// www.example.com

// 标签模板实例操作
console.clear();
{
  let name = "kelvin";
  let age = 18;
  // 定义 tag
  console.log(tag`${name} is ${age} years old`);
  function tag(strings) {
    console.log(strings);
  }
}

console.clear();

// 字符串操作方法
let ps = document.querySelector("[name='password']");
ps.addEventListener("keyup", function () {
  this.value = this.value.trim();
  let span = document.getElementsByTagName("span");
  let error = "";
  if (this.value.length < 8) {
    error = "密码不能少于8位";
  }
  span[0].innerHTML = error;
});

// 电话号码处理
function phoneHandle(mobile, len = 3) {
  return String(mobile).slice(0, len * -1) + "*".repeat(len);
}
console.log(phoneHandle(18337382933, 4));

console.clear();

// 与字符创相关的类型转换
const string = "99";
console.log(typeof string);

// 隐式转换 使其 *1
console.log(string * 1 + 1);
// 100

// 构造方法类型转换
console.log(Number(string) + 1);
// 100

const number = 45;
console.log(typeof number);
// number

// 转换
let str_10 = number + "";
console.log(typeof str_10);
// String

console.log(String(number));
// string

// 字符串操作

// 字符串转义
console.clear();
// 字符串长度

{
  let str = "hello";
  console.log(str.length);
  // 5
}

console.clear();
{
  let str = "hell";
  // 索引方式, 没有找到字符返回`undefined`
  console.log(str[1]);
  // e
  console.log(str[10]);
  // undefined

  // charAt方法，已过时，找不到字符返回 `''` 空字符
  console.log(str.charAt(1));
  // e
  console.log(str.charAt(10));
  // ''
}
console.clear();
{
  let str = "hello";

  str[0] = "H";
  // `str`未被改变
  console.log(str);
  // hello
}

console.clear();
{
  str = "Hello World!";

  // 转换为小写
  console.log(str.toLowerCase());
  // hello world!

  // 转换为大写
  console.log(str.toUpperCase());
  // HELLO WORLD!
}
console.clear();
{
  str = "hello world! some words here.";

  // 返回查询目标出现的索引
  console.log(str.indexOf("llo"));
  // 2

  // 不存在在则返回 `-1`
  console.log(str.indexOf("notExists"));
  // -1

  // 从给定的起始位置开始检索
  console.log(str.indexOf("l", 4));
  // 9

  // 从后向前查询
  console.log(str.lastIndexOf("s"));
  // 22
}

console.clear();
{
  str = "this is a test word";
  console.log(str.includes("is"));
  // true
  console.log(str.startsWith("this"));
  // true
  console.log(str.endsWith("words"));
  // false
}

console.clear();
{
  str = "aVeryLongString";
  // `slice`方法
  // 不指定 `end`参数则会一直截取到最后
  console.log(str.slice(1));
  // VeryLongString

  // 指定区间
  console.log(str.slice(1, 5));
  // Very

  // 负值
  console.log(str.slice(-6, -1));
  // 9Strin

  // `str.substring(start [, end])`
  // 1. 与`slice`方法几乎相同，但允许 start 大于 end
  // 2. 不支持负参数，如果出现则视为 0；

  console.log(str.substring(1, 5));
  // Very
  console.log(str.substring(5, 1));
  // Very

  // 从str起取指定长度的字符串
  // `str.substr(start [, length])
  console.log(str.substr(5, 4));
  // Long
}

{
  // 示例，不常用，需要时进行查询

  console.log("a" > "b");
  // false
  console.log("z" > "a");
  // true

  // 小写字母总是大于大写字母
  console.log("a" > "Z");
  // true
}
console.clear();

{
  let str = "     hello word here some words    ";
  // 移除首尾空格
  console.table(str.trim());
  // hello word here some words

  let str1 = "love";
  console.log(str1.repeat(10));
  // lovelovelovelovelovelovelovelovelovelove

  // 可结合正则表达式，后续补充
  let str2 = "hello world";
  console.log(str2.replace("world", "Js"));
  // hello Js
}

// ------------------------
// --------------------------------- bool值转换
// ------------------------

console.clear();
{
  // 布尔值隐式转换
  let bool = true;
  console.log(typeof bool);

  console.log(1 == true);
  // true
  console.log(0 == false);
  // true
  console.log(99 == true);
  // false

  let num = 99;
  console.log(Boolean(num) == true);
  // true

  let negative_num = -99;
  console.log(typeof negative_num);
  // number
  console.log(Boolean(negative_num) == false);
  // false
  console.log(Boolean(negative_num).valueOf());
  // true
  console.clear();
  // 字符串布尔值转换
  let str = "1";
  console.log(str == true);
  // true
  let str0 = "0";
  console.log(str0 == false);
  // true

  str99 = "99";
  console.log(str99 == true);
  // false
  console.log(Boolean(str) == true);
  // true
}

console.clear();

// {
//   while (true) {
//     let age = prompt("age?").trim();
//     if (!age) continue;
//     console.log(age == "18" ? "true" : "false");
//     break;
//   }
// }

// ------------------------
// --------------------------------- Number数值类型
// ------------------------

{
  let number = 99;
  console.log(typeof number);
  // number
  console.log(Number.isInteger(number));
  // true

  let float = 99.99;
  console.log(Number.isInteger(float));
  // false
}

// NaN 类型  期待是一个数字而不是数字
console.clear();
{
  console.log(Number("hello"));
  // NaN

  console.log(10 / "hello");
  // NaN

  console.log(NaN == NaN);
  // false

  let numWithStr = "99years";
  console.log(Number(numWithStr));
  // NaN

  console.log(parseInt(numWithStr));
  // 99

  let num1 = "abc11def";
  console.log(parseInt(num1));
  // NaN

  let num2 = "33.88pound";
  console.log(parseFloat(num2));
  // 33.88
}
console.clear();

// 数学计算
{
  console.log(Math.max(1, 2, 3, 4, 5, 6, 7));
  // 7

  // 向下舍入
  console.log(Math.floor(3.9));
  // 3

  // 向上舍入
  console.log(Math.ceil(3.1));
  // 4

  // 四舍五入
  console.log(Math.round(3.4));
  // 3
  console.log(Math.round(3.6));
  // 4

  // 舍弃小数点后所有数据
  console.log(Math.trunc(3.343453454));
  // 3

  // 四舍五入到指定位数
  console.log((3.1415926).toFixed(2));
  // String: 3.14

  // Math.random()  0 <= ~ <1
  randomNum = Math.random().toFixed(1) * 10;
  console.log(randomNum);

  // 区间公式 min + Math.floor(Math.random() * (max - min + 1))
  rand = 1 + Math.floor(Math.random() * (10 - 1 + 1));
  console.log(rand);
}
