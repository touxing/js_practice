/*
 * File Created: Tuesday, 14th March 2023 3:35:04 pm
 * Author: hotsuitor (hotsuitor@qq.com)
 * -----
 * Last Modified: Tuesday, 14th March 2023 3:35:46 pm
 * Modified By: hotsuitor (hotsuitor@qq.com>)
 * -----
 * Copyright 2022 - 2023 Your Company, Your Company
 */

function quickSort(arr, startIndex = 0) {
  if (arr.length <= 1) return arr
  const right = [],
    left = [],
    startNum = arr.splice(startIndex, 1)[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < startNum) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), startNum, ...quickSort(right)]
}

let arr2 = Array.from({ length: 100000 }, (item) =>
  Math.floor(Math.random() * Math.floor(100) + 1)
)
console.time('timer')
console.log(quickSort(arr2, 0, arr2.length - 1))
console.timeEnd('timer')
