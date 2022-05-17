/*
 * @Author: 张松
 * @Date: 2022-05-16 12:20:54
 * @LastEditors: ZSAndroid
 * @LastEditTime: 2022-05-17 17:21:27
 * @FilePath: \VSProject\js\csdn\arguments对象求一组参数的总和.js
 * @Description: arguments对象求一组参数的总和
 * @email：1210762604@qq.com
 * @github：https://github.com/GuiZhouAndroid/VSProject
 * @csdn：https://blog.csdn.net/qq_39038178
 * @版权声明：by 2022年 ZSAndroid,保留所有权利.
 */
// arguments它是函数一创建就有的
// 是一个类数组（并不是真正的数组）
// 方法调用时，可以得到所有传进来的参数
// 你传多少，我就能拿到多少

// function fn() {
//   console.log(arguments)
// }

fn = function () {
  console.log(arguments);
};
//[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }

function fn() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  // 返回 sum
  return sum;
}
let allSum = fn(1, 2, 3, 4);
console.log(allSum); // 得到10
