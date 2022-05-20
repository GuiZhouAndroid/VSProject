/*
 * @Author: 张松
 * @Date: 2022-05-20 13:40:58
 * @LastEditors: ZSAndroid
 * @LastEditTime: 2022-05-20 14:04:59
 * @FilePath: \VSProject\js\csdn\工厂方法创建对象.js
 * @Description:工厂方法创建对象
 * @Email：1210762604@qq.com
 * @Github：https://github.com/GuiZhouAndroid/VSProject
 * @Csdn：https://blog.csdn.net/qq_39038178
 * @版权声明：by 2022年 ZSAndroid,保留所有权利.
 */

// 使用工厂模式创建对象
function createPerson(name, age) {
  // 创建新的对象
  var obj = new Object();
  // 设置对象属性
  obj.name = name;
  obj.age = age;
  // 设置对象方法
  obj.sayName = function () {
    console.log(this.name);
  };
  //返回新的对象
  return obj;
}

for (var i = 1; i <= 1000; i++) {
  var person = createPerson('person' + i, 18);
  //创建的对象类型都是Object
  console.log(typeof person);
}
