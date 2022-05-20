/*
 * @Author: 张松
 * @Date: 2022-05-20 10:46:24
 * @LastEditors: ZSAndroid
 * @LastEditTime: 2022-05-20 11:05:41
 * @FilePath: \VSProject\js\csdn\创建对象+删除对象属性+遍历对象.js
 * @Description: 创建对象+删除对象属性+遍历对象
 * @Email：1210762604@qq.com
 * @Github：https://github.com/GuiZhouAndroid/VSProject
 * @Csdn：https://blog.csdn.net/qq_39038178
 * @版权声明：by 2022年 ZSAndroid,保留所有权利.
 */
//创建对象+删除对象

//方式一：
var person = new Object();
person.name = '张松1';
person.age = 24;
//打印person对象
console.log(person); //{ name: '张松1', age: 24 }
//删除person对象的name属性
delete person.name;
//打印删除name属性后的person对象
console.log(person); //{ age: 24 }
//方式二：
var person2 = { name: '张松2', age: 24 };
//打印person2对象
console.log(person2); //{ name: '张松2', age: 24 }
//访问person2对象属性
console.log(person2.name); //张松2
console.log(person2['name']); //张松2
console.log(person2.age); //24
console.log(person2['age']); //24

//遍历对象——>待遍历对象属性数量===========for循环次数
//var index 对象属性名，返回的是String类型的值
var student = { stuId: 10, stuNam: '李四' };
for (var index in student) {
  console.log(student[index]);
}
