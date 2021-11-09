// 创建对象

var employee = {
  name: "张三",
  age: 20,
  position: "前端工程师",
  signIn: function () {
    console.log("张三打卡");
  },
};

var employee2 = new Object();
employee2.name = "李四";
employee2.age = 21;
employee2.position = "后端工程是";
employee2.signIn = function () {
  console.log("李四打卡");
};

// ---------------------------------
// ---------------------------------------- 对象属性
// ---------------------------------

console.log(employee.name);
// 张三
console.log(employee2.age);
// 21

// ---------------------------------
// ---------------------------------------- 对象方法
// ---------------------------------

console.log(employee.signIn());
// 张三打卡
// undefined

// ---------------------------------
// ---------------------------------------- 动态更新对象属性和方法
// ---------------------------------

employee.name = "网六";
console.log(employee.name);
// 网六

employee2["age"] = 25;
console.log(employee2.age);
// 25

employee.signIn = function () {
  console.log("下班了");
};
console.log(employee.signIn());

console.clear();

// ---------------------------------
// ---------------------------------------- 省略key
// ---------------------------------

{
  let name = "张三";
  let employee = {
    name,
    signIn() {
      console.log("张三又打卡了上班了");
    },
  };

  console.log(employee.name);
  console.log(employee.signIn());
}

console.clear();

// ---------------------------------
// ---------------------------------------- 遍历对象属性
// ---------------------------------

{
  let name = "张三";
  let employee = {
    name,
    age: 18,
    gender: "male",
    hobby: "basketball",
    signIn() {
      console.log("张三又打卡了上班了");
    },
  };

  console.log(Object.keys(employee));
  console.log(Object.values(employee));

  for (key in employee) {
    console.log(key);
  }
}

// ---------------------------------
// ---------------------------------------- 删除对象属性
// ---------------------------------

{
  let name = "张三";
  let employee = {
    name,
    age: 18,
    gender: "male",
    hobby: "basketball",
    signIn() {
      console.log("张三又打卡了上班了");
    },
  };

  // delete 方法
  delete employee.age;
  console.log(employee.age);
  // undefined
}

// ---------------------------------
// ---------------------------------------- 构造函数, 相当于python的类
// ---------------------------------

{
  function Employee(name, position) {
    this.name = name;
    this.position = position;
  }
}

var emp1 = new Employee("kelvin", "front end");
console.log(emp1);

console.clear();

// ---------------------------------
// ---------------------------------------- this
// ---------------------------------

{
  let emp3 = {
    name: "kelvin",
    age: 20,
    signIn() {
      // this 指向
      console.log(this.name + "打卡上班了");
    },
  };

  console.log(emp3.signIn());

  emp3.goToWork = function () {
    console.log(this.name + " go to work.");
  };

  emp3.goToWork();
  console.clear();
}

// ---------------------------------
// ---------------------------------------- getters  setters
// ---------------------------------

{
  let person = {
    firstName: "三",
    lastName: "张",

    // get 只读
    get fullName() {
      return this.lastName + this.firstName;
    },

    // set 只能接收一个参数
    set fullName(fullName) {
      let [lastName, firstName] = fullName.split(",");
      this.lastName = lastName;
      this.firstName = firstName;
    },
  };

  console.log(person.fullName);
}
