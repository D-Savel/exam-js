const average = (array) => {
  let sum = 0
  for (elem of array) {
    sum += elem
  }
  return sum / (array.length)
}
console.log(average([1, 1, 1, 1]))
console.log(average([10, 30, 30, 10]))