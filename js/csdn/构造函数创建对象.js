/*
 * @Author: 张松
 * @Date: 2022-05-20 14:04:06
 * @LastEditors: ZSAndroid
 * @LastEditTime: 2022-05-20 14:16:28
 * @FilePath: \VSProject\js\csdn\构造函数创建对象.js
 * @Description:构造函数创建对象
 * @Email：1210762604@qq.com
 * @Github：https://github.com/GuiZhouAndroid/VSProject
 * @Csdn：https://blog.csdn.net/qq_39038178
 * @版权声明：by 2022年 ZSAndroid,保留所有权利.
 */

// 使用构造函数来创建对象的过程
// 1.调用构造函数，它会立刻创建一个新的对象
// 2.将新建的对象设置为函数中this，在构造函数中可以使用this来引用新建的对象
// 3.逐行执行函数中的代码
// 4.将新建的对象作为返回值返回

// 使用同一个构造函数创建的对象，我们称为一类对象，也将一个构造函数称为一个类。
// 将通过一个构造函数创建的对象，称为是该类的实例。
function Person(name, age) {
  // 设置对象的属性
  this.name = name;
  this.age = age;
  // 设置对象的方法
  this.sayName = function () {
    console.log(this.name);
  };
}

var person1 = new Person('张松1', 18);
var person2 = new Person('张松2', 19);
var person3 = new Person('张松3', 20);

console.log(person1);
console.log(person2);
console.log(person3);

//使用instanceof运算符检查一个对象是否是一个类的实例，它返回true或false
console.log(person1 instanceof Person); //true
