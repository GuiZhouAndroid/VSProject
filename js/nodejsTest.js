/*
 * @Author: 张松
 * @Date: 2022-05-09 19:58:11
 * @LastEditors: ZSAndroid
 * @LastEditTime: 2022-05-09 20:22:24
 * @FilePath: \VSProject\JavaScript\nodejsTest.js
 * @Description:代码测试Node安装环境，cmd输入“node nodejsTest.js”,浏览器访问“http://127.0.0.1:8808”，关闭终端cmd窗口服务结束
 * @email：1210762604@qq.com
 * @github：https://github.com/GuiZhouAndroid/VSProject
 * @csdn：https://blog.csdn.net/qq_39038178
 * @版权声明：by 2022年 ZSAndroid,保留所有权利.
 */
var http = require('http')
http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })

    res.end('Hello World\n')
  })
  .listen(8808, '127.0.0.1')
console.log('Server running at http://127.0.0.1:8808')
