/*
 * @Author: 张松
 * @Date: 2022-05-20 11:29:27
 * @LastEditors: ZSAndroid
 * @LastEditTime: 2022-05-20 14:16:02
 * @FilePath: \VSProject\js\csdn\this对象.js
 * @Description: this对象
 * @Email：1210762604@qq.com
 * @Github：https://github.com/GuiZhouAndroid/VSProject
 * @Csdn：https://blog.csdn.net/qq_39038178
 * @版权声明：by 2022年 ZSAndroid,保留所有权利.
 */
// 解析器在调用函数每次都会向函数内部传递进一个隐含的参数，这个隐含的参数就是this，
// this指向的是一个对象，这个对象我们称为函数执行的上下文对象，
// 根据函数的调用方式的不同，this会指向不同的对象
// 以函数的形式调用时，this永远都是window
// 以方法的形式调用时，this就是调用方法的那个对象
// 以构造函数的形式调用时，this就是新创建的那个对象
// 案例演示：
//创建一个全局变量name
var name = '全局变量name';

//创建一个函数
function fun() {
  console.log(this.name);
}

//创建一个对象
var obj = {
  name: '张松',
  sayName: fun,
};

//我们希望调用obj.sayName()时可以输出obj的名字而不是全局变量name的名字
obj.sayName();
