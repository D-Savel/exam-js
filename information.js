const AGE_MAJEUR = 18

const information = (firstName, surName, age) => {
  console.log(`\nprenom: ${firstName}\nnom: ${surName}\nage: ${age}`)
  age < 18 ? console.log(`vous serez majeur dans ${AGE_MAJEUR - age} ans`) : console.log(`vous êtes majeur depuis ${age - AGE_MAJEUR}`)

}

information('Sofiane', 'Akermoun', 39)
information('Alice', 'Liddell', 7)
