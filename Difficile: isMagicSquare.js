const isMagicSquare = (squareArray) => {

  let columnsum = 0
  let diagonalsum = 0

  for (let indextab1 = 0; indextab1 < squareArray.length; indextab1++) {
    let rowSum = 0
    let columnsum = 0
    let diagonalsum1 = 0
    let diagonalsum2 = 0
    for (let indextab2 = 0; indextab2 < squareArray[indextab1].length; indextab2++) {
      rowSum += squareArray[indextab1][indextab2]
      if (rowSum !== 15) {
        return false
      }
      columnsum = squareArray[0][indextab2] + squareArray[1][indextab2] + squareArray[2][indextab2]
      if (columnsum !== 15) {
        return false
      }
      diagonalsum1 = squareArray[0][0] + squareArray[1][1] + squareArray[2][2]
      if (diagonalsum1 !== 15) {
        return false
      }
      diagonalsum2 = squareArray[0][2] + squareArray[1][1] + squareArray[2][0]
      if (diagonalsum2 !== 15) {
        return false
      }
      else {
        return true
      }
    }
  }
}

console.log(isMagicSquare([[2, 7, 6], [9, 5, 1], [4, 3, 8],]))
