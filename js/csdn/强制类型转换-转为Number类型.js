/*
 * @Author: 张松
 * @Date: 2022-05-20 09:33:39
 * @LastEditors: ZSAndroid
 * @LastEditTime: 2022-05-20 10:43:32
 * @FilePath: \VSProject\js\csdn\强制类型转换-转为Number类型.js
 * @Description: 转换为Number类型
 * @Email：1210762604@qq.com
 * @Github：https://github.com/GuiZhouAndroid/VSProject
 * @Csdn：https://blog.csdn.net/qq_39038178
 * @版权声明：by 2022年 ZSAndroid,保留所有权利.
 */

// 非数值转换为数值：Number()、parseInt() 和parseFloat()。
// Number()可以用来转换任意类型的数据，而后两者只能用于转换字符串。
// parseInt()只会将字符串转换为整数，而parseFloat()可以将字符串转换为浮点数。
// 注意：如果对非String使用parseInt()或parseFloat()，它会先将其转换为String然后在操作

// 方式一：Number()函数
//? 字符串 --> 数字
//    #如果是纯数字的字符串，则直接将其转换为数字
//    #如果字符串中有非数字的内容，则转换为NaN
//    #如果字符串是一个空串或者是一个全是空格的字符串，则转换为0
//? 布尔 --> 数字
//    #true 转成 1
//    #false 转成 0
//? null --> 数字undefined --> 数字
//    #null 转成 0
//? undefined --> 数字
//    #undefined 转成 NaN
// 方式二：这种方式专门用来对付字符串，parseInt() 把一个字符串转换为一个整数
var a = '123';
a = parseInt(a);
console.log(a);
console.log(typeof a);
// 方式三：这种方式专门用来对付字符串，parseFloat() 把一个字符串转换为一个浮点数
var a = '123.456';
a = parseFloat(a);
console.log(a);
console.log(typeof a);
