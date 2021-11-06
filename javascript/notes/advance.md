# JavaScript

## 字符串操作方法

### 字符转义`\`

1. `\n` 换行
2. `\'`, `\"` 换行
3. `\\`, 反斜杠
4. `\t`, 制表符

### 字符串长度

```javascript
let str = "hello";
console.log(str.length);
// 5
```

### 访问字符

```javascript
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
```

### 字符串是不变数据类型

```javascript
let str = "hello";

str[0] = "H";
// `str`未被改变
console.log(str);
// hello
```

### 大小写转换

```javascript
str = "Hello World!";

// 转换为小写
console.log(str.toLowerCase());
// hello world!

// 转换为大写
console.log(str.toUpperCase());
// HELLO WORLD!
```

### 查找字符串

#### `str.indexOf`

```javascript
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
```

#### `includes`, `startsWith`, `endsWith`

```javascript
str = "this is a test word";
console.log(str.includes("is"));
// true
console.log(str.startsWith("this"));
// true
console.log(str.endsWith("words"));
// false
```

### 获取字符串

```javascript
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
// Strin

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
```

### 字符串比较

```javascript
// 示例，不常用，需要时进行查询

console.log("a" > "b");
// false
console.log("z" > "a");
// true

// 小写字母总是大于大写字母
console.log("a" > "Z");
// true
```

### 其他有用的字符串方法

```javascript
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
```

## 布尔值转换

```javascript
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
```

## Number 数据类型

```javascript
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
```

### NaN

```javascript
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
```

## 时间处理

```javascript
{
  const date = new Date();
  console.log(date);
  console.log(typeof date);
  // object

  console.log(date * 1);
  // 返回时间戳

  const da = Date();
  console.log(da);
  console.log(typeof da);
  // string

  // 直接获取时间戳
  console.log(Date.now());

  const start = Date.now();

  for (let i = 0; i < 200000000; i++) {}

  const end = Date.now();
  console.log(end - start);
  // 返回毫秒
  console.log(((end - start) / 1000).toFixed(2) + " seconds");
  // 转换为秒

  // 时间类型转换为时间戳
  console.log(date * 1);
  console.log(Number(date));
  console.log(date.valueOf());
  console.log(date.getTime());

  // 转换为ISO时间
  const timeStamp = date.valueOf();
  console.log(new Date(timeStamp));
  // Wed Oct 27 2021 19:53:10 GMT+0800 (中国标准时间)
}
console.clear();
{
  // 日期封装函数
  const date = new Date(1999, 1, 12, 22, 10, 00);
  console.log(date.getTime());
  // 918828600000
  console.log(date.getFullYear());
  // 1999
  console.log(date.getMonth());
  // 1
  console.log(date.getDate());
  // 12
  console.log(date.getHours());
  // 22
  console.log(date.getMinutes());
  // 10
  console.log(date.getSeconds());
  // 0

  function dateFormat(date, format = "YYYY-MM-DD HH:mm:ss") {
    const config = {
      YYYY: date.getFullYear(),
      MM: date.getMonth(),
      DD: date.getDate(),
      HH: date.getHours(),
      mm: date.getMinutes(),
      ss: date.getSeconds(),
    };
    for (const key in config) {
      format = format.replace(key, config[key]);
      console.log(format);
      console.log(key);
    }
    return format;
  }
  console.log(dateFormat(date));
}
```

### 一些时间处理的 js 库

1. momentjs [momentjs](http://momentjs.cn/)
