/**
 * 防抖函数ES6写法
 * @param {*} fn 被包装的防抖函数
 * @param {*} delay 频率间隔，ms
 * @returns
 */
function debounce(fn, delay) {
  let timer = null
  return function() {
    if(timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

/**
 * 防抖函数ES5写法
 * @param {*} fn 被包装的防抖函数
 * @param {*} delay 频率间隔，ms
 * @returns
 */
function debounce2(fn, delay) {
  var timer = null
  return function() {
    var context = this
    var args = arguments

    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function() {
      fn.apply(context, args)
    }, delay)
  }
}


/**
 * 节流函数es6写法
 * @param {*} fn 被包装的节流函数
 * @param {*} wait 执行频率
 * @returns
 */
function throttle(fn, wait) {
  let timer = null

  return function() {
    if(timer) return
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, wait)
  }
}

/**
 * 节流函数es5写法
 * @param {*} fn 被包装的节流函数
 * @param {*} wait 执行频率
 * @returns
 */
function throttle2(fn, wait) {
  var timer = null

  return function() {
    var context = this
    var args = arguments
    if(timer) return
    timer = setTimeout(function() {
      fn.apply(context, args)
      timer = null
    }, wait)
  }
}
