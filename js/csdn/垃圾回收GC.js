/*
 * @Author: 张松
 * @Date: 2022-05-20 15:12:11
 * @LastEditors: ZSAndroid
 * @LastEditTime: 2022-05-20 15:12:22
 * @FilePath: \VSProject\js\csdn\垃圾回收GC.js
 * @Description: 垃圾回收GC
 * @Email：1210762604@qq.com
 * @Github：https://github.com/GuiZhouAndroid/VSProject
 * @Csdn：https://blog.csdn.net/qq_39038178
 * @版权声明：by 2022年 ZSAndroid,保留所有权利.
 */
// 在JS中拥有自动的垃圾回收机制，会自动将这些垃圾对象从内存中销毁，
// 我们不需要也不能进行垃圾回收的操作，需要做的只是要将不再使用的对象设置null即可。

// 使用构造函数来创建对象
function Person(name, age) {
  // 设置对象的属性
  this.name = name;
  this.age = age;
}

var person1 = new Person('孙悟空', 18);
var person2 = new Person('猪八戒', 19);
var person3 = new Person('沙和尚', 20);

person1 = null;
person2 = null;
person3 = null;
