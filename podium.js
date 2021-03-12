const podium = (numberArray) => {
  let orderedArray = numberArray.sort((a, b) => b - a)
  console.log(`1st: ${numberArray[0]}\n2nd: ${numberArray[1]}\n3rd: ${numberArray[2]}`)
}

podium([12, 2, 5, 20, 8, 9])