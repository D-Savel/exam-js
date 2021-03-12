const isLeapYear = (year) => {
  return year % 400 === 0 || year % 4 === 0 && year !== 100
}

console.log(isLeapYear(2000))
console.log(isLeapYear(2008))
console.log(isLeapYear(2021))