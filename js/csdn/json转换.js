/*
 * @Author: 张松
 * @Date: 2022-07-14 11:01:05
 * @LastEditors: ZSAndroid
 * @LastEditTime: 2022-07-14 15:49:22
 * @FilePath: \VSProject\js\csdn\json转换.js
 * @Description:
 * @Email：1210762604@qq.com
 * @Github：https://github.com/GuiZhouAndroid/VSProject
 * @Csdn：https://blog.csdn.net/qq_39038178
 * @版权声明：by 2022年 ZSAndroid,保留所有权利.
 */
//遍历map返回json对象
const mapChangeObj = (map) => {
  let obj = {};
  for (let [k, v] of map) {
    obj[k] = v;
  }
  return obj;
};
//创建map
var mapObj = new Map([
  ['Michael', 95],
  ['Bob', 75],
  ['Tracy', 85],
]);
//创建list
var listObj = [
  'JavaScript',
  'C++',
  'Python',
  'Html',
  'CSS',
  'Spring',
  'Android',
];

var mapListObj = new Map([
  ['Michael', listObj],
  ['Bob', 75],
  ['Tracy', 85],
]);

//遍历map集合
mapObj.forEach((value, key) => {
  console.log(key, '=>', value);
});

console.log(mapChangeObj(mapObj));
console.log(JSON.stringify(mapChangeObj(mapObj)));
console.log(listObj);
console.log(JSON.stringify(listObj));

console.log(mapChangeObj(mapListObj));
console.log(JSON.stringify(mapChangeObj(mapListObj)));
