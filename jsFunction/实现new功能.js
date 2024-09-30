/*
 * File Created: Tuesday, 14th March 2023 5:02:13 pm
 * Author: hotsuitor (hotsuitor@qq.com)
 * -----
 * Last Modified: Tuesday, 14th March 2023 5:08:14 pm
 * Modified By: hotsuitor (hotsuitor@qq.com>)
 */

function newFn(...args) {
  const constructor = args.shift() // 获取第一个参数，要new的函数
  const obj = Object.create(constructor.prototype) // 创建一个空对象
  const result = constructor.apply(obj, args) // 修改this指向空对象，传入参数
  return typeof result === 'object' && result !== null ? result : obj
}

function Person(name) {
  this.name = name
}


let p1 = newFn(Person, 'Lisa')
let p2 = newFn(Person, 'Jery')
console.log(p1.name) // Lisa
console.log(p2.name) // Jery
