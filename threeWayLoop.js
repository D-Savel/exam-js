const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

for (let index = 0; index < tab.length; index++) {
  console.log(`${tab[index]}, length: ${(tab[index]).length}`)
}

console.log('\n###########\n')

for (elem of tab) {
  console.log(`${elem}, length: ${elem.length}`)
}

console.log('\n###########\n')

tab.forEach(element => console.log(`${element}, length: ${element.length}`))
