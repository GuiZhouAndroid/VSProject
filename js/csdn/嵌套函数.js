/*
 * @Author: 张松
 * @Date: 2022-05-20 11:21:11
 * @LastEditors: ZSAndroid
 * @LastEditTime: 2022-05-20 11:30:43
 * @FilePath: \VSProject\js\csdn\嵌套函数.js
 * @Description: 嵌套函数
 * @Email：1210762604@qq.com
 * @Github：https://github.com/GuiZhouAndroid/VSProject
 * @Csdn：https://blog.csdn.net/qq_39038178
 * @版权声明：by 2022年 ZSAndroid,保留所有权利.
 */
// 嵌套函数：在函数中声明的函数就是嵌套函数，访问域：嵌套函数只能在当前函数中可以访问，在当前函数外无法访问。
function zs() {
  function myName() {
    console.log('我是张松');
  }
  myName(); //须在zs()函数内部中调用，外部无法调用
}
zs();

//对象中的函数
// 对象的属性值可以是任何的数据类型，也可以是个函数。
// 如果一个函数作为一个对象的属性保存，那么我们称这个函数是这个对象的方法，
// 调用这个函数就说调用对象的方法（method）
// 注意：方法和函数只是名称上的区别，没有其它别的区别
// 案例演示：

var person = {
  name: '张松',
  age: 18,
  sayZS: function () {
    console.log(this.name);
  },
};
person.sayZS();
