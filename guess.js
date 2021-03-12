const guess = (userGuess, secret) => {
  if (userGuess < secret) {
    console.log('Too small!')
  }
  if (userGuess < secret) {
    console.log('Too big!')
  }
  if (userGuess === secret) {
    console.log('You win!')
  }
}

guess(4, 10)
guess(14, 10)
guess(10, 10)