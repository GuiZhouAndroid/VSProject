/*
 * @Author: 张松
 * @Date: 2022-07-14 15:53:17
 * @LastEditors: ZSAndroid
 * @LastEditTime: 2022-07-14 16:55:46
 * @FilePath: \VSProject\js\csdn\东华项目json转换.js
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

//工厂模式创建对象
function createObj(
  id,
  dimensionType,
  dimensionCode,
  dimensionName,
  defaultQueryValue,
  dimensionDesc,
  createUserId,
  updateUserId,
  createTime,
  updateTime
) {
  var o = new Object();
  o.id = id;
  o.dimensionType = dimensionType;
  o.dimensionCode = dimensionCode;
  o.dimensionName = dimensionName;
  o.defaultQueryValue = defaultQueryValue;
  o.dimensionDesc = dimensionDesc;
  o.createUserId = createUserId;
  o.updateUserId = updateUserId;
  o.createTime = createTime;
  o.updateTime = updateTime;
  return o;
}
var dimension = createObj(
  '309534692782149',
  '维度类型',
  '维度码',
  '维度名称',
  '默认查询值',
  '维度描述',
  '创建人id',
  '更新人id',
  '维度创建时间',
  '维度更新时间'
);

//遍历打印工厂模式创建的对象属性和值
function consoleObj(obj) {
  var str = '';
  for (var item in obj) {
    str += item + ':' + obj[item] + '\n';
  }
  console.log(str);
}
//调用遍历打印
consoleObj(dimension);

//创建map
var mapObj = new Map([
  ['id', 95],
  ['mappingAssetsPath', 'C://System//Windows/....'],
  ['cvCatalogueId', 85],
]);

//创建map元素，添加到listObj中
//元素1
var mapToListObj1 = new Map([
  ['id', 1101],
  ['cvCatalogueId', 11],
  ['cvCode', 01],
  ['cvValue', '列表维度'],
  ['cvParentId', '282174972'],
  ['cvDesc', '码值表描述'],
  ['enabled', 1],
]);
//元素2
var mapToListObj2 = new Map([
  ['id', 1102],
  ['cvCatalogueId', 12],
  ['cvCode', 03],
  ['cvValue', '文本维度'],
  ['cvParentId', ''],
  ['cvDesc', '码值表描述1'],
  ['enabled', 0],
]);

//创建list
var listObj = [mapChangeObj(mapToListObj1), mapChangeObj(mapToListObj2)];

//汇总的map
var mapListObj = new Map([
  ['dmDimension', dimension],
  ['mappingMap', mapChangeObj(mapObj)],
  ['mdCodeValueList', listObj],
]);
//汇总map转json对象
var jsonObj = mapChangeObj(mapListObj);
console.log(jsonObj);
//jsonObj转json字符串
console.log(JSON.stringify(jsonObj));
