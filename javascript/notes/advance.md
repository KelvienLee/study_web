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
