/*
 * @Author: 张松
 * @Date: 2022-05-20 09:24:48
 * @LastEditors: ZSAndroid
 * @LastEditTime: 2022-05-20 11:14:33
 * @FilePath: \VSProject\js\csdn\形参与实参.js
 * @Description: 形参与实参
 * @Email：1210762604@qq.com
 * @Github：https://github.com/GuiZhouAndroid/VSProject
 * @Csdn：https://blog.csdn.net/qq_39038178
 * @版权声明：by 2022年 ZSAndroid,保留所有权利.
 */

// 这里的5和2是实参
// js中，方法中即使定义了形参，调用时不传实参也不会报错
// 此处的num1，与num2便是形参
function addNum(num1, num2) {
  return num1 + num2;
}
// 计算5+2的值
console.info(addNum(5, 2));
