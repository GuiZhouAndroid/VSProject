/*
 * @Author: 张松
 * @Date: 2022-05-16 12:20:54
 * @LastEditors: ZSAndroid
 * @LastEditTime: 2022-05-16 12:27:45
 * @FilePath: \VSProject\js\csdn\js函数内置arguments对象.js
 * @Description: arguments
 * @email：1210762604@qq.com
 * @github：https://github.com/GuiZhouAndroid/VSProject
 * @csdn：https://blog.csdn.net/qq_39038178
 * @版权声明：by 2022年 ZSAndroid,保留所有权利.
 */
// arguments它是函数一创建就有的
// 是一个类数组（并不是真正的数组）
// 方法调用时，可以得到所有传进来的参数
// 你传多少，我就能拿到多少

function fn() {
  console.log(arguments)
}
fn(1, 2, 3, 4) //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
