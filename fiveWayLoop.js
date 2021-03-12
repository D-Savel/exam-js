const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

console.log('\n1---###########\n')

for (let index = 0; index < tab.length; index++) {
  console.log(`${tab[index]}, length: ${(tab[index]).length}`)
}

console.log('\n2---###########\n')

for (elem of tab) {
  console.log(`${elem}, length: ${elem.length}`)
}

console.log('\n3---###########\n')

tab.forEach(element => console.log(`${element}, length: ${element.length}`))

console.log('\n4---###########\n')

let count = 0
while (count < tab.length) {
  console.log(`${tab[count]}, length: ${tab[count].length}`)
  ++count
}

console.log('\n5---###########\n')

let count2 = 0
do {
  console.log(`${tab[count2]}, length: ${tab[count2].length}`)
  ++count2
} while (count2 < tab.length)
