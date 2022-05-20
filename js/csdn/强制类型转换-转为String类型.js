/*
 * @Author: 张松
 * @Date: 2022-05-20 09:24:48
 * @LastEditors: ZSAndroid
 * @LastEditTime: 2022-05-20 09:33:00
 * @FilePath: \VSProject\js\csdn\强制类型转换-转为String类型.js
 * @Description: 强制类型转换
 * @Email：1210762604@qq.com
 * @Github：https://github.com/GuiZhouAndroid/VSProject
 * @Csdn：https://blog.csdn.net/qq_39038178
 * @版权声明：by 2022年 ZSAndroid,保留所有权利.
 */
// 方式一：
// 调用被转换数据类型的toString()方法，该方法不会影响到原变量
// 它会将转换的结果返回，但是注意：null和undefined这两个值没有toString()方法
// 如果调用它们的方法，会报错。
var a = 123;
a = a.toString();
console.log(a);
console.log(typeof a);

// 方式二：
// 调用String()函数，并将被转换的数据作为参数传递给函数，使用String()函数做强制类型转换时
// 对于Number和Boolean实际上就是调用的toString()方法
// 但是对于null和undefined，就不会调用toString()方法，
// 它会将 null 直接转换为 “null”，将 undefined 直接转换为 “undefined”。
var x = 456;
x = String(x);
console.log(x);
console.log(typeof x);

var b = undefined;
b = String(b);
console.log(b);
console.log(typeof b);

var c = null;
c = String(c);
console.log(c);
console.log(typeof c);

// 方式三：为任意的数据类型 +""
var y = 789;
y = y + '';
console.log(y);
console.log(typeof y);
