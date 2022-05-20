/*
 * @Author: 张松
 * @Date: 2022-05-20 14:44:41
 * @LastEditors: ZSAndroid
 * @LastEditTime: 2022-05-20 14:47:31
 * @FilePath: \VSProject\js\csdn\hasOwnProperty检查当前的对象和属性.js
 * @Description: hasOwnProperty检查当前的对象和属性
 * @Email：1210762604@qq.com
 * @Github：https://github.com/GuiZhouAndroid/VSProject
 * @Csdn：https://blog.csdn.net/qq_39038178
 * @版权声明：by 2022年 ZSAndroid,保留所有权利.
 */

// ? 使用in——————>检查自身对象+自身对象的原型
// 创造一个构造函数
function MyClass() {}

// 向MyClass的原型中添加一个name属性
MyClass.prototype.name = '我是原型中的名字';

// 创建一个MyClass的实例
var mc = new MyClass();
mc.age = 18;

// 使用in检查对象中是否含有某个属性时，如果对象中没有但是原型中有，也会返回true
console.log('age' in mc);
console.log('name' in mc);

//?使用hasOwnProperty——————>只检查自身对象是否含有某个方法或属性
// 创造一个构造函数
function MyClass() {}

// 向MyClass的原型中添加一个name属性
MyClass.prototype.name = '我是原型中的名字';

// 创建一个MyClass的实例
var mc = new MyClass();
mc.age = 18;

// 使用in检查对象中是否含有某个属性时，如果对象中没有但是原型中有，也会返回true
console.log('age' in mc);
console.log('name' in mc);

// 可以使用对象的hasOwnProperty()来检查对象自身中是否含有该属性，使用该方法只有当对象自身中含有属性时，才会返回true
console.log(mc.hasOwnProperty('age'));
console.log(mc.hasOwnProperty('name'));

//MyClass类对象中没有hasOwnProperty这个方法是原型中的在执行方法的时候它会通过原型链进行查找，这个方法是Object的特有方法
// 如下代码演示：
// 创造一个构造函数
function MyClass() {}

// 向MyClass的原型中添加一个name属性
MyClass.prototype.name = '我是原型中的名字';

// 创建一个MyClass的实例
var mc = new MyClass();
mc.age = 18;

// 检查当前对象
console.log(mc.hasOwnProperty('hasOwnProperty'));
// 检查当前对象的原型对象
console.log(mc.__proto__.hasOwnProperty('hasOwnProperty'));
// 检查当前对象的原型对象的原型对象
console.log(mc.__proto__.__proto__.hasOwnProperty('hasOwnProperty'));
