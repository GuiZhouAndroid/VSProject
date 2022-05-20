/*
 * @Author: 张松
 * @Date: 2022-05-20 09:24:48
 * @LastEditors: ZSAndroid
 * @LastEditTime: 2022-05-20 10:03:21
 * @FilePath: \VSProject\js\csdn\比较运算符.js
 * @Description: 比较运算符
 * @Email：1210762604@qq.com
 * @Github：https://github.com/GuiZhouAndroid/VSProject
 * @Csdn：https://blog.csdn.net/qq_39038178
 * @版权声明：by 2022年 ZSAndroid,保留所有权利.
 */

// JavaScript 8个比较运算符:

// >大于运算符
// < 小于运算符
// <=小于或等于运算符
// >=大于或等于运算符
// == 相等运算符
// === 严格相等运算符
// != 不相等运算符
// !== 严格不相等运算符

// 比较运算符用来比较两个值是否相等，如果相等会返回true，否则返回false。

// 使用 == 来做相等运算
//    当使用==来比较两个值时，如果值的类型不同，则会自动进行类型转换，将其转换为相同的类型，然后在比较
// 使用 != 来做不相等运算
//     不相等用来判断两个值是否不相等，如果不相等返回true，否则返回false，
//     不相等也会对变量进行自动的类型转换，如果转换后相等它也会返回false
// 使用 === 来做全等运算
//     用来判断两个值是否全等，它和相等类似，不同的是它不会做自动的类型转换，如果两个值的类型不同
//     直接返回false
// 使用 !== 来做不全等运算
//     用来判断两个值是否不全等，它和不等类似，不同的是它不会做自动的类型转换，如果两个值的类型不同，
//     直接返回true

// 小于运算符:
// 小于运算符 < ，只有当左操作数小于右操作数时才返回 true。
// 示例：
console.log(5 < 1); // false
console.log(5 < 5); // false
console.log(5 < 10); // true
console.log(5 < '5'); // false

// 小于等于运算符:
// 小于运算符 < ，只有当左操作数小于或者等于右操作数时才返回 true。
// 示例：
console.log(5 <= 1); // false
console.log(5 <= 5); // true
console.log(5 <= 10); // true
console.log(5 <= '5'); // true

// 大于等于运算符:
// 大于等于运算符 >= ，只有当左操作数大于或者等于右操作数时才返回 true。
// 示例：
console.log(5 >= 1); // true
console.log(5 >= 5); // true
console.log(5 >= 10); // false
console.log(5 >= '5'); // true

// 相等运算符:
// 相等运算符 ==会为两个不同类型的操作数转换类型，然后进行严格比较。
// 示例：
console.log(1 == 1); // true
console.log(1 == 2); // false
console.log(1 == true); // true
console.log(1 == '1'); // true

// 严格相等运算符:
// 严格相等运算符===不会对操作数进行类型转换，只有当值相等并且类型也是相等时才会返回 true。
// 示例：
console.log(1 === 1); // true
console.log(1 === 2); // false
console.log(1 === true); // false
console.log(1 === false); // false
console.log(1 === '1'); // false

// 不等运算符:
// 不等运算符！=只有当操作数不相等时才返回true，如果两操作数不是同一类型，会将操作数转为同意类型再进行比较。
// 示例：
var a = 1;
var b = 2;
var c = '1';
console.log(a != 1); // false
console.log(a != b); // true
console.log(a != c); // false

// 严格不等运算符:
// 严格不等运算符!==当操作数不相等或不同类型时返回 true。
// 示例：
var a = 1;
var b = 2;
var c = '1';
console.log(a !== 1); // false
console.log(a !== b); // true
console.log(a !== c); // true
