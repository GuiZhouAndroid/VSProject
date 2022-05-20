/*
 * @Author: 张松
 * @Date: 2022-05-20 14:58:27
 * @LastEditors: ZSAndroid
 * @LastEditTime: 2022-05-20 15:10:54
 * @FilePath: \VSProject\js\csdn\对象继承.js
 * @Description: 对象继承
 * @Email：1210762604@qq.com
 * @Github：https://github.com/GuiZhouAndroid/VSProject
 * @Csdn：https://blog.csdn.net/qq_39038178
 * @版权声明：by 2022年 ZSAndroid,保留所有权利.
 */
// 实现继承有一个最大的好处就是子对象可以使用父对象的属性和方法，从而简化了一些代码
// JavaScript有六种非常经典的对象继承方式，但是我们只学习前三种：
// ?原型链继承
// ?借用构造函数继承
// !组合继承（重要）
// 原型式继承
// 寄生式继承
// 寄生组合式继承

// #（1）原型链继承
// 核心思想： 子类型的原型为父类型的一个实例对象

// 基本做法：
// 1.定义父类型构造函数
// 2.给父类型的原型添加方法
// 3.定义子类型的构造函数
// 4.创建父类型的对象赋值给子类型的原型
// 5.将子类型原型的构造属性设置为子类型
// 6.给子类型原型添加方法
// 7.创建子类型的对象: 可以调用父类型的方法

//缺点：
// 1.原型链继承多个实例的引用类型属性指向相同，一个实例修改了原型属性，另一个实例的原型属性也会被修改
// 2.不能传递参数
// 3、继承单一

// 定义父类型构造函数
function SupperType() {
  this.supProp = 'Supper property';
}

// 给父类型的原型添加方法
SupperType.prototype.showSupperProp = function () {
  console.log(this.supProp);
};

// 定义子类型的构造函数
function SubType() {
  this.subProp = 'Sub property';
}

// 创建父类型的对象赋值给子类型的原型
SubType.prototype = new SupperType();

// 将子类型原型的构造属性设置为子类型
SubType.prototype.constructor = SubType;

// 给子类型原型添加方法
SubType.prototype.showSubProp = function () {
  console.log(this.subProp);
};

// 创建子类型的对象: 可以调用父类型的方法
var subType = new SubType();
subType.showSupperProp();
subType.showSubProp();

// #（2）借用构造函数继承
// 核心思想： 使用.call()和.apply()将父类构造函数引入子类函数，使用父类的构造函数来增强子类实例，
//            等同于复制父类的实例给子类
// 基本做法：
// 1.定义父类型构造函数
// 2.定义子类型的构造函数
// 3.给子类型的原型添加方法
// 4.创建子类型的对象然后调用

// 缺点描述：
// 1.只能继承父类的实例属性和方法，不能继承原型属性和方法
// 2.无法实现构造函数的复用，每个子类都有父类实例函数的副本，影响性能，代码会臃肿
// 案例演示：
// 借用构造函数继承的重点就在于SuperType**.call(this, name)**，调用了SuperType构造函数，这样，
// SubType的每个实例都会将SuperType中的属性复制一份。
// 定义父类型构造函数
function SuperType(name) {
  this.name = name;
  this.showSupperName = function () {
    console.log(this.name);
  };
}

// 定义子类型的构造函数
function SubType(name, age) {
  // 在子类型中调用call方法继承自SuperType
  SuperType.call(this, name);
  this.age = age;
}

// 给子类型的原型添加方法
SubType.prototype.showSubName = function () {
  console.log(this.name);
};

// 创建子类型的对象然后调用
var subType = new SubType('孙悟空', 20);
subType.showSupperName();
subType.showSubName();
console.log(subType.name);
console.log(subType.age);

// #（3）组合继承——注意：这个方法是JavaScript中最常用的继承模式。
// 核心思想： 原型链+借用构造函数的组合继承

// 基本做法：
// 1.利用原型链实现对父类型对象的方法继承
// 2.利用super()借用父类型构建函数初始化相同属性

// 缺点描述：
// 父类中的实例属性和方法既存在于子类的实例中，又存在于子类的原型中，不过仅是内存占用，
// 因此，在使用子类创建实例对象时，其原型中会存在两份相同的属性和方法 。

//案例演示：
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.setName = function (name) {
  this.name = name;
};

function Student(name, age, price) {
  Person.call(this, name, age); // 为了得到父类型的实例属性和方法
  this.price = price; // 添加子类型私有的属性
}

Student.prototype = new Person(); // 为了得到父类型的原型属性和方法
Student.prototype.constructor = Student; // 修正constructor属性指向
Student.prototype.setPrice = function (price) {
  // 添加子类型私有的方法
  this.price = price;
};

var s = new Student('孙悟空', 24, 15000);
console.log(s.name, s.age, s.price);
s.setName('猪八戒');
s.setPrice(16000);
console.log(s.name, s.age, s.price);
