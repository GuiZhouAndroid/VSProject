/*
 * @Author: 张松
 * @Date: 2022-05-09 17:31:12
 * @LastEditors: ZSAndroid
 * @LastEditTime: 2022-05-09 18:28:15
 * @FilePath: \VSProject\JavaScript\test.js
 * @Description:
 * @email：1210762604@qq.com
 * @github：https://github.com/GuiZhouAndroid/VSProject
 * @csdn：https://blog.csdn.net/qq_39038178
 * @版权声明：by 2022年 ZSAndroid,保留所有权利.
 */
// const a = 1
// console.log('🚀 ~ file: test.js ~ line 14 ~ a', a)
// 我们自己的函数库（工具函数）

// 判断数组中是否有某个值
function has(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return true
    }
  }
  return false
}

// 根据传入的key返回对应的参数值
function getQueryString(url, key) {
  if (!key) {
    return ''
  }
  var reg = new RegExp('[?&]' + key + '=([^&=]*)', 'g')
  reg.test(url) // 执行一次匹配，自动缓存分组匹配到的内容
  return RegExp.$1
}

// 生成指定区间的随机整数
function randomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

// 随机生成十六进制颜色
function randomColor() {
  var color = '#'
  var str = '0123456789abcdef' // 长度16 索引0-15
  for (var i = 0; i < 6; i++) {
    // 每次循环时,生成一个0-15的随机整数,作为索引
    var index = randomInt(0, 15)
    color += str[index] // 与#号拼接
  }
  return color
}

// 随机生成x位验证码
function randomCode(x) {
  x = x || 6 // 设置参数默认值为 6
  var code = ''
  // 循环执行一次,生成一个随机字符
  for (var i = 0; i < x; i++) {
    do {
      // 先生成随机整数,再判断是否在合法范围内
      var num = randomInt(48, 122) // 随机整数
    } while ((num >= 58 && num <= 64) || (num >= 91 && num <= 96))
    var str = String.fromCharCode(num) // 根据随机整数转成对应字符
    code += str // 字符串拼接
  }
  return code // 返回值
}

// 封装获取元素的函数
function $1(selector) {
  // 返回单个元素
  return document.querySelector(selector)
}
function $2(selector) {
  // 返回元素集合
  return document.querySelectorAll(selector)
}
function $(selector) {
  // 可以返回单个元素或元素集合
  var dom = document.querySelectorAll(selector) // 元素集合
  if (dom === null) {
    // 当前要获取的元素不存在
    return null
  }
  if (dom.length > 1) {
    // 获取到多个元素
    return dom
  } else {
    // 获取到一个元素
    return dom[0]
  }
}

// 获取dom元素到页面的距离（body的距离）
function offset(dom) {
  var offset_left = 0 - dom.clientLeft
  var offset_top = 0 - dom.clientTop
  // 将dom的左边框和offsetLeft + 它定位父级的左边框和offsetLeft 。。。
  while (dom) {
    offset_left += dom.clientLeft + dom.offsetLeft
    offset_top += dom.clientTop + dom.offsetTop
    dom = dom.offsetParent
  }
  return { left: offset_left, top: offset_top }
}

// 添加事件监听（兼容低本版IE）
function addEvent(dom, type, callback) {
  if (dom.addEventListener) {
    dom.addEventListener(type, callback)
  } else {
    dom.attachEvent('on' + type, callback)
  }
}

// 移除事件监听（兼容低本版IE）
function removeEvent(dom, type, callback) {
  if (dom.removeEventListener) {
    dom.removeEventListener(type, callback)
  } else {
    dom.detachEvent('on' + type, callback)
  }
}
