const numberPyramid = (nbCharBase) => {
  for (let index = 1; index <= nbCharBase; index++) {
    let char = index.toString()
    console.log(char.repeat(index))
  }
}

numberPyramid(8)
