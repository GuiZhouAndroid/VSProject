/*
 * @Author: 张松
 * @Date: 2022-05-20 14:21:35
 * @LastEditors: ZSAndroid
 * @LastEditTime: 2022-05-20 14:36:19
 * @FilePath: \VSProject\js\csdn\原型对象prototype扩展函数与属性.js
 * @Description: 原型对象prototype扩展函数与属性
 * @Email：1210762604@qq.com
 * @Github：https://github.com/GuiZhouAndroid/VSProject
 * @Csdn：https://blog.csdn.net/qq_39038178
 * @版权声明：by 2022年 ZSAndroid,保留所有权利.
 */
// 使用构造函数来创建对象

function Person(name, age) {
  // 设置对象的属性
  this.name = name;
  this.age = age;
}
// 在Person类的原型对象中添加方法，只在Person这个类的全局对象中添加一个函数
Person.prototype.sayName = function () {
  console.log(this.name);
};
var person1 = new Person('张松1', 18);
var person2 = new Person('张松2', 19);
var person3 = new Person('张松3', 20);

person1.sayName();
person2.sayName();
person3.sayName();

// ? 原型与原型链，注意：Object对象是所有对象的祖宗，Object的原型对象指向为null，也就是没有原型对象
// !（1）原型
// 那原型（prototype）到底是什么呢？
// 我们所创建的每一个函数，解析器都会向函数中添加一个属性prototype，这个属性对应着一个对象
// 这个对象就是我们所谓的原型对象，即显式原型，原型对象就相当于一个公共的区域，
// 所有同一个类的实例都可以访问到这个原型对象我们可以将对象中共有的内容，统一设置到原型对象中。
// 如果函数作为普通函数调用prototype没有任何作用，当函数以构造函数的形式调用时
// 它所创建的对象中都会有一个隐含的属性，指向该构造函数的原型对象，我们可以通过__proto__（隐式原型）来访问该属性。当我们访问对象的一个属性或方法时，它会先在对象自身中寻找，如果有则直接使用，如果没有则会去原型对象中寻找，如果找到则直接使用。
// 以后我们创建构造函数时，可以将这些对象共有的属性和方法，统一添加到构造函数的原型对象中，
// 这样不用分别为每一个对象添加，也不会影响到全局作用域，就可以使每个对象都具有这些属性和方法了。

// !（2）原型链
// 访问一个对象的属性时，先在自身属性中查找，找到返回， 如果没有，再沿着__proto__这条链向上查找，
// 找到返回，如果最终没找到，返回undefined，这就是原型链，又称隐式原型链，它的作用就是查找对象的属性(方法)。
