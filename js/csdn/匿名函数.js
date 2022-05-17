/*
 * @Author: 张松
 * @Date: 2022-05-17 14:29:26
 * @LastEditors: ZSAndroid
 * @LastEditTime: 2022-05-17 14:39:42
 * @FilePath: \VSProject\js\csdn\匿名函数.js
 * @Description:匿名函数与自执行
 * @Email：1210762604@qq.com
 * @Github：https://github.com/GuiZhouAndroid/VSProject
 * @Csdn：https://blog.csdn.net/qq_39038178
 * @版权声明：by 2022年 ZSAndroid,保留所有权利.
 */

// ? 匿名函数：指的是没有名字的函数

(function () {
  //由于没有执行该匿名函数，所以不会执行匿名函数体内的语句。
  console.log('不会执行');
}); //————————————————————————————>自自行加()即可
(function () {
  console.log('会执行'); // 此处会打印]
})();
